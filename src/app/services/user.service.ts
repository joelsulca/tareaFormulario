import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  listUsers = [
    {
      email: 'joelsulca.c@gmail.com',
      password: '3620606'
    },
    {
      email: 'area51@gmail.com',
      password: '123456'
    }, {
      email: 'admi@bucles.com.pe',
      password: 'admi@bucles.com.pe'
    }];

  constructor() {
  }

  authUser(data): boolean {
    let valid = false;
    if (data) {
      this.listUsers.find(value => {
        if (data.email === value.email && data.password === value.password) {
          return valid = true;
        } else {
          return valid = false;
        }
      });
      return valid;
    }
  }
}
