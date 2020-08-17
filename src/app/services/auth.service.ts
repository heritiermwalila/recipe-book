import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiKey = 'AIzaSyCKlRKGIBGZZIk7y8T_5GnPNUTs4vW8A7M';
  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) { }

  signup(data: { email: string; password: string }) {
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
        this.apiKey,
        {
          email: data.email,
          password: data.password,
          returnSecureToken: true
        }
      )
      .pipe(catchError(this.errorhandler));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
        this.apiKey,
        {
          email,
          password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.errorhandler),
        tap(response => {
          this.handlAuth(
            response.email,
            response.localId,
            response.idToken,
            response.expiresIn
          );
        })
      );
  }

  private handlAuth(email, userid, token, expiresIn) {
    const expireDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, userid, token, expireDate);
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user))
  }

  private errorhandler(error: HttpErrorResponse) {
    let errorMsg = 'Unknown error occured';
    if (error.hasOwnProperty('error')) {
      switch (error.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMsg = 'Email already exist';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMsg = 'Incorrect username or password';
          break;
        case 'INVALID_PASSWORD':
          errorMsg = 'Incorrect username or password';
      }

      return throwError(errorMsg);
    }
    return throwError(errorMsg);
  }
}

export interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
