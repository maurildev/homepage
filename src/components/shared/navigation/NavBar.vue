<template>
  <nav class="nav-bar" :style="styles">
    <v-nav-back-button
      :isVisible="isBackButtonVisible"
      :color="color"
      :backgroundColor="backgroundColor"
    />
    <div class="nav-bar__fab">
      <v-fab
        :isVisible="isHomeButtonHighlighted"
        :isHighlighted="isHomeButtonHighlighted"
        :color="color"
        :backgroundColor="backgroundColor"
      >
        <template v-slot:fab__img> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
          </svg>
        </template>
        <template v-slot:fab__text>
          Klick mich !
        </template>
      </v-fab>
    </div>
  </nav>
</template>

<script>
import NavBackButton from "@/components/shared/buttons/NavBackButton.vue";
import FloatingActionButton from "@/components/shared/buttons/FloatingActionButton.vue";

export default {
  name: "NavBar",
  components: {
    "v-nav-back-button": NavBackButton,
    "v-fab": FloatingActionButton,
  },
  props: {
    isBackButtonVisible: {
      type: Boolean,
      default: true,
      required: false,
    },
    isHomeButtonHighlighted: {
      type: Boolean,
      default: false,
      required: false,
    },
    backgroundColor: {
      type: String,
      default: "#fbfaff",
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

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 70px;
  background-color: var(--backgroundColor);
  padding: 20px 0px 0px 2px;

  &__fab {
    position: absolute;
    top: 75%;
    right: 2%;
    transform: translate(0, -75%);
  }
}
</style>
