export class Juridique {

    constructor() { }

    id: number; //id fiche
    
    plainte: boolean;
    
    avocat: boolean;
    av_lname: string;
    av_fname: string;
    av_adress: string;
    av_cp: string;
    av_ville: string;
    av_tel: string;
    av_mail: string;
    
    aide_jurid: string;
    ref_instruc: string;
    autre: string;
    
    suivis: Array<[number, string, string, string]>;
    suivi_id: number;
    suivi_date: string;
    suivi_resp: string;
    suivi_com: string;
}