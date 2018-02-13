import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map'
import { Foyer } from '../_models/index';
import 'rxjs/add/observable/of';
import { environment } from '../../environments/environment';

@Injectable()
export class FoyerService {
    constructor(private http: HttpClient) { 
        this.foyerArray = this.initFoyer();
    }

    //mock
    foyerArray : Foyer[];

    initFoyer()
    {
      if(environment.mock){
        return this.initMockFoyers();
      }
    }

    initMockFoyers()
    {
        let foyer = new Array<Foyer>();
        let nb = 10;
          for(let i=0; i < nb; i++)
          {
            let foy = new Foyer();
            foy.id=i;
            foyer.push(foy);
        }
        return foyer;
    }
  
    getById(id): Observable<Foyer> {
      if(environment.mock){ 
        let foy = Object.assign({}, this.foyerArray[id]);
        return Observable.of(foy);
      }
      else {
        return this.http.get<Foyer>(environment.serverHttp+"/profil/" + id);
      }
    }

    

}