import { Injectable } from '@angular/core';
import { users } from './users';
import { Users } from './user-list-component/user-list-component.component';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getData(): Users[] {
    console.log(users);
    return users;
  }
}
