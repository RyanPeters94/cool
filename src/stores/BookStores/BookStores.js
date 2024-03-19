import { atom } from 'nanostores';
import { getBookList } from '../../Ajax/index.js'; 


export const $booksStore = atom([]);

export async function getAllBooks(){
    const books = await getBookList();
    $booksStore.set(books);
    return $booksStore.get(); 
}
getAllBooks(); 

export const showBookDetails = function(id, bool){

    let book = $booksStore.get().books.find((b) => b.id === id)
    const bookIdx = $booksStore.get().books.indexOf(book); 
    const newBook = {...book, showDetails: bool}
    $booksStore.get().books.splice(bookIdx , 1)
    $booksStore.get().books.push(newBook)
    console.log(book)
}
