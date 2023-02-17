import { Component, OnDestroy } from "@angular/core";
import { faEdit, faEnvelopeOpenText, faSearch } from "@fortawesome/free-solid-svg-icons";
import { debounceTime, Subject } from "rxjs";
import { Empresa } from "./empresa";
import { EmpresasService } from "./empresas.service";

@Component({
  selector: 'dev-empresas',
  templateUrl: './empresas.component.html'
})

export class EmpresasComponent implements OnDestroy {

  faEnvelopeOpenText = faEnvelopeOpenText;
  faSearch = faSearch;
  faEdit = faEdit;

  empresas: Empresa[] = [];

  filter: string ='';
  debounce: Subject<string> = new Subject<string>();

  constructor(private empresasService: EmpresasService) {

    this.empresasService.listEmpresas()
                        .subscribe(emp => this.empresas = emp);

    this.debounce.pipe(debounceTime(300))
                 .subscribe(filter => this.pesquisaEmpresas(filter))

  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  pesquisaEmpresas(src: string) {

    if(!src || src.length < 3)
    {
      this.empresasService.listEmpresas()
                          .subscribe(emp => this.empresas = emp);
    }
    else {
      this.empresasService.pesquisaEmpresas(src)
                          .subscribe(emp => this.empresas = emp);
    }
  }

}
