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
    return this.http.post(AUTH_API + SVGTextPositioningElement, {
      username,
      password
    },httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any>{
      return this.http.post(AUTH_API + 'signup', {
        username,
        email,
        password
      }, httpOptions);
  }
}
