import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class createUserDto {
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    @MinLength(8)
    password: string

    @IsNotEmpty()
    @IsEmail()
    email: string
}