import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const AUTH_API = `${environment.urlBack}`
const httpOptions= {
  headers: new HttpHeaders({ 'Cotent-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient){}

  login(username: string, password: string): Observable<any>{
    return this.http.post(AUTH_API + 'api/auth/signin', {
      username,
      password
    },httpOptions);
  }

  register(username: string, email: string, password: string, birth: string, gender: string, city: string, state: string): Observable<any>{
      return this.http.post(AUTH_API + 'api/auth/signup', {
        username,
        email,
        password,
        birth,
        gender,
        city,
        state
      }, httpOptions);
  }
}
