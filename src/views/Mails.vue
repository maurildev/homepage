<template>
  <div class="mails-screen">
    <v-nav-bar />
    <div class="mails-screen-header">
      <v-avatar
        :imgSrc="require('@/assets/photos/mauril.jpg')"
        small
      />
      <div class="mails-screen-header-contact">
        <span class="mails-screen-header-contact__text--bold">
          Mauril Salb
        </span>
        <span class="mails-screen-header-contact__text">
          mauril.salb@gmail.com
        </span>
      </div>
    </div>
    <ul class="mails-screen-mail-list">
      <li 
        v-for="mailLink in mailLinks"
        :key="mailLink.link"
        @click="navigateToLink(mailLink.link)"
        class="mails-screen-mail-list-item"      
      >
        <span class="mails-screen-mail-list-item__text--bold">
          {{ mailLink.sender }}
        </span>
        <span class="mails-screen-mail-list-item__text--regular">
          {{ mailLink.subject }}
        </span>
        <p class="mails-screen-mail-list-item__text--light">
          {{ mailLink.message }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/shared/navigation/NavBar.vue";
import Avatar from "@/components/shared/media/Avatar.vue";
import { mapGetters } from "vuex";

export default {
  name: ["Mails"],
  components: {
    "v-nav-bar": NavBar,
    "v-avatar": Avatar,
  },
  computed: {
    ...mapGetters(["translations"]),
    mailLinks() {
      return [
        {
          link: "https://www.npmjs.com/package/vue-chat-simulator",
          sender: "npm",
          subject: this.translations.mails.npmSubject,
          message: this.translations.mails.npmMessage,
        },
        {
          link: "https://github.com/maurildev/vue-chat-simulator-demo",
          sender: "GitHub",
          subject: this.translations.mails.gitHubChatSimulatorSubject,
          message: this.translations.mails.gitHubChatSimulatorMessage,
        },
        {
          link: "https://github.com/maurildev/maurildev-homepage",
          sender: "GitHub",
          subject: this.translations.mails.gitHubMaurilDevSubject,
          message: this.translations.mails.gitHubMaurilDevMessage,
        },
      ];
    },
  },
  methods: {
    navigateToLink(link) {
      window.open(link, '_blank')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "styles/global.scss";

.mails-screen {
  @include screen;
  background-color: $white;

  &-header {
    display: flex;
    background-color: #fbfaff;
    padding: 10px 10px;

    &-contact {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 15px;

      &__text {
        font-size: 16px;
      }

      &__text--bold {
        font-weight: bold;
      }
    }
  }

  &-mail-list {
    list-style: none;
    padding: 0;
    margin: 0;

    &-item {
      display: block;
      border-top: 1px solid #dedede;
      padding: 5px 10px;
      transition: 0.75s all;
      cursor: pointer;

      &__text--bold {
        display: block;
        font-weight: bold;
        color: #000000;
        text-align: left;
      }

      &__text--regular {
        display: block;
        font-weight: normal;
        color: #000000;
        text-align: left;
      }

      &__text--light {
        display: block;
        color: #9a9a9a;
        text-align: left;
        margin: 5px 0;
      }

      &:hover {
        background-color: #3780ee;
      }

      &:hover &__text--bold {
        color: $white;
      }

      &:hover &__text--regular,
      &:hover &__text--light {
        color: $white;
      }
    }
  }
}
</style>
