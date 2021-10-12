import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user-table.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this._http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((data) => {
          const users: User[] = [];
          for (let key in data) {
            users.push({ ...data[key] });
          }
          return users;
        })
      );
  }
}
