import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Pulse } from "src/app/core/proc/pulse";
import { PulseService } from "src/app/core/proc/pulse.service";
import { Giss } from "../giss";
import { GissService } from "../giss.service";

@Component({
    selector: 'dev-giss-reproc',
    templateUrl: './giss-reproc.component.html'
})
export class GissReprocComponent { 

    @Input() gissReproc!: Giss | null;
    gissOperators: Pulse[] = [];
    reprocForm: FormGroup;
    avancadoCheck = false;

    constructor(private gissService: GissService,
        private pulseService: PulseService,
        private formBuilder: FormBuilder,
        private router: Router){

            this.reprocForm = this.formBuilder.group({
                instance_name: [''],
                proc_avancado:[false],
      
            });
            this.reprocForm.controls['proc_avancado'].setValue(false);

            pulseService.listOperatorsByService(5).subscribe(
            gissOps => {
                this.gissOperators = gissOps;
                console.log(this.gissOperators);
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
            this.gissService.advancedReTry(this.gissReproc!.id, this.reprocForm.controls['instance_name'].value).subscribe(() => {
                this.router.navigate(['smart','giss']);
            });
        }
        else
        {
            console.log('caiu normal');
            this.gissService.reTry(this.gissReproc!.id).subscribe(() => {
                this.router.navigate(['smart','giss']);
            });
        }

    
      }    

}    
