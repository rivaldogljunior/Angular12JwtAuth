import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = `${environment.urlBack}`

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any>{
    return this.http.get(API_URL + 'public/all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any>{
    return this.http.get(API_URL + 'private/user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any>{
    return this.http.get(API_URL + 'private/moderator', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any>{
    return this.http.get(API_URL + 'private/admin', { responseType: 'text' });
}

}
