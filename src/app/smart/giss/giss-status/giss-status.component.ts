import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { faGears, faRunning, faUser } from "@fortawesome/free-solid-svg-icons";
import { Pulse } from "src/app/core/proc/pulse";
import { PulseService } from "src/app/core/proc/pulse.service";
import { Giss } from "../giss";
import { GissService } from "../giss.service";

@Component({
    selector:'dev-giss-status',
    templateUrl:'./giss-status.component.html'
})
export class GissStatusComponent {
    
    @ViewChild('closeItera') closeItera!: ElementRef<HTMLButtonElement>;
    @ViewChild('devPopupButton') devPopup!: ElementRef;
  
    faUser = faUser;
    faGears = faGears;
    faRunning = faRunning
  
    gissEdit: Giss | null = null;
    idEditCert: number = 0;
    activeInstances!: Pulse;
  
    gissForm: FormGroup;
    encodedReport: string = '';
    safeEncodedReport: SafeResourceUrl | null;
    disableReproc: boolean = false;
    xml: Text = new Text();
  
    Title: string = '';
    Message: string = '';

    constructor (private formBuilder: FormBuilder,
        private gissService: GissService,
        private pulseService: PulseService,
        private sanitizer: DomSanitizer,
        private router: Router) {
    
        this.safeEncodedReport = null;

        //Construcao de formulario de status
        this.gissForm = this.formBuilder.group({
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




    editGinfes(giss: Giss) {

        //Impedir a edição e abrir popup
        if(giss.cstat == '1' || giss.cstat == '10')
        {
          console.log(this.devPopup?.nativeElement);
          //(document.getElementById("devp") as any)?.showMessage('dsdas', 'dasdasd');
    
          this.Title ="Em Processamento..";
          this.Message ="Aguarde a conculsão do processamento da solicitação...\n ";
    
          if(giss.cstat == '10')
            this.Message += "RPA Operator: " + giss.instance_name;
    
          document.getElementById("devPopupButton")?.click();
          return
        }
    
        this.disableReproc = false;
        this.gissForm.reset();
        this.gissEdit = giss;
        this.idEditCert = giss.id;
        this.encodedReport = '';
        this.safeEncodedReport = '';
        this.gissService.getDocument(giss.id).subscribe(file => {
    
            giss.arquivo = "";//toString(file);
    
          
              if(giss.filetype == 'png')
                this.encodedReport = 'data:image/png;base64,' + giss.arquivo;
              else if(giss.filetype == 'xml')
                this.encodedReport = atob(giss.arquivo.toString());
              else
              {
                this.safeEncodedReport = this.sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf;base64,' + giss.arquivo.toString());
              }
              this.gissForm.disable();
    
              this.gissForm.controls['id'].setValue(giss.id);
    
              this.gissForm.controls['datahoraemissao'].setValue(giss.datahoraemissao);
              this.gissForm.controls['datavalidade'].setValue(giss.datavalidade.toLocaleString());
              this.gissForm.controls['cnpj'].setValue(giss.cnpj);
              this.gissForm.controls['cstat'].setValue(giss.cstat);
    
              this.gissForm.controls['tempo'].setValue(giss.tempo);
              this.gissForm.controls['token'].setValue(giss.token);
              this.gissForm.controls['sys_ident'].setValue(giss.sys_ident);
              this.gissForm.controls['observacao'].setValue(giss.observacao);
    
              document.getElementById("openModalButton")?.click();
        });
    
    
    
      }
}