<template>
  <button
    v-if="isVisible"
    class="fab"
    :class="{ highlight: isHighlighted }"
    :style="styles"
  >
    <div class="fab__img">
      <slot name="fab__img"></slot>
    </div>
    <div class="fab__text">
      <slot name="fab__text"></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "FloatingActionButton",
  props: {
    isVisible: {
      type: Boolean,
      default: true,
      required: false,
    },
    isHighlighted: {
      type: Boolean,
      default: false,
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
};
</script>

<style lang="scss" scoped>
@import "styles/global.scss";

.fab {
  background: var(--backgroundColor);
  border: none;
  border-radius: 50px;
  padding: 0.7rem;
  transition: 0.5s all;
  cursor: pointer;

  &__img {
    width: 20px;
    height: 20px;
    fill: var(--color);
    margin: auto;
  }

  &__text {
    font-size: 10px;
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

.highlight {
  box-shadow: 0 0 0 var(--color);
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--color);
  }
  70% {
    box-shadow: 0 0 0 10px transparent;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
}
</style>
