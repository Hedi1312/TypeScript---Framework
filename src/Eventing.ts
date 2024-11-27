import { User } from "./User";


type Callback = () => void;

export class Eventing{
    
    constructor(public user: User){}

    on(eventName: string, callback: Callback){
        const callbacks = this.user.events[eventName] || []
        callbacks.push(callback);
        this.user.events[eventName] =callbacks;
    }
    
    trigger(eventName: string) : void {
        const callbacks = this.user.events[eventName];
        if(!callbacks || !callbacks.length){
            return;
        }
    
        callbacks.forEach(callback => {
            callback()
        });
    }
}