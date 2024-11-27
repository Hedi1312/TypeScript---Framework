
import { Attributes } from "./Attributes";
import { User, UserProps } from "./User";
// const user = new User({name: 'Hedi', age: 22});
// user.set({age: 35});
// user.set({name: "Alice"});

// console.log(user.get('name'));
// console.log(user.get('age'));


// user.on('change', () => console.log("Changment de User"));
// user.on('change', () => console.log("Changment de User #2"));

// user.trigger('change')

// const postData = async () => {
//     try {
//         await axios.post('http://localhost:3001/users', {
//             name: 'John',
//             age: 24
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

// postData();

const attrbs = new Attributes<UserProps>({id: "5", name: "john", age: 32});

const id = attrbs.get('id');
const age = attrbs.get('age');


// const user = new User({name: 'Hedi', age: 20});


