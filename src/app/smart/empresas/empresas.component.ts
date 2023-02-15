import { Component } from "@angular/core";
import { faEnvelopeOpenText, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Empresa } from "./empresa";
import { EmpresasService } from "./empresas.service";

@Component({
  selector: 'dev-empresas',
  templateUrl: './empresas.component.html'
})

export class EmpresasComponent {

  faEnvelopeOpenText = faEnvelopeOpenText;
  faSearch = faSearch;
  empresas: Empresa[] = [];

  constructor(private empresasService: EmpresasService) {

    this.empresasService.listEmpresas()
                        .subscribe(emp => this.empresas = emp)};

}
