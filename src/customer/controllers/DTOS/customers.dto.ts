import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumber, IsNumberString, Max, max, MaxLength, ValidateNested } from "class-validator"
import { customerAddressDto } from "./customersAddressDto";

export class creatCustomerDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNumberString()
    @MaxLength(3)
    age: number

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(()=> customerAddressDto)
    address: customerAddressDto
}