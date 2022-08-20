import { Get, Inject, Controller, Param, ParseIntPipe, UseInterceptors, ClassSerializerInterceptor, HttpException, HttpStatus, Post, Body, UsePipes, ValidationPipe  } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { serailizedUser } from '../Types';
import { createUserDto } from './Dto/createUser.Dto';

@Controller('user')
export class UserController {
  constructor(
    @Inject('User_Service') private readonly userServices: UsersService,
  ) {}
  @Get('')
  getUsers() {
    return this.userServices.getAllUsers();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: createUserDto) {
 return this.userServices.createUser(createUserDto)
  }


  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:username')
  getUserByUsername(@Param('username') username: string) {
    const user = this.userServices.getUserByUsername(username);
    if (user) return new serailizedUser(user);
    else throw new HttpException('404 user not found', HttpStatus.NOT_FOUND);
  }
}
