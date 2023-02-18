export interface Certidao {

    id: number;
    competencia: string;
    datahoraemissao: Date;
    datavalidade: Date;
    cstat: string;
    codigocontrolecertidao: string;
    observacao: string;
    tempo: number;
    arquivo: Text;
    obrigacao: string;
    filetype: string;
    token: string;
    instance_name: string;
    synched: boolean;
    cnpj: string;
    sys_ident: string;

}