import { Component } from "@angular/core";
import { faEdit, faEnvelopeOpenText, faPaperclip, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Subject } from "rxjs";
import { Giss } from "../giss";
import { GissService } from "../giss.service";

@Component({

    selector: 'dev-giss-list',
    templateUrl: './giss-list.component.html'

})
export class GissListComponent { 

    faEnvelopeOpenText = faEnvelopeOpenText;
    faSearch = faSearch;
    faEdit = faEdit;
    faPaperclip = faPaperclip;
    GissList: Giss[] = [];
  
    filter: string ='';
    debounce: Subject<string> = new Subject<string>();

    constructor(private gisservice: GissService){

        this.gisservice.listGiss()
        .subscribe(giss => this.GissList = giss);

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