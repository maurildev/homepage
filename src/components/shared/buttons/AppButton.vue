<template>
  <div class="app-button">
    <img class="app-button__img" :src="imgUrl" />
    <span class="app-button__text"> {{ text }} </span>
  </div>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "styles/global.scss";

.app-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: scale 0.75s ease 0s;
  cursor: pointer;

  &__img {
    width: 55px;
    height: 55px;
  }

  &__text {
    font-size: 14px;
    font-weight: bold;
    color: $white;
    margin-top: 5px;
  }

  &:hover &__img {
    animation: rotate 1s ease-in-out infinite;
  }
}

@keyframes scale {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}
</style>
