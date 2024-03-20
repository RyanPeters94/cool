import { test, it, expect, describe } from 'vitest';
import { $booksStore, getAllBooks } from './BookStores';

describe('setBookListTest', () =>{
    it(() =>{
        expect(getAllBooks()).toNotBe([])
    })
})