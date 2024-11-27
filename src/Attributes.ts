import { User } from "./User";

export class Attributes {
    
    constructor(public user: User){}

    get(propName: string): (string | number){
        return this.user[propName];
    }

    set(updateData: Partial<UserProps>) :void{
        Object.assign(this.data, updateData);
    }
}

