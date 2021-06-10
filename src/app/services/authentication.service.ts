import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient, private router : Router) { }

  login(name: string, password: string) {
    return this.http.post<any>( environment.uri + 'login' , { name: name, password: password})
      .pipe(map((res: any) => {
        // login successful if there's a jwt token in the response
        if (res && res.token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', (res.token));
          localStorage.setItem('user', (res.user));
          localStorage.setItem('rol', res.rol);
        }
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    this.router.navigate(['/home/welcome']);
    // this.router.navigate(['/login'], { queryParams : { returnUrl: state.url }});
  }
}
