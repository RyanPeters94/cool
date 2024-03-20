import { setUserToken } from "../stores/UserStore/UserStore";

export async function getBookList(){
    try{
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books')
         return await response.json();
    } catch(err){
        console.log(err)
    }
}

export async function registerUser(user){
    try{
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const { token } = await response.json()
        setUserToken(token); 
        return token;
    } catch(err){
        console.log(err);
    }
}