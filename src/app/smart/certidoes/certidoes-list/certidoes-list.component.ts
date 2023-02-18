import { Component } from "@angular/core";
import { faEdit, faEnvelopeOpenText, faPaperclip, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Subject } from "rxjs";
import { Empresa } from "../../empresas/empresa";
import { Certidao } from "../certidoes";
import { CertidoesService } from "../certidoes.service";

@Component({
    selector:'dev-certidoes-list',
    templateUrl: './certidoes-list.component.html'
})
export class CertidoesListComponent { 

    faEnvelopeOpenText = faEnvelopeOpenText;
    faSearch = faSearch;
    faEdit = faEdit;
    faPaperclip = faPaperclip;
    certidoes: Certidao[] = [];
  
    filter: string ='';
    debounce: Subject<string> = new Subject<string>();

    constructor(private certidaoService: CertidoesService){

        this.certidaoService.listCertidoes()
        .subscribe(cert => this.certidoes = cert);

    }

    downloadFile(name: string, data: Text)
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