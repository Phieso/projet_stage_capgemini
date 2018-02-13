import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map'
import { Profil } from '../_models/index';
import 'rxjs/add/observable/of';
import { environment } from '../../environments/environment';

@Injectable()
export class ProfilService {
    constructor(private http: HttpClient) { 
        this.profilArray = this.initProfil();
    }

    //mock
    profilArray : Profil[];

    initProfil()
    {
      if(environment.mock){
        return this.initMockProfils();
      }
    }

    initMockProfils()
    {
        let profils = new Array<Profil>();
        let nb = 10;
          for(let i=0; i < nb; i++)
          {
            let profil = new Profil();
            profil.id=i;
            profil.firstName="firstname"+i;
            profil.lastName="lastname"+i;
            profil.alias="alias"+i;
            profils.push(profil);
        }
        return profils;
    }
  
    getById(id): Observable<Profil> {
      if(environment.mock){ 
        let profil = Object.assign({},this.profilArray[id]);
        return Observable.of(profil);
      }
      else {
        return this.http.get<Profil>(environment.serverHttp+"/profil/" + id);
      }
    }

    

}