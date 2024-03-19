<script setup>
import { useRoute } from 'vue-router';
import router from '../Router/Router.js';

const route = useRoute();

</script>

<template>
  <div>
    <div @click="router.push({
      name: 'register_user'
    })">
      Register
    </div>
  </div>


</template>

<style>


</style>