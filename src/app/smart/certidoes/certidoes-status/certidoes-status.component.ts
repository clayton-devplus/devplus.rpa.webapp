import { DatePipe } from "@angular/common";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { faGears, faRunning, faUser } from "@fortawesome/free-solid-svg-icons";
import { PopupComponent } from "src/app/core/popup/popup.component";
import { Certidao } from "../certidoes";
import { CertidoesService } from "../certidoes.service";

@Component({
  selector:'dev-certidoes-status',
  templateUrl:'./certidoes-status.component.html'
})
export class CertidoesStatusComponent {

  @ViewChild('closeItera') closeItera!: ElementRef<HTMLButtonElement>;
  @ViewChild('devPopupButton') devPopup!: ElementRef;

  faUser = faUser;
  faGears = faGears;
  faRunning = faRunning
  certidaoEdit: Certidao | null = null;
  idEditCert: number = 0;
  certidaoForm: FormGroup;
  encodedReport: string = '';
  safeEncodedReport: SafeResourceUrl | null;
  disableReproc: boolean = false;

  Title: string = '';
  Message: string = '';

  constructor (private formBuilder: FormBuilder,
               private certidaoService: CertidoesService,
               private sanitizer: DomSanitizer,
               private router: Router) {

                this.safeEncodedReport = null;


            //Construcao de formulario de empresa
    this.certidaoForm = this.formBuilder.group({
              id: [''],
              datahoraemissao: [''],
              datavalidade: [''],
              cnpj: [''],
              cstat: [''],
              tempo: [''],
              token: [''],
              sys_ident: [''],
              observacao: ['']

          });

  }
  reTry(){

    this.disableReproc = true;
    this.closeItera.nativeElement.click();
  
    this.certidaoService.reTry(this.idEditCert).subscribe(() => {
        this.router.navigate(['smart','certidoes']);
    });

  }

  editCertidao(certidao: Certidao) {


    if(certidao.cstat == '1' || certidao.cstat == '10')
    {
      console.log(this.devPopup?.nativeElement);
      //(document.getElementById("devp") as any)?.showMessage('dsdas', 'dasdasd');
      
      this.Title ="Em Processamento..";
      this.Message ="Aguarde a conculsão do processamento da solicitação...\n ";

      if(certidao.cstat == '10')
        this.Message += "RPA Operator: " + certidao.instance_name;

      document.getElementById("devPopupButton")?.click();
      return
    }

    this.disableReproc = false;
    this.certidaoForm.reset();
    this.certidaoEdit = certidao;
    this.idEditCert = certidao.id;
    this.encodedReport = '';
    this.safeEncodedReport = '';
    this.certidaoService.getDocument(certidao.id).subscribe(file => {

          certidao.arquivo = file;

          if(certidao.filetype == 'png')
            this.encodedReport = 'data:image/png;base64,' + certidao.arquivo;
          else
          {
            this.safeEncodedReport = this.sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf;base64,' + certidao.arquivo.toString());
          }
          this.certidaoForm.disable();

          this.certidaoForm.controls['id'].setValue(certidao.id);

          this.certidaoForm.controls['datahoraemissao'].setValue(certidao.datahoraemissao);
          this.certidaoForm.controls['datavalidade'].setValue(certidao.datavalidade.toLocaleString());
          this.certidaoForm.controls['cnpj'].setValue(certidao.cnpj);
          this.certidaoForm.controls['cstat'].setValue(certidao.cstat);

          this.certidaoForm.controls['tempo'].setValue(certidao.tempo);
          this.certidaoForm.controls['token'].setValue(certidao.token);
          this.certidaoForm.controls['sys_ident'].setValue(certidao.sys_ident);
          this.certidaoForm.controls['observacao'].setValue(certidao.observacao);

          document.getElementById("openModalButton")?.click();
    });



  }

}
