<template>
  <v-app>
    <router-view>
    </router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {

  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">

@import './assets/fonts/style.css';

  #app {
    font-family: 'TT Norms Pro Regular';
    background: rgb(247 248 250);
    p {
      text-decoration: none;
    }
    a {
      text-decoration: none;
    }
  }
</style>
