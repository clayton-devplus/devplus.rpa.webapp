export interface Empresa{

  id: number;
  razao: string;
  fantasia: string;
  cnpj: string;
  tel: string;
  contato: string;
  smart_cnd: boolean;
  smart_ecac: boolean;
  smart_cnd_dia: number;
  smart_ecac_dia: number;
  ecac_cert: string;
  smart_giss: boolean;
  usuario_giss: string;
  senha_giss: string;
  smart_ginfes: string;
  usuario_ginfes: string;
  senha_ginfes: string;
  cod_ibge_mun: string;
  smart_nfe: boolean;
  id_empresa: boolean;
  ecac_108: boolean;
  ecac_109: boolean;
  cnd_104: boolean;
  smart_darf: boolean;
  cnd_105: boolean;
  cnd_106: boolean;
  alt_caminho: string;
  dia_fechamento: number;

}
