import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token = '';
  // usuario: userModel = new UserModel();

  constructor(
    private http: HttpClient,
    private router: Router // private errorService: ErrorsService
  ) {}

  logueado(): boolean {
    return this.token.length > 5 ? true : false;
  }

  loginService(usuario: any, recordar: boolean = false): Observable<any> {
    if (recordar) {
      localStorage.setItem('user', usuario.usuario);
    } else {
      localStorage.removeItem('user');
    }

    // const url = URL_SERVICIOS + 'login';
    const url = 'login';
    return this.http.post(url, usuario).pipe(
      map((res: any) => {
        // this.guardarLocalStorage(this.usuario, res.access_token);
        return true;
      }),
      catchError((err) => {
        console.log(err);
        // swal('Error al iniciar sesión', 'Credenciales incorrectas', 'error');
        return throwError(err);
      })
    );
  }
}
