<template>
  <div class="chat-about-screen">
    <v-nav-bar />
    <div class="chat-about-screen__chat-simulator">
      <v-chat-simulator :messages="messages"/>
    </div>
  </div>
</template>

<script>
import ChatSimulator from "vue-chat-simulator";
import NavBar from "@/components/shared/navigation/NavBar.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    "v-chat-simulator": ChatSimulator,
    "v-nav-bar": NavBar,
  },
  computed: {
    ...mapGetters(["translations"]),
    messages() {
      return [
        this.translations.aboutMeChat.chatMessage1,
        this.translations.aboutMeChat.chatMessage2,
        this.translations.aboutMeChat.chatMessage3,
        this.translations.aboutMeChat.chatMessage4,
        this.translations.aboutMeChat.chatMessage5,
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "styles/global.scss";

.chat-about-screen {
  @include screen;
  background: $white;
}
</style>
