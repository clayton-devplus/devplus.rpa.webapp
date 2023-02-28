import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { faEdit, faEnvelopeOpenText, faPaperclip, faSearch } from "@fortawesome/free-solid-svg-icons";
import { delay, interval, Subject, Subscription } from "rxjs";
import { Empresa } from "../../empresas/empresa";
import { EmpresaFormComponent } from "../../empresas/empresa-form/empresa-form.component";
import { EmpresasService } from "../../empresas/empresas.service";
import { Ginfes } from "../ginfes";
import { GinfesService } from "../ginfes.service";

@Component({
    selector:'dev-ginfes-list',
    templateUrl:'./ginfes-list.component.html'
})
export class GinfesListComponent implements OnInit, AfterViewInit, OnDestroy {


    faEnvelopeOpenText = faEnvelopeOpenText;
    faSearch = faSearch;
    faEdit = faEdit;
    faPaperclip = faPaperclip;
    GinfesList: Ginfes[] = [];
    empresaView: Empresa | null = null;

    intervallTimer = interval(6000);
    subscription: Subscription | undefined;

    filter: string ='';
    debounce: Subject<string> = new Subject<string>();

    constructor(private ginfeService: GinfesService,
                private empresaService: EmpresasService){

        this.ginfeService.listGinfes()
        .subscribe(ginfes => {this.GinfesList = ginfes;});

    }
    ngOnDestroy(): void {
        this.unsubscribeToData();
    }
    ngAfterViewInit(): void {
        this.subscribeToData();
    }
    ngOnInit(): void {
       
    }

    showEmpresaByCnpj(cnpj: string) {
        this.empresaService.getEmpresaByCnpj(cnpj)
                          .subscribe(empresa => {
                              this.empresaView = empresa;

                          });

    }

    downloadFile(name: string, id: number)
    {

        this.ginfeService.getDocument(id).subscribe(file =>{

            const linkSource = 'data:application/octet-stream;base64,' + file;
            const downloadLink = document.createElement("a");
            const fileName = name;
  
            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();

        });

    }

    subscribeToData(): void {

        this.subscription = this.intervallTimer.subscribe(() => this.ginfeService.listGinfes()
        .subscribe(ginfes => this.GinfesList = ginfes));
    
    }
    unsubscribeToData(){

        this.subscription?.unsubscribe();

    }


}
