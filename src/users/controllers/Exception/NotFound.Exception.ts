import { HttpException, HttpStatus } from "@nestjs/common";

export class NotFoundException extends HttpException {
    constructor(msg?: string, status?: HttpStatus) {
        super(msg || 'user not found', status || HttpStatus.NOT_FOUND)
    }
}