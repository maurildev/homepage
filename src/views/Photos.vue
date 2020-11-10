<template>
  <div class="photos-screen">
    <v-nav-bar backgroundColor="#000" />
    <div class="photos-screen-slider">
      <div class="photos-screen-slider__img"
        v-for="(img, index) in imgs"
        :key="index"
        :style="{ backgroundImage: 'url(' + img + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/shared/navigation/NavBar.vue";

export default {
  name: "Photos",
  components: {
    "v-nav-bar": NavBar,
  },
  data() {
    return {
      imgs: [
        require("@/assets/photos/benji.png"),
        require("@/assets/photos/benji-me.jpg"),
        require("@/assets/photos/frankfurt.jpg")
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "styles/global.scss";

.photos-screen {
  @include screen;
  background: #000;

  &-slider {
    display: flex;
    width: 100%;
    height: 400px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    &__img {
      flex-shrink: 0;
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      margin-right: 40px;
    }
  }
}
</style>
