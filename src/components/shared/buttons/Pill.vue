<template>
  <button class="pill" :style="styles">
    <img class="pill__img" :src="imgSrc" v-if="imgSrc" />
    <span class="pill__text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "Pill",
  props: {
    imgSrc: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    hoverBackgroundColor: {
      type: String,
      required: false,
    },
    hoverColor: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      styles: {
        "--backgroundColor": this.backgroundColor,
        "--color": this.color,
        "--hoverBackgroundColor": this.hoverBackgroundColor,
        "--hoverColor": this.hoverColor,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "styles/global.scss";

.pill {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--backgroundColor);
  color: var(--color);
  border: none;
  border-radius: 25px;
  padding: 0.75rem 1.5rem;
  margin: 0.75rem;
  transition: all 0.5s;
  cursor: pointer;

  &__img {
    width: 25px;
    height: 25px;
    margin-right: 0.5rem;
  }
}
.pill:hover {
  background: var(--hoverBackgroundColor);
  color: var(--hoverColor);
}
.pill:focus {
  outline: none;
}
</style>
