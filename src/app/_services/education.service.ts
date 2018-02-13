import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map'
import { Education } from '../_models/index';
import 'rxjs/add/observable/of';
import { environment } from '../../environments/environment';

@Injectable()
export class EducationService {
    constructor(private http: HttpClient) { 
        this.educArray = this.initEduc();
    }

    //mock
    educArray : Education[];

    initEduc()
    {
      if(environment.mock){
        return this.initMockEducations();
      }
    }

    initMockEducations()
    {
        let educ = new Array<Education>();
        let nb = 10;
          for(let i=0; i < nb; i++)
          {
            let ed = new Education();
            ed.id=i;
            educ.push(ed);
        }
        return educ;
    }
  
    getById(id): Observable<Education> {
      if(environment.mock){ 
        let ed = Object.assign({}, this.educArray[id]);
        return Observable.of(ed);
      }
      else {
        return this.http.get<Education>(environment.serverHttp+"/profil/" + id);
      }
    }

    

}