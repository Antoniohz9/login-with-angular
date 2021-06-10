import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

const headers = new HttpHeaders();
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  //get all users
  async getUsuario() {
    const b = await this.http.get(environment.uri + 'user',  {headers: headers}).toPromise();
    return b;
  }
}
