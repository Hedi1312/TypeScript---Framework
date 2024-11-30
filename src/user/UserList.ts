import { View } from "../framework/View";
import { User, UserProps } from "./User";
import { UserShow } from "./UserShow";

export class UserList extends View<User, UserProps> {



    eventsMap(): { [key: string]: () => void } {
        return {
            'change:.user-select': this.onUserSelect
        };
    }


    onUserSelect = (): void => {
        const select = this.parent.querySelector('.user-select') as HTMLSelectElement;
        if (select) {
            const selectedUserId = select.value;
            
            console.log(`Utilisateur sélectionné : ${selectedUserId}`);
    
            const users = this.loadUsers();  
            const selectedUser = users.find(user => user.id === selectedUserId);
            
            if (selectedUser) {
                this.model.set({
                    id: selectedUser.id,
                    name: selectedUser.name,
                    age: selectedUser.age
                });
            }
            
        }
    };
    
    

   
    loadUsers(): UserProps[] {
        let users: UserProps[] = [];
        const request = new XMLHttpRequest();
        request.open("GET", "/api.json", false);  
        request.onload = function () {
            if (request.status === 200) {
                const data = JSON.parse(request.responseText);
                
                if (Array.isArray(data.users)) {
                    users = data.users; 
                } else {
                    console.error('Erreur : user existe pas');
                }
            } else {
                console.error('Erreur de chargement');
            }
        };
        request.send();
        return users;
    }

    template(): string {
        const users = this.loadUsers();

        if (!Array.isArray(users)) {
            console.error("Les utilisateurs ne sont pas sous forme de tableau");
            return `<div>Erreur : Impossible de charger les utilisateurs</div>`;
        }

        const options = users.map((user: UserProps) => {
            const isSelected = this.model.get('id') === user.id ? 'selected' : '';
            return `<option value="${user.id}" ${isSelected}>${user.name}</option>`;
        }).join('');

        return `
        <div>
            <h1>Liste des utilisateurs</h1>
            <select class="user-select">
                <option value="">Selectionner un utilisateur</option>
                ${options}
            </select>
        </div>
        `;
    }

    
}
