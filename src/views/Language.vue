<template>
  <div class="language-screen">
    <img
      class="language-screen__img"
      :src="require('@/assets/svg/globe.svg')"
    />
    <div class="language-screen__pills">
      <v-pill
        :imgUrl="require('@/assets/svg/flag-england.svg')"
        text="English"
        backgroundColor="#f2f1f6"
        color="#000"
        hoverBackgroundColor="#1b8856"
        hoverColor="#fff"
        @click="setLanguage('en')"
      />
      <v-pill
        :imgUrl="require('@/assets/svg/flag-germany.svg')"
        text="Deutsch"
        backgroundColor="#f2f1f6"
        color="#000"
        hoverBackgroundColor="#1b8856"
        hoverColor="#fff"
        @click="setLanguage('de')"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Pill from "@/components/shared/buttons/Pill.vue";

export default {
  name: "Language",
  components: {
    "v-pill": Pill,
  },
  computed: {
    ...mapGetters(["translations"]),
  },
  methods: {
    ...mapMutations(["setLanguage"]),
  },
};
</script>

<style lang="scss" scoped>
@import "styles/global.scss";

.language-screen {
  @include screen;
  background: linear-gradient(#060606, #2c3b71);

  &__img {
    width: 105px;
    height: 105px;
    padding: 80px 0;
    animation: spin 50000ms infinite linear;
  }

  &__pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3rem;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
