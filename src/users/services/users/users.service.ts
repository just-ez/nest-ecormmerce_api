import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Users } from 'src/Typeorm';
import { serailizedUser, User } from 'src/users/controllers/Types';
import { createUserDto } from 'src/users/controllers/user/Dto/createUser.Dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}
  private users: User[] = [
    {
      username: 'anason',
      Password: '12345',
    },
    {
      username: 'ezra',
      Password: 'hey12',
    },
    {
      username: 'derrick',
      Password: '13245',
    },
  ];

  getAllUsers(): object {
    return this.users.map((user) => plainToClass(serailizedUser, user));
  }
  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  createUser(createUserDto: createUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    console.log(newUser);

    return this.userRepository.save(newUser);
  }

  findUserByUsername(username: string) {
    return this.userRepository.findOneBy({username});
  }
}
