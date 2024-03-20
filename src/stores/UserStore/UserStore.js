import {registerUser} from "../../Ajax/index.js";
import { atom } from 'nanostores';


export let $userStore = atom({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
})
export const $tokenStore = atom('');

export const setFirstName = function(firstname){
    console.log(firstname)
    let store = $userStore.get()
    store.firstname = firstname;
    return $userStore.get();
}

export const setLastName = function(lastname){
    console.log(lastname)
    let store = $userStore.get()
    store.lastname = lastname;
    return $userStore.get();
}

export const setEmail = function(email){
    let store = $userStore.get()
    store.email = email;
    return $userStore.get();
}

export const setPassword = function(password){
    let store = $userStore.get()
    store.password = password;
    return $userStore.get();
}

// export const setUser = function(){
//     const user = {
//         firstName: $userStore.get().firstName,
//         lastName: $userStore.get().lastName,
//         email: $userStore.get().email,
//         password: $userStore.get().password
//     }
//     const newUser = {...user}
//     $userStore.set(newUser);
// }

export const submitUser = async function(){
    const user = $userStore.get();
    console.log(user)
    await registerUser(user)
}

export const setUserToken = function(token) {
    $tokenStore.set(token)
}