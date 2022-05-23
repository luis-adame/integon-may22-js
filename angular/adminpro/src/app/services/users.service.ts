import { Injectable } from '@angular/core';
import {User} from '../shared/model/user';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users:User[] = [];

  constructor(private http:HttpClient) { }

  getUSers(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3005/users')
  }

  createUser(user:User): Observable<User>{
    //alert(JSON.stringify(user));
    return this.http.post<User>('http://localhost:3005/users', user);
  }
}
