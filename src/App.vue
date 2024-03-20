<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="router-wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.router-wrapper{
  overflow-y: auto;
  overflow-x: auto;
  min-height: 100%;
  min-width: 100%;
}

</style>
