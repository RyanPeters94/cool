import { test, it, expect, describe } from 'vitest';
import {$userStore, setFirstName, setLastName, setEmail, setPassword } from "./UserStore.js";
describe('setFirstNameTest', () =>{
        it(() =>{
            expect(setFirstName('ryan')).toBe($userStore.get().firstname)
        })
})

describe('setLastNameTest', () =>{
        it(() =>{
            expect(setLastName('peters')).toBe($userStore.get().lastname)
        })
})

describe('setEmailTest', () => {
        it(() =>{
            expect(setEmail('peters@yahoo.com')).toBe($userStore.get().email)
        })
})

describe('setPasswordTest', () =>{
        it(() =>{
            expect(setPassword('peters12345')).toBe($userStore.get().password)
        })
})

