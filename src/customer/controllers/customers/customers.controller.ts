import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { creatCustomerDto } from '../DTOS/customers.dto';
import { CustomersService } from 'src/customer/services/customers/customers.service';
import { NotFoundError } from 'rxjs';
import { NotFoundException } from 'src/users/controllers/Exception/NotFound.Exception';
@Controller('customers')
export class CustomersController {
    constructor (private customerservice: CustomersService) {}
    @Get()
    findAllCustomers () {
        const customers = this.customerservice.findAllUsers()
         if (customers) return customers;
         else throw new NotFoundException();
    }
    @Get(':id')
    getCustomers (
        @Param('id',ParseIntPipe) id: number 
     ) {
        const customers = this.customerservice.findUserById(id)
        if (customers)  return customers
        else throw new NotFoundException();
    }
    @Post()
    @UsePipes(ValidationPipe)
    createCustomers(@Body() createcustomerDto: creatCustomerDto) {
   if (createcustomerDto) return createcustomerDto
   else throw new NotFoundException()
    }
}
