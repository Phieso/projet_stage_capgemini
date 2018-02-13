import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { User } from '../_models/index';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(environment.serverHttp+"/users");
    }

    getById(id: number) {
        return this.http.get(environment.serverHttp + "/user/" + id);
    }

    create(user: User) {
        return this.http.post(environment.serverHttp + "/users", user);
    }

    update(user: User) {
        return this.http.put(environment.serverHttp + "/user/" + user.id, user);
    }

    delete(id: string) {
        return this.http.delete(environment.serverHttp + "/user/"+id);
    }
}