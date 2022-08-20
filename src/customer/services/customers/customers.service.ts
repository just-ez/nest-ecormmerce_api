import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      name: 'ezra',
      age: 20,
    },
    {
      id: 2,
      name: 'senmai',
      age: 28,
    },
    {
      id: 3,
      name: 'wisdom',
      age: 40,
    },
  ];
  findAllUsers() {
     return this.users
  }

  findUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
