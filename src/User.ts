import axios from "axios";

interface UserProps {
    id?: string;
    name?: string;
    age?: number;
}

type Callback = () => void;

export class User {
    events: {[key: string]: Callback[]} = {}

    constructor(private data: UserProps){}

    get(propName: string): (string | number){
        return this.data[propName];
    }
    

    set(updateData: Partial<UserProps>) :void{
        Object.assign(this.data, updateData);
    }

    on(eventName: string, callback: Callback){
        const callbacks = this.events[eventName] || []
        callbacks.push(callback);
        this.events[eventName] =callbacks;
    }

    trigger(eventName: string) : void {
        const callbacks = this.events[eventName];
        if(!callbacks || !callbacks.length){
            return;
        }

        callbacks.forEach(callback => {
            callback()
        });
    }

    fetch(){
        axios.get(`http://localhost:3001/users/${this.get('id')}`)
            .then(response => {
                this.set(response.data)
            })
    }

    save() {
        const id = this.get('id');
        if(id) { 
            // Mise a jour
            axios.patch(`http://localhost:3001/users/${id}`, this.data);
        }
        else{
            //creation
            axios.post('http://localhost:3001/users',this.data);
        }
    }
}