import { Component } from "@angular/core";
import { faEdit, faEnvelopeOpenText, faSearch } from "@fortawesome/free-solid-svg-icons";
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
  
    certidoes: Certidao[] = [];
  
    filter: string ='';
    debounce: Subject<string> = new Subject<string>();

    constructor(private certidaoService: CertidoesService){

        this.certidaoService.listCertidoes()
        .subscribe(cert => this.certidoes = cert);

    }

}