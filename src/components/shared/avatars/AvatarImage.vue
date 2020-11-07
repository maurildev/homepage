<template>
  <div class="avatar">
    <img
      :class="{
        'avatar__img--small': small,
        'avatar__img--medium': medium,
        'avatar__img--big': big,
        'avatar__img': (small === false) && (medium === false) && (big === false),
      }"
      :src="imgUrl"
    />
    <span v-if="text" class="avatar__text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "AvatarImg",
  props: {
    imgUrl: {
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
    width: 75px;
    height: 75px;
    border-radius: 125px;
    box-shadow: 0px 0px 10px 1px #3c3b3b;
  }

  &__img,
  &__img--medium {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    box-shadow: 0px 0px 10px 1px #3c3b3b;
  }

  &__img--big {
    width: 125px;
    height: 125px;
    border-radius: 125px;
    box-shadow: 0px 0px 10px 1px #3c3b3b;
  }

  &__text {
    display: block;
    font-size: 22px;
    margin-top: 10px;
  }
}
</style>
