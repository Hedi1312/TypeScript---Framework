import { User } from "./user/User";
import { UserEdit } from "./user/UserEdit";


const parent = document.getElementById('root');
const user = User.buildUser({name: 'John Doe', age:45});


const userEdit = new UserEdit(parent!, user); // le '!' permet de dire 'le parent sera la'
userEdit.render();
console.log(userEdit);