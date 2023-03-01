import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { faGears, faRunning, faUser } from "@fortawesome/free-solid-svg-icons";
import { Ginfes } from "../ginfes";
import { GinfesService } from "../ginfes.service";

@Component({

    selector: 'dev-ginfes-status',
    templateUrl: './ginfes-status.component.html'
})
export class GinfesStatusComponent {

  @ViewChild('closeItera') closeItera!: ElementRef<HTMLButtonElement>;
  @ViewChild('devPopupButton') devPopup!: ElementRef;

  faUser = faUser;
  faGears = faGears;
  faRunning = faRunning
  ginfesEdit: Ginfes | null = null;
  idEditCert: number = 0;
  ginfesForm: FormGroup;
  encodedReport: string = '';
  safeEncodedReport: SafeResourceUrl | null;
  disableReproc: boolean = false;
  xml: Text = new Text();

  Title: string = '';
  Message: string = '';

  constructor (private formBuilder: FormBuilder,
    private ginfesService: GinfesService,
    private sanitizer: DomSanitizer,
    private router: Router) {

     this.safeEncodedReport = null;


    //Construcao de formulario de empresa
    this.ginfesForm = this.formBuilder.group({
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
    //this.closeItera.nativeElement.click();
    console.log(this.idEditCert);
    this.ginfesService.reTry(this.idEditCert).subscribe(() => {
        this.router.navigate(['smart','ginfes']);
    });

  }
  editGinfes(ginfes: Ginfes) {


    if(ginfes.cstat == '1' || ginfes.cstat == '10')
    {
      console.log(this.devPopup?.nativeElement);
      //(document.getElementById("devp") as any)?.showMessage('dsdas', 'dasdasd');

      this.Title ="Em Processamento..";
      this.Message ="Aguarde a conculsão do processamento da solicitação...\n ";

      if(ginfes.cstat == '10')
        this.Message += "RPA Operator: " + ginfes.instance_name;

      document.getElementById("devPopupButton")?.click();
      return
    }

    this.disableReproc = false;
    this.ginfesForm.reset();
    this.ginfesEdit = ginfes;
    this.idEditCert = ginfes.id;
    this.encodedReport = '';
    this.safeEncodedReport = '';
    this.ginfesService.getDocument(ginfes.id).subscribe(file => {

      ginfes.arquivo = file;

          if(ginfes.filetype == 'png')
            this.encodedReport = 'data:image/png;base64,' + ginfes.arquivo;
          else if(ginfes.filetype == 'xml')
            this.encodedReport = atob(ginfes.arquivo.toString());
          else
          {
            this.safeEncodedReport = this.sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf;base64,' + ginfes.arquivo.toString());
          }
          this.ginfesForm.disable();

          this.ginfesForm.controls['id'].setValue(ginfes.id);

          this.ginfesForm.controls['datahoraemissao'].setValue(ginfes.datahoraemissao);
          this.ginfesForm.controls['datavalidade'].setValue(ginfes.datavalidade.toLocaleString());
          this.ginfesForm.controls['cnpj'].setValue(ginfes.cnpj);
          this.ginfesForm.controls['cstat'].setValue(ginfes.cstat);

          this.ginfesForm.controls['tempo'].setValue(ginfes.tempo);
          this.ginfesForm.controls['token'].setValue(ginfes.token);
          this.ginfesForm.controls['sys_ident'].setValue(ginfes.sys_ident);
          this.ginfesForm.controls['observacao'].setValue(ginfes.observacao);

          document.getElementById("openModalButton")?.click();
    });



  }


}
