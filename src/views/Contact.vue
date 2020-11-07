<template>
  <div class="contact-screen">
    <v-nav-bar />
    <div class="contact-screen-header">
      <v-avatar-image
        imgUrl="http://maurilsalb.com/assets/images/portrait.jpg"
        text="Mauril"
        bigr
      />
    </div>
    <div class="contact-screen-contact-info">
      <img
        class="contact-screen-contact-info__icon"
        :src="require('@/assets/svg/phone.svg')"
      />
      <span class="contact-screen-contact-info__text">0176 / 81002551</span>
    </div>
    <div class="contact-screen-contact-info">
      <img
        class="contact-screen-contact-info__icon"
        :src="require('@/assets/svg/envelope.svg')"
      />
      <span class="contact-screen-contact-info__text"
        >mauril.salb@gmail.com</span
      >
    </div>
    <hr class="contact-screen-divider" />
    <a
      class="contact-screen-contact-info"
      href="https://www.xing.com/profile/Mauril_Salb"
    >
      <img
        class="contact-screen-contact-info__icon"
        :src="require('@/assets/svg/xing.svg')"
      />
      <span class="contact-screen-contact-info__text">@Mauril Salb</span>
    </a>
    <a class="contact-screen-contact-info" href="https://github.com/maurildev">
      <img
        class="contact-screen-contact-info__icon"
        :src="require('@/assets/svg/github.svg')"
      />
      <span class="contact-screen-contact-info__text">@maurildev</span>
    </a>
    <a
      class="contact-screen-contact-info"
      href="https://www.npmjs.com/~maurildev"
    >
      <img
        class="contact-screen-contact-info__icon"
        :src="require('@/assets/svg/npm.svg')"
      />
      <span class="contact-screen-contact-info__text">@maurildev</span>
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

  &-contact-info {
    display: flex;
    align-items: center;
    margin: 30px 10px;

    &__icon {
      width: 20px;
      height: 20px;
      margin-right: 15px;
    }

    &__text {
      font-size: 14px;
    }
  }

  &-divider {
    border: 1px solid #f1f1f1;
    margin: 0 10px;
  }
}
</style>
