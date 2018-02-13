export class Profil {

    constructor() { }

    id: number; //id fiche
    
    firstName: string;
    lastName: string;
    alias: string;
    adresse: string;
    cp: string;
    ville: string;
    birthDateDeclared: Date;
    birthDateOfficial: Date;
    tel: string;
    mail: string;
    compteBank: boolean;
    ata: boolean;
    ataDate: Date;
    navigo: boolean;
    navigoAide: number;
    solidTransport: boolean;
    solidTransportAide: number;
    situation: string;
    personnePrevenir: string;
    lienParente: string;
    personneTel: string;
    
    paysNaissance: string;
    villeNaissance: string;
    ethnie: string;
    nationalite1: string;
    nationalite2: string;
    nationalite3: string;
    minorite: boolean;
    langue: string;
    situationFamille: string;
    contraintesAlim: string;
    enfants: number;
    enfantsLocal: string;
    
    arriveDate: Date;
    tempsPresence: number;
    arriveFoyerDate: Date;
    exploitSince: Date;
    exploitToujours: boolean;
    exploitGrossesse: boolean;
    exploitMineure: boolean;
    
    proProjet: string;
    proPlanning: string;
    proEtapes: string[];
    
    contrats: Array<[string, Date, Date]>;
    contratDef: string;
    contratDate: Date;
    contratEcheance: Date;
    
    admission: boolean;
    debut: Date;
    fin: Date;
    entretienPar: string;
    chambre: string;
    admissionType: string;
    changerTel: boolean;
    appelsExt: boolean;
    utilTel: boolean;
    sortiesExt: boolean;
    craintes: boolean;
    interprete: boolean;
    preconisation: string;
    preconisationsNuit: string;
    observations: string;
    autre: string;
}