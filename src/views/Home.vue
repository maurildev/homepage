<template>
  <div class="home-screen">
    <div class="home-screen__app-btns">
      <v-app-button
        imgUrl="http://maurilsalb.com/assets/ios_icons/Photos.png"
        :text="translations.home.photoAppButton"
        @click="$router.push({ name: `photos-${$route.meta.languageCode}` })"
      />
      <v-app-button
        imgUrl="http://maurilsalb.com/assets/ios_icons/CV.png"
        :text="translations.home.cvAppButton"
      />
      <v-app-button
        imgUrl="http://maurilsalb.com/assets/ios_icons/Skills.png"
        :text="translations.home.technologyAppButton"
      />
    </div>
    <div class="home-screen__fav-bar">
      <v-app-button
        imgUrl="http://maurilsalb.com/assets/ios_icons/Phone.png"
        @click="$router.push({ name: `contact-${$route.meta.languageCode}` })"
      />
      <v-app-button
        imgUrl="http://maurilsalb.com/assets/ios_icons/Messages.png"
      />
      <v-app-button
        imgUrl="http://maurilsalb.com/assets/ios_icons/Mail.png"
        @click="$router.push({ name: `mails-${$route.meta.languageCode}` })"
      />
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/shared/buttons/AppButton.vue";
import { mapGetters } from "vuex";

export default {
  name: ["Home"],
  components: {
    "v-app-button": AppButton,
  },
  computed: {
    ...mapGetters(["translations"]),
  },
};
</script>

<style lang="scss" scoped>
@import "styles/global.scss";

.home-screen {
  @include screen;
  background: linear-gradient(182deg, #060606, #2c3b71, #b72a54, #7b9ed7);
  background-size: 600% 600%;
  animation: change-background 60s ease infinite;
  padding-top: 50px;

  &__app-btns {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 100px 100px 100px 100px 100px;
    height: calc(100% - 140px); /* 100px for the favbar */
  }

  &__fav-bar {
    display: flex;
    justify-content: space-evenly;
    width: 95%;
    height: 80px;
    background: #efefefe8;
    border-radius: 30px;
    margin: auto;
  }
}

@keyframes change-background {
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
}

</style>
