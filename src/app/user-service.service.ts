import { Injectable } from '@angular/core';
import { User } from './user-component/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users: User[] = [
    new User('Juan Carlos', 24, 'Male', 1),
    new User('Manuel', 28, 'Male', 2)
  ];

  constructor() { }

  logNewUser(user: User) {
    console.log(user);
  }

  addUser(user: User) {
    this.users.push(user);
  }

  getUser(id: number) {
    for (const index of this.users) {
      if (index.userId === id) {
        return index;
      }
    }
    return null;
  }
}
