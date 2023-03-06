import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
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
    ginfesOperators: Pulse[] = [];
    reprocForm: FormGroup;
    avancadoCheck = false;

    constructor(private ginfesService: GinfesService,
                private pulseService: PulseService,
                private formBuilder: FormBuilder,
                private router: Router){

                    this.reprocForm = this.formBuilder.group({
                        instance_name: [''],
                        proc_avancado:[false],
              
                    });
                this.reprocForm.controls['proc_avancado'].setValue(false);

            pulseService.listOperatorsByService(4).subscribe(
                ginfesOps => {
                    this.ginfesOperators = ginfesOps;
                    console.log(this.ginfesOperators);
                }
            )

    }
    clear()
    {
        this.avancadoCheck = false;
        this.reprocForm.controls['instance_name'].disable();
        this.reprocForm.controls['proc_avancado'].setValue(false);

    }
    onCheck()
    {
        console.log('foi');
        if(!this.avancadoCheck)
            this.reprocForm.controls['instance_name'].enable();
        else
            this.reprocForm.controls['instance_name'].disable();

        this.avancadoCheck = !this.avancadoCheck;
    }
    reTry(){

        //this.disableReproc = true;
        //this.closeItera.nativeElement.click();
        

        if(this.avancadoCheck)
        {
            console.log('caiu avancado');
            this.ginfesService.advancedReTry(this.ginfesReproc!.id, this.reprocForm.controls['instance_name'].value).subscribe(() => {
                this.router.navigate(['smart','ginfes']);
            });
        }
        else
        {
            console.log('caiu normal');
            this.ginfesService.reTry(this.ginfesReproc!.id).subscribe(() => {
                this.router.navigate(['smart','ginfes']);
            });
        }

    
      }
}