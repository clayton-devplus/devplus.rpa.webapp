import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { faGears, faUser } from "@fortawesome/free-solid-svg-icons";
import { Certidao } from "../certidoes";
import { CertidoesService } from "../certidoes.service";

@Component({
  selector:'dev-certidoes-status',
  templateUrl:'./certidoes-status.component.html'
})
export class CertidoesStatusComponent {

  faUser = faUser;
  faGears = faGears;
  certidaoEdit: Certidao | null = null;
  certidaoForm: FormGroup;
  encodedReport: string = '';
  safeEncodedReport: SafeResourceUrl | null;

  constructor (private formBuilder: FormBuilder,
               private certidaoService: CertidoesService,
               private sanitizer: DomSanitizer) {

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

  editCertidao(certidao: Certidao) {

    if(certidao.filetype == 'png')
      this.encodedReport = 'data:image/png;base64,' + certidao.arquivo;
    else
    {
      this.safeEncodedReport = this.sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf;base64,' + certidao.arquivo.toString());
    }

    this.certidaoEdit = certidao;

    this.certidaoForm.reset();
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


  }

}
