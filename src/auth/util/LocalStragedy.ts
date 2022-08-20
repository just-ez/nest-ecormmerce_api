import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../services/auth/auth.service";

@Injectable()
export class LocalStragedy extends PassportStrategy(Strategy) {
  constructor(@Inject('Auth_service') private readonly authService: AuthService){
    super()
  }
  async validate(username: string, password: string) {

  }
}