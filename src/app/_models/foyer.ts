export class Foyer {

    constructor() { }

    id: number; //id fiche
    
    regul_menage: string;
    regularite: string;
    autre: string;
    
    suivis: Array<[number, string, string, string]>;
    suivi_id: number;
    suivi_date: string;
    suivi_resp: string;
    suivi_com: string;
}