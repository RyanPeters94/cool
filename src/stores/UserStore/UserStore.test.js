import { test, it, expect } from 'vitest';
import {$userStore, setFirstName, setLastName, setEmail, setPassword } from "./UserStore.js";

test(() =>{
    it(() =>{
        expect(setFirstName('ryan')).toBe($userStore.get().firstName)
    })
})

test(() =>{
    it(() =>{
        expect(setLastName('peters')).toBe($userStore.get().lastName)
    })
})
test(() =>{
    it(() =>{
        expect(setEmail('peters@yahoo.com')).toBe($userStore.get().email)
    })
})
test(() =>{
    it(() =>{
        expect(setPassword('peters12345')).toBe($userStore.get().password)
    })
})
