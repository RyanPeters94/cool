import {registerUser} from "../../Ajax/index.js";
import { atom } from 'nanostores';


export let $userStore = atom({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
})

export const setFirstName = function(firstname){
    let store = $userStore.get()
    store.firstName = firstname;
    return $userStore.get();
}
export const setLastName = function(lastname){
    let store = $userStore.get()
    store.lastName = lastname;
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
export let setUser = function(user){
    const newUser = {...user}
    $userStore.set(newUser);
}
