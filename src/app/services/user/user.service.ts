import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedInUser: any;
  private readonly storageUserKey: string = 'loggedInUser';
  private readonly usersList: User[] = [
    {
      userId: 1,
      email: 'admin@email.com',
      password: 'adminadmin'
    },
    {
      userId: 2,
      email: 'paolo@email.com',
      password: '123456'
    }
  ];

  constructor() {
    const storageUser = sessionStorage.getItem(this.storageUserKey);
    if (storageUser)
      this.loggedInUser = storageUser;
  }

  login(newUser: any): boolean {
    const loggedUser = this.usersList.find((user: User) => user.email == newUser.email && user.password == newUser.password);
    if (loggedUser !== undefined) {
      this.loggedInUser = loggedUser;
      sessionStorage.setItem(this.storageUserKey, JSON.stringify(this.loggedInUser));
      return true;
    }
    return false;
  }

  userIsLoggedIn(): boolean {
    return this.loggedInUser !== undefined;
  }
}
