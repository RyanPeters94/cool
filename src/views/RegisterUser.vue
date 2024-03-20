<script setup>
import { ref } from 'vue'; 
import { $userStore, setFirstName, setLastName, setEmail, setPassword, submitUser } from "../stores/UserStore/UserStore.js";
import { useStore } from '@nanostores/vue'
import NavBar from '../components/NavBar.vue'
import router from '../Router/Router.js'

const userStore = useStore($userStore); 
const showModal = ref(false); 

const userCreate = (user) =>{
  submitUser(user)
  router.push({
    name:'home'
  })
}

</script>

<template>
  <div v-if="!showModal">
    <NavBar />
    <div>
      <button @click="showModal = true">Register User</button>
    </div>
  </div>

    <div class="back-page" v-if="showModal">
    <div>
      <form class="form-wrapper" @submit.prevent="userCreate(userStore)">
        <label for="first-name">First Name: </label>
        <input class="input-area" type="text" name="first-name" @input="(e) => setFirstName(e.target.value)"/>
        <label for="last-name">Last Name: </label>
        <input class="input-area" type="text" name="last-name" @input="(e) => setLastName(e.target.value)"/>
        <label for="email">E-Mail: </label>
        <input class="input-area" type="email" name="email" @input="(e) => setEmail(e.target.value)"/>
        <label for="password">Password: </label>
        <input class="input-area" type="password" name="password" @input="(e) => setPassword(e.target.value)"/>
        <div>
        <button type="submit">Submit</button>
        <button @click="showModal = false">Back</button>
      </div>
      </form>
    </div>
  </div>
</template>

<style>
.back-page{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);;
}
.form-wrapper{
  border: solid 1px #cacfd3;
  border-radius: 8px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 500px;
  color: #2d3e50;
}
.input-area{
  border: solid 1px #cacfd3;
  border-radius: 8px;
  height: 25px;
}

</style>