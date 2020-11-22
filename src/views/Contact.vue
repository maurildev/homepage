<template>
  <div class="contact-screen">
    <v-nav-bar />
    <div class="contact-screen-header">
      <v-avatar
        :imgSrc="require('@/assets/photos/mauril.jpg')"
        text="Mauril"
        big
      />
    </div>
    <ul class="contact-screen-contact-list">
      <li
        v-for="contactOption in contactOptions"
        :key="contactOption.option"
        class="contact-screen-contact-list-item"
      >
        <img
          class="contact-screen-contact-list-item__img"
          :src="contactOption.img"
        />
        <span class="contact-screen-contact-list-item__text--black">
          {{ contactOption.option }}
        </span>
      </li>
    </ul>
    <hr class="contact-screen-divider" />
    <ul class="contact-screen-platform-list">
      <li
        v-for="platformLink in platformLinks"
        :key="platformLink.link"
        @click="navigateToLink(platformLink.link)"
        class="contact-screen-platform-list-item"
      >
       <img
        class="contact-screen-platform-list-item__img"
        :src="platformLink.img"
        />
        <span class="contact-screen-platform-list-item__text--blue">
          {{ platformLink.profileName }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/shared/navigation/NavBar.vue";
import Avatar from "@/components/shared/media/Avatar.vue";

export default {
  name: ["Contact"],
  components: {
    "v-nav-bar": NavBar,
    "v-avatar": Avatar,
  },
  data() {
    return {
      contactOptions: [
        {
          img: require('@/assets/svg/phone.svg'),
          option: "0176 / 81002551"
        },
        {
          img: require('@/assets/svg/envelope.svg'),
          option: "mauril.salb@gmail.com"
        }
      ],
      platformLinks: [
        {
          link: "https://www.xing.com/profile/Mauril_Salb",
          img: require('@/assets/svg/xing.svg'),
          profileName: "@Mauril Salb"
        },
        {
          link: "https://github.com/maurildev",
          img: require('@/assets/svg/github.svg'),
          profileName: "@maurildev"
        },
        {
          link: "https://www.npmjs.com/~maurildev",
          img: require('@/assets/svg/npm.svg'),
          profileName: "@maurildev"
        }
      ]
    }
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

.contact-screen {
  @include screen;
  background-color: $white;
  
  &-header {
    background-color: #fbfaff;
    padding: 10px 0;   
  }

  &-contact-list,
  &-platform-list {
    list-style: none;
    padding: 0;
    margin: 0;

    &-item {
      display: flex;
      align-items: center;
      margin: 30px 10px;

      &__img {
        width: 20px;
        height: 20px;
        margin-right: 15px;
      }

      &__text--black {
        font-size: 14px;
        color: #000;
      }

      &__text--blue {
        font-size: 14px;
        color: #438cf7;
      }
    }
  }

  &-divider {
    border: 1px solid #f1f1f1;
    margin: 0 10px;
  }
}
</style>
