import { MiddlewareConsumer, Module, NestMiddleware, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { ValidateUser } from './midllewares/validate_user.middleware';
import { CustomersService } from './services/customers/customers.service';

@Module({

  controllers: [CustomersController],

  providers: [CustomersService]
})
export class CustomerModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateUser).forRoutes(CustomersController)
    
  }
  
}
