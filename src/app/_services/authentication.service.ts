import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { User } from '../_models/index';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        if(environment.mock){
            let user = new User();
            user.token = "token";
            localStorage.setItem('currentUser', JSON.stringify(user));
            return Observable.of(user);
        }else{
        const body = new HttpParams()
            .set('email', email)
            .set('password', password);
        return this.http.post<any>(environment.serverHttp+'/login', body.toString(),{
            headers: new HttpHeaders()
              .set('Content-Type', 'application/x-www-form-urlencoded')
          })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
        }
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    
  isAuthenticated(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      return true;
    }
    return false;
  }
}