import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class ValidateUser implements NestMiddleware{
  use(req: Request, res: Response, next: NextFunction) {
      console.log('middleware says hi');
      next()
  }
}