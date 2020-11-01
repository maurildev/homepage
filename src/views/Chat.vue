<template>
    <div class="chat-screen">
      <v-nav-bar :isBackButtonVisible="false" :isHomeButtonHighlighted="highlightHomeButton" />
      <div class="chat-screen__chat-simulator">
        <v-chat-simulator  :messages="messages" @completed="highlightHomeButton = true"/>
      </div>
    </div>
</template>

<script>
import ChatSimulator from 'vue-chat-simulator';
import NavBar from '@/components/shared/navigation/NavBar.vue';

export default {
  components: {
    'v-chat-simulator': ChatSimulator,
    'v-nav-bar': NavBar
  },
  data() {
    return {
      highlightHomeButton: false,
      messages: [
        'Heey 👋🏽 ',
        'Ich bin Mauril, ein Frontend Developer',
        'Ich habe mir überlegt, wie du mich am besten kennenlernst',
        'Und es gibt doch nichts persönlicheres als das eigene Smartphone oder ?!',
        'Also viel Spaß, beim stöbern ',
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import "styles/global.scss";

.chat-screen {
  @include screen;
  background: $white;
}
</style>

