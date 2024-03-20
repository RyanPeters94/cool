<script setup>
import { useRoute } from 'vue-router';
import router from '../Router/Router.js';

const route = useRoute();

</script>

<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <div class="nav-link" @click="router.push({
        name: 'home'
        })">
        Home
      </div>

      <div class="nav-link" @click="router.push({
        name: 'register_user'
        })">
        Register
      </div>
    </div>
    <div class="nav-bar-right">
      <img src="" alt="some logo" />
    </div>
    
  </div>


</template>

<style>
.nav-bar{
  height: 40px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFF;
  color: #2d3e50;
}
.nav-link{
  margin: 0 5px 0 5px;
}
.nav-bar-left{
  display: flex;
  flex-direction: row;
}

</style>