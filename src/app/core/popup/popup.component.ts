import { Component } from "@angular/core";

@Component({

    selector:'dev-popup',
    templateUrl:'./popup.component.html'

})
export class PopupComponent { 

    Title: string = '';
    Message: string = '';

    constructor(){ }

    showMessage(title: string, msg: string) {

        this.Message = msg;
        this.Title = title;

        console.log(msg);
        document.getElementById("devPopupButton")?.click();
    }

}