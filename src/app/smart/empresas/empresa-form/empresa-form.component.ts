import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { faGears, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { Empresa } from "../empresa";
import { EmpresasService } from "../empresas.service";

@Component({
    selector:'dev-empresa-form',
    templateUrl:'./empresa-form.component.html'
})
export class EmpresaFormComponent { 

    faBug = faUserEdit;
    faGears = faGears;

    empresaForm: FormGroup;
    isEdit = false;
    empresaEdit: Empresa | null = null;

    constructor (private formBuilder: FormBuilder,
                 private empresaService: EmpresasService) {
        
        //Construcao de formulario de empresa
        this.empresaForm = this.formBuilder.group({
            
            id: [''],
            razao: [''],
            fantasia: [''],
            cnpj: [''],
            tel: [''],
            contato: [''],
            usuario_ginfes: [''],
            smart_ginfes: [''],
            senha_ginfes: [''],
            cod_ibge_mun: [''],
            usuario_giss: [''],
            senha_giss: [''],
            smart_giss: [''],
            dia_fechamento: [''],
            smart_cnd: [''],
            cnd_104: [''],
            cnd_105: [''],
            cnd_106: [''],
            ecac_108: [''],
            ecac_109: [''],

        });
    }

    loadEditEmpresa(empresa: Empresa) {

        this.isEdit = true;
        this.empresaEdit = empresa;


        this.empresaForm.reset();
        this.empresaForm.enable();
        
        this.empresaForm.controls['id'].disable();
        this.empresaForm.controls['id'].setValue(empresa.id);

        this.empresaForm.controls['razao'].setValue(empresa.razao);
        this.empresaForm.controls['fantasia'].setValue(empresa.fantasia);
        this.empresaForm.controls['contato'].setValue(empresa.contato);
        this.empresaForm.controls['tel'].setValue(empresa.tel);
        this.empresaForm.controls['cnpj'].setValue(empresa.cnpj);
        this.empresaForm.controls['senha_ginfes'].setValue(empresa.senha_ginfes);
        this.empresaForm.controls['usuario_ginfes'].setValue(empresa.usuario_ginfes);
        this.empresaForm.controls['cod_ibge_mun'].setValue(empresa.cod_ibge_mun);
        this.empresaForm.controls['smart_ginfes'].setValue(empresa.smart_ginfes);
        this.empresaForm.controls['senha_giss'].setValue(empresa.senha_giss);
        this.empresaForm.controls['usuario_giss'].setValue(empresa.usuario_giss);
        this.empresaForm.controls['smart_giss'].setValue(empresa.smart_giss);
        this.empresaForm.controls['dia_fechamento'].setValue(empresa.dia_fechamento);

        this.empresaForm.controls['smart_cnd'].setValue(empresa.smart_cnd);
        this.empresaForm.controls['cnd_104'].setValue(empresa.cnd_104);
        this.empresaForm.controls['cnd_105'].setValue(empresa.cnd_105);
        this.empresaForm.controls['cnd_106'].setValue(empresa.cnd_106);

        this.empresaForm.controls['ecac_108'].setValue(empresa.ecac_108);
        this.empresaForm.controls['ecac_109'].setValue(empresa.ecac_109);

    }

    loadViewEmpresa(empresa: Empresa) {

        this.isEdit = false;

        this.empresaForm.reset();
        
        this.empresaForm.controls['id'].disable();
        this.empresaForm.controls['id'].setValue(empresa.id);

        this.empresaForm.controls['razao'].disable();
        this.empresaForm.controls['razao'].setValue(empresa.razao);

        this.empresaForm.controls['fantasia'].disable();
        this.empresaForm.controls['fantasia'].setValue(empresa.fantasia);

        this.empresaForm.controls['contato'].disable();
        this.empresaForm.controls['contato'].setValue(empresa.contato);

        this.empresaForm.controls['tel'].disable();
        this.empresaForm.controls['tel'].setValue(empresa.tel);

        this.empresaForm.controls['cnpj'].disable();
        this.empresaForm.controls['cnpj'].setValue(empresa.cnpj);
    
        this.empresaForm.controls['senha_ginfes'].disable();
        this.empresaForm.controls['senha_ginfes'].setValue(empresa.senha_ginfes);
        this.empresaForm.controls['usuario_ginfes'].disable();
        this.empresaForm.controls['usuario_ginfes'].setValue(empresa.usuario_ginfes);
        this.empresaForm.controls['cod_ibge_mun'].disable();
        this.empresaForm.controls['cod_ibge_mun'].setValue(empresa.cod_ibge_mun);
        this.empresaForm.controls['smart_ginfes'].disable();
        this.empresaForm.controls['smart_ginfes'].setValue(empresa.smart_ginfes);

        this.empresaForm.controls['senha_giss'].disable();
        this.empresaForm.controls['senha_giss'].setValue(empresa.senha_giss);
        this.empresaForm.controls['usuario_giss'].disable();
        this.empresaForm.controls['usuario_giss'].setValue(empresa.usuario_giss);
        this.empresaForm.controls['smart_giss'].disable();
        this.empresaForm.controls['smart_giss'].setValue(empresa.smart_giss);
        this.empresaForm.controls['dia_fechamento'].disable();
        this.empresaForm.controls['dia_fechamento'].setValue(empresa.dia_fechamento);

        this.empresaForm.controls['smart_cnd'].disable();
        this.empresaForm.controls['smart_cnd'].setValue(empresa.smart_cnd);
        this.empresaForm.controls['cnd_104'].disable();
        this.empresaForm.controls['cnd_104'].setValue(empresa.cnd_104);
        this.empresaForm.controls['cnd_105'].disable();
        this.empresaForm.controls['cnd_105'].setValue(empresa.cnd_105);
        this.empresaForm.controls['cnd_106'].disable();
        this.empresaForm.controls['cnd_106'].setValue(empresa.cnd_106);


        this.empresaForm.controls['ecac_108'].disable();
        this.empresaForm.controls['ecac_108'].setValue(empresa.ecac_108);
        this.empresaForm.controls['ecac_109'].disable();
        this.empresaForm.controls['ecac_109'].setValue(empresa.ecac_109);

    }

    updateEmpresa(empresa: Empresa) {
        this.empresaService.updateEmpresa(empresa)
        .subscribe();
    }

}