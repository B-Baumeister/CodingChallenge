import { Injectable } from '@angular/core';
import { users } from './users';
import { Users } from './models/Users.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getData(): Users[] {
    return users;
  }
}
