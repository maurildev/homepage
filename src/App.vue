<template>
  <v-phone>
    <router-view/>
  </v-phone>
</template>

<script>
import Phone from '@/components/Phone.vue';

export default {
  name: 'App',
  components: {
    'v-phone': Phone
  }  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
