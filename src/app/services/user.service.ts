import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

import { IUser } from '../models/user';
import { db } from 'src/assets/db';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'assets/db.ts';
  _db: IUser[] = db;
  constructor() {}

  getUser = (email: string): Observable<IUser | undefined> =>
    of(this._db).pipe(map((users) => users.find((user) => user.email === email)));
}
