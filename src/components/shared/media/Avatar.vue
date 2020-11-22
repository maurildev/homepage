<template>
  <div class="avatar">
    <img
      :class="{
        'avatar__img--small': small,
        'avatar__img--medium': medium,
        'avatar__img--big': big,
        'avatar__img': (small === false) && (medium === false) && (big === false),
      }"
      :src="imgSrc"
    />
    <span v-if="text" class="avatar__text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "AvatarImg",
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
.avatar {
  &__img--small {
    width: 60px;
    height: 60px;
    border-radius: 125px;
  }

  &__img,
  &__img--medium {
    width: 100px;
    height: 100px;
    border-radius: 100px;
  }

  &__img--big {
    width: 125px;
    height: 125px;
    border-radius: 125px;
  }

  &__text {
    display: block;
    font-size: 22px;
    margin-top: 10px;
  }
}
</style>
