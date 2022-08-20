import { IsNumberString } from "class-validator"

export class customerAddressDto {
  @IsNumberString()
  Line1: number;
//   @IsNumberString()
  Line2?: number;
  @IsNumberString()
  zip: string;
  city: string;
  state: string;
}