<template>
  <div class="contact-screen">
    <v-nav-bar />
    <div class="contact-screen-header">
      <v-avatar-image
        imgUrl="http://maurilsalb.com/assets/images/portrait.jpg"
        text="Mauril"
        big
      />
    </div>
    <div 
        v-for="contactOption in contactOptions"
        :key="contactOption.option"
        class="contact-screen-contact-option">
      <img
        class="contact-screen-contact-option__img"
        :src="contactOption.img"
      />
      <span class="contact-screen-contact-option__text--black">
        {{ contactOption.option }}
      </span>
    </div>
    <hr class="contact-screen-divider" />
    <a 
      v-for="platformLink in platformLinks"
      :key="platformLink.link"
      :href="platformLink.link"
      class="contact-screen-platform-link"
    >
      <img
        class="contact-screen-platform-link__img"
        :src="platformLink.img"
      />
      <span class="contact-screen-platform-link__text--blue">
        {{ platformLink.profileName }}
      </span>
    </a>
  </div>
</template>

<script>
import NavBar from "@/components/shared/navigation/NavBar.vue";
import AvatarImage from "@/components/shared/avatars/AvatarImage.vue";

export default {
  name: ["Contact"],
  components: {
    "v-nav-bar": NavBar,
    "v-avatar-image": AvatarImage,
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

  &-platform-link,
  &-contact-option {
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

  &-divider {
    border: 1px solid #f1f1f1;
    margin: 0 10px;
  }
}
</style>
