<template>
  <div class="logo">
    <img
      :class="{
        'logo__img--small': small,
        'logo__img--medium': medium,
        'logo__img--big': big,
        'logo__img': (small === false) && (medium === false) && (big === false),
      }"
      :src="imgSrc"
    />
    <span v-if="text" class="logo__text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
    small: {
      type: Boolean,
      required: false,
    },
    medium: {
      type: Boolean,
      required: false,
    },
    big: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  &__img--small {
    width: 35px;
    height: 35px;
  }

  &__img,
  &__img--medium {
    width: 50px;
    height: 50px;
  }

  &__img--big {
    width: 75px;
    height: 75px;
  }

  &__text {
    display: block;
    font-size: 12px;
    font-weight: bold;
    margin-top: 10px;
  }
}
</style>
