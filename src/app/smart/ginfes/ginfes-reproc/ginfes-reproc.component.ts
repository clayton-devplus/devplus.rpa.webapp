import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Pulse } from "src/app/core/proc/pulse";
import { PulseService } from "src/app/core/proc/pulse.service";
import { Ginfes } from "../ginfes";
import { GinfesService } from "../ginfes.service";

@Component({
    selector:'dev-ginfes-reproc',
    templateUrl:'./ginfes-reproc.component.html',
})
export class GinfesReprocComponent { 

    @Input() ginfesReproc!: Ginfes | null;
    ginfesOperators!: Pulse[];

    constructor(private ginfesService: GinfesService,
                private pulseService: PulseService,
                private router: Router){

            pulseService.listOperatorsByService(4).subscribe(
                ginfesOps => {
                    this.ginfesOperators = ginfesOps;
                    console.log(this.ginfesOperators);
                }
            )

    }


    reTry(){

        //this.disableReproc = true;
        //this.closeItera.nativeElement.click();
        console.log(this.ginfesReproc);
        // this.ginfesService.reTry(this.ginfesReproc!.id).subscribe(() => {
        //     this.router.navigate(['smart','ginfes']);
        // });
    
      }
}