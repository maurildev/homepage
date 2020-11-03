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
    ...mapMutations(["initiliaseLanguageFromLocalStorage", "setLanguage"]),
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
    this.initiliaseLanguageFromLocalStorage();
  },
};
</script>

<style lang="scss">
@import "styles/global.scss";

body {
  margin: 0;
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
    background-image: url(https://images.pexels.com/photos/172277/pexels-photo-172277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
