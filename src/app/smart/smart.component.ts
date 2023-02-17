import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  templateUrl:'./smart.component.html',
  selector:'dev-smart'
})
export class SmartComponent { 

  constructor(private title: Title) {
    title.setTitle('Smart Contábil - Operador');
  }

}
