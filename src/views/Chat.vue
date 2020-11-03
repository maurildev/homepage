<template>
  <div class="chat-screen">
    <v-nav-bar
      :isBackButtonVisible="false"
      :isHomeButtonHighlighted="highlightHomeButton"
    />
    <div class="chat-screen__chat-simulator">
      <v-chat-simulator
        :messages="messages"
        @completed="highlightHomeButton = true"
      />
    </div>
  </div>
</template>

<script>
import ChatSimulator from 'vue-chat-simulator';
import NavBar from '@/components/shared/navigation/NavBar.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    'v-chat-simulator': ChatSimulator,
    'v-nav-bar': NavBar,
  },
  data() {
    return {
      highlightHomeButton: false,
    };
  },
  computed: {
    ...mapGetters(['translations']),
    messages() {
      return [
        this.translations.introChat.chatMessage1,
        this.translations.introChat.chatMessage2,
        this.translations.introChat.chatMessage3,
        this.translations.introChat.chatMessage4,
        this.translations.introChat.chatMessage5,
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "styles/global.scss";

.chat-screen {
  @include screen;
  background: $white;
}
</style>
