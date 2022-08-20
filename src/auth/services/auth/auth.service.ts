import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
    constructor(@Inject('User_Service') private readonly userSevice: UsersService){}
  async  validateUser(username: string, password: string) {
   const userDb = await this.userSevice.findUserByUsername(username)
   if (userDb) {
    console.log(userDb);
    
   }
    }
}
