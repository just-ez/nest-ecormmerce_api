import { Exclude } from "class-transformer";

export interface User {
    username: string,
    Password: string
}

export class serailizedUser {
    username: string

    @Exclude()
    Password: string

    constructor(partial: Partial<serailizedUser>) {Object.assign(this,partial)}
}