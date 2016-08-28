import {Http, Headers} from "angular2/http";
import {Injectable, EventEmitter} from "angular2/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import {User} from "./user";

@Injectable()

export class AuthService {
    host: string = 'http://localhost:3000/user/';

    constructor(private _http: Http) {}

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post(this.host, body, {headers: headers})
                .map(response => response.json())
                .catch(error => Observable.throw(error.json()));
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post(this.host+'signin', body, {headers: headers})
                .map(response => response.json())
                .catch(error => Observable.throw(error.json()));
    }
}
