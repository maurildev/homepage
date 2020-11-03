<template>
  <button
    v-if="isVisible"
    class="nav-back-btn"
    :style="styles"
    @click="$router.go(-1)"
  >
    <svg class="nav-back-btn__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
    </svg>
    <span class="nav-back-btn__text">{{ translations.navBar.back }}</span>
  </button>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavBackButton",
  props: {
    isVisible: {
      type: Boolean,
      default: true,
      required: false,
    },
    backgroundColor: {
      type: String,
      default: "transparent",
      required: false,
    },
    color: {
      type: String,
      default: "#438cf7",
      required: false,
    },
  },
  data() {
    return {
      styles: {
        "--backgroundColor": this.backgroundColor,
        "--color": this.color,
      },
    };
  },
  computed: {
    ...mapGetters(["translations"]),
  },
};
</script>

<style lang="scss" scoped>
@import "styles/global.scss";

.nav-back-btn {
  display: flex;
  align-items: center;
  background-color: var(--backgroundColor);
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  transition: 0.5s all;
  cursor: pointer;

  &__img {
    width: 15px;
    height: 15px;
    fill: var(--color);
    margin-right: 0.25rem;
  }

  &__text {
    font-size: 14px;
    color: var(--color);
  }

  &:hover {
    background-color: var(--color);
  }

  &:hover &__img {
    fill: $white;
  }

  &:hover &__text {
    color: $white;
  }

  &:focus {
    outline: none;
  }
}
</style>
