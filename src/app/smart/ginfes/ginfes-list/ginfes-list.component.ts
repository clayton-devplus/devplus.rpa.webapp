import { Component } from "@angular/core";
import { faEdit, faEnvelopeOpenText, faPaperclip, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Subject } from "rxjs";
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
  
    filter: string ='';
    debounce: Subject<string> = new Subject<string>();

    constructor(private ginfeService: GinfesService){

        this.ginfeService.listGinfes()
        .subscribe(ginfes => {this.GinfesList = ginfes; console.log()});

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