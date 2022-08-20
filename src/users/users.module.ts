import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/Typeorm';
import { UserController } from './controllers/user/user.controller';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users])
  ],
  controllers: [UserController],
  providers: [{
    provide: 'User_Service',
    useClass: UsersService
  }]
})
export class UsersModule {}
