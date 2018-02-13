import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map'
import { Fiche } from '../_models/index';
import 'rxjs/add/observable/of';
import { environment } from '../../environments/environment';

@Injectable()
export class FicheService {
    constructor(private http: HttpClient) { 
      this.fiches = this.initFiche();
    }

    //Data sibbling @see : https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
    //default value
    private defaultValue = -1; 
    private defaultMode = Mode.new;

    // default mode
    mode = this.defaultMode;

    private ficheSource = new BehaviorSubject<number>(this.defaultValue);

    currentFiche = this.ficheSource.asObservable();

    //les fiches
    private fiches = new Array<Fiche>();
  
    initFiche()
    {
      if(environment.mock){
        return this.initMock();
      }
    }

    changeFiche(idFiche: number) {
      this.mode = Mode.update;
      this.ficheSource.next(idFiche)
    }

    changeModeFiche(mode: Mode){
      this.mode = mode;
    }
    //end data sibbling

    //httpServices : 

    getAll(): Observable<Fiche[]> {
      if(environment.mock){
        return Observable.of(this.fiches);
      }
      else{
        return this.http.get<Fiche[]>(environment.serverHttp+"/fiches");
      }
    }

    getById(id): Observable<Fiche> {
      if(environment.mock){ 
        return Observable.of(this.fiches[id]);
      }
      else {
        return this.http.get<Fiche>(environment.serverHttp+"/fiche/" + id);
      }
    }

    //mock 
    initMock(){
      let fiches = new Array<Fiche>();
      let nb = 10;
        for(let i=0; i < nb; i++)
        {
          let fiche = new Fiche();
          fiche.id=i;
          fiche.firstName = "firstname"+i;
          fiche.lastName = "lastname"+i;
          fiche.alias = "alias"+i;
          fiche.birthDate = new Date();
          fiche.lastMaj = new Date();
          fiche.tel = "0601020304";
          fiche.email = fiche.firstName + "." + fiche.lastName + "@gmail.fr";
          fiches.push(fiche);
      }
      return fiches;
    }
    //fin mock 
    //fin httpServices

}

// mode de lecture / écriture / update d'une fiche
export enum Mode {
  update,
  read,
  new
}