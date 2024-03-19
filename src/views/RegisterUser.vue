<script setup>

import { $userStore, setFirstName, setLastName, setEmail, setPassword } from "../stores/UserStore/UserStore.js";
import { useStore } from '@nanostores/vue';

const userStore = useStore($userStore);

</script>

<template>
  <div>
    <div>
      <form>
        <label for="first-name">First Name: </label>
        <input type="text" name="first-name" @input="(e) => setFirstName(e.target.value)"/>
        <label for="last-name">Last Name: </label>
        <input type="text" name="last-name" @input="(e) => setLastName(e.target.value)"/>
        <label for="email">E-Mail: </label>
        <input type="email" name="email" @input="(e) => setEmail(e.target.value)"/>
        <label for="password">Password: </label>
        <input type="password" name="password" @input="(e) => setPassword(e.target.value)"/>
      </form>
    </div>
  </div>


</template>

<style>


</style>