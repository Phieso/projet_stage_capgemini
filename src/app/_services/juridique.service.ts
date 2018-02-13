import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map'
import { Juridique } from '../_models/index';
import 'rxjs/add/observable/of';
import { environment } from '../../environments/environment';

@Injectable()
export class JuridiqueService {
    constructor(private http: HttpClient) { 
        this.juridArray = this.initJurid();
    }

    //mock
    juridArray : Juridique[];

    initJurid()
    {
      if(environment.mock){
        return this.initMockJuridiques();
      }
    }

    initMockJuridiques()
    {
        let juridique = new Array<Juridique>();
        let nb = 10;
          for(let i=0; i < nb; i++)
          {
            let jurid = new Juridique();
            jurid.id=i;
            juridique.push(jurid);
        }
        return juridique;
    }
  
    getById(id): Observable<Juridique> {
      if(environment.mock){ 
        let jur = Object.assign({}, this.juridArray[id]);
        return Observable.of(jur);
      }
      else {
        return this.http.get<Juridique>(environment.serverHttp+"/profil/" + id);
      }
    }

    

}