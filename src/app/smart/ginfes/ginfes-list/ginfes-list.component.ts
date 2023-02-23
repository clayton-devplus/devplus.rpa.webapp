import { Component, ElementRef, ViewChild } from "@angular/core";
import { faEdit, faEnvelopeOpenText, faPaperclip, faSearch } from "@fortawesome/free-solid-svg-icons";
import { delay, Subject } from "rxjs";
import { Empresa } from "../../empresas/empresa";
import { EmpresaFormComponent } from "../../empresas/empresa-form/empresa-form.component";
import { EmpresasService } from "../../empresas/empresas.service";
import { Ginfes } from "../ginfes";
import { GinfesService } from "../ginfes.service";

@Component({
    selector:'dev-ginfes-list',
    templateUrl:'./ginfes-list.component.html'
})
export class GinfesListComponent {


    faEnvelopeOpenText = faEnvelopeOpenText;
    faSearch = faSearch;
    faEdit = faEdit;
    faPaperclip = faPaperclip;
    GinfesList: Ginfes[] = [];
    empresaView: Empresa | null = null;

    filter: string ='';
    debounce: Subject<string> = new Subject<string>();

    constructor(private ginfeService: GinfesService,
                private empresaService: EmpresasService){

        this.ginfeService.listGinfes()
        .subscribe(ginfes => {this.GinfesList = ginfes;});

    }

    showEmpresaByCnpj(cnpj: string) {
        this.empresaService.getEmpresaByCnpj(cnpj)
                          .subscribe(empresa => {
                              this.empresaView = empresa;

                          });

    }

    downloadFile(name: string, data: string)
    {

        console.log(data);
          const linkSource = 'data:application/octet-stream;base64,' + data;
          //const linkSource = data;
          const downloadLink = document.createElement("a");
          const fileName = name;

          downloadLink.href = linkSource;
          downloadLink.download = fileName;
          downloadLink.click();
    }


}
