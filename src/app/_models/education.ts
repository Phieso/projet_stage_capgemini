export class Education {

    constructor() { }

    id: number; //id fiche
    
    form_insert: boolean;
    budget: string;
    logement: string;
    act_ext: string;
    autre: string;
    
    suivis: Array<[number, string, string, string]>;
    suivi_id: number;
    suivi_date: string;
    suivi_resp: string;
    suivi_com: string;
}