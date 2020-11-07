<template>
  <div class="mails-screen">
    <v-nav-bar />
    <div class="mails-screen-header">
      <v-avatar-image
        imgUrl="http://maurilsalb.com/assets/images/portrait.jpg"
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
    <a
      v-for="mailLink in mailLinks"
      :key="mailLink.link"
      :href="mailLink.link"
      class="mails-screen-mail-link"
    >
      <span class="mails-screen-mail-link__text--bold">
        {{ mailLink.sender }}
      </span>
      <span class="mails-screen-mail-link__text--regular">
        {{ mailLink.subject }}
      </span>
      <p class="mails-screen-mail-link__text--light">
        {{ mailLink.message }}
      </p>
    </a>
  </div>
</template>

<script>
import NavBar from "@/components/shared/navigation/NavBar.vue";
import AvatarImage from "@/components/shared/avatars/AvatarImage.vue";
import { mapGetters } from "vuex";

export default {
  name: ["Mails"],
  components: {
    "v-nav-bar": NavBar,
    "v-avatar-image": AvatarImage,
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

  &-mail-link {
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
</style>
