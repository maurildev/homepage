<template>
  <v-phone>
    <router-view />
  </v-phone>
</template>

<script>
import Phone from "@/components/Phone.vue";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    "v-phone": Phone,
  },
  methods: {
    ...mapMutations(["setLanguage"]),
  },
  watch: {
    $route() {
      if (
        this.$route.meta.languageCode != localStorage.getItem("languageCode")
      ) {
        this.setLanguage(this.$route.meta.languageCode);
      }
    },
  },
  created() {
    this.setLanguage(localStorage.getItem('languageCode'));
  }
};
</script>

<style lang="scss">
@import "styles/global.scss";

body {
  margin: 0;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  @include tablet {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #bcada1;
    background-image: url('assets/photos/desk.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
