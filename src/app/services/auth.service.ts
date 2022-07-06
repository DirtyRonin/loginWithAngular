import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { db } from 'src/assets/db';
import { IAuth } from '../models/auth';
import { ILogin } from '../models/login';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _auth: IAuth;
  private subject = new Subject<IAuth>();
  private _db: IUser[] = db;
  constructor() {
    this._auth = {
      UserId: '',
      IsAuthenticated: false,
      status: 'Logged Out',
      message: '',
    };
  }

  login = (email: string, password: string): void => {
    this.authenticate(email, password, this._db).subscribe((result) => {
      if (!result) {
        this.setAuthentication({
          UserId: '',
          IsAuthenticated: false,
          status: "Error",
          message: 'Invalid Credentials',
        })

        return
      }

      this.setAuthentication(result);
    });
  };

  logout = (): void => {
    this.setAuthentication({
      UserId: '',
      IsAuthenticated: false,
      status: 'Logged Out',
      message: '',
    });
  };

  onUserChange = (): Observable<IAuth> => this.subject.asObservable();

  authenticate = (
    email: string,
    password: string,
    users: IUser[]
  ): Observable<IAuth | undefined> => {
    return of(
      users
        .map<ILogin>((user) => ({
          userId: user.email,
          password: user.login.password,
        }))
        .filter(
          (login) => login.userId === email && login.password === password
        )
        .map<IAuth>((filteredLogin) => ({
          IsAuthenticated: true,
          UserId: filteredLogin.userId,
          status: 'Logged In',
          message: '',
        }))
        .find((auth) => auth)
    );
  };

  private setAuthentication = (auth: IAuth): void => {
    this._auth = auth;
    this.subject.next(this._auth);
  };
}
