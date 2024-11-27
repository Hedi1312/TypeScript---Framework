import axios from "axios";
import { User } from "./User";

export class Sync {


    constructor(public user: User){}
    
    fetch(){
        axios.get(`http://localhost:3001/users/${this.user.get('id')}`)
            .then(response => {
                this.user.set(response.data)
            })
    }
    
    save() {
    
        const id = this.user.get('id');
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