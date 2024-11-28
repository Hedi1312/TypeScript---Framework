import { View } from "../framework/View";
import { User, UserProps } from "./User";

export class UserForm extends View<User, UserProps> {

    
    eventsMap() : {[key: string]: ()=> void}{
        return {
            'click:.set-age:' : this.onSetAgeClick, //pas de () car on stock la methode et on ne l'invoque pas
            'click:.set-name' : this.onSetNameClick,
            'click:.save-model' : this.onSaveModelClick
        }
    }


    onSetAgeClick = () => {
        this.model.setRandomAge();
    }


    onSetNameClick = () => {
        const input = this.parent.querySelector('input'); //OU const newName = document.getElementById("newName") as HTMLInputElement;
        if(input){
            this.model.set({name:`${input.value}`});
        }
    }

    onSaveModelClick = () => {
        this.model.save();
    }


    template() :string{
        return `
        <div>
            <h1>User Form</h1>
            <input type="text" placeholder="Entrer un prenom"/>
            <button class="set-age">Random Age</button>
            <button class="set-name">Update Name</button>
            <button class="save-model">Save</button>
        </div>
        
        `;
    }


}