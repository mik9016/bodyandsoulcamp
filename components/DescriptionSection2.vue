<template>
  <div class="desc-component" :style="scssStyles">
    <div class="desc-component__title">
      <h2>{{ title }}</h2>
    </div>
    <Program
      v-if="program"
      :title="programTitle"
      :list="programList"
      class="desc-component__program"
    />
    <div v-else class="desc-component__text">
      <p>{{ description }}</p>
    </div>
  </div>
</template>
<script>
import Program from "./Program.vue";
export default {
  components: { Program },
  props: {
    title: { type: String, default: "", required: false },
    image: { type: String, default: "yoga", required: false },
    description: { type: String, default: "", required: false },
    program: { type: Boolean, default: false, required: false },
    programTitle: { type: String, default: "", required: false },
    programList: { type: Array, default: [], required: false },
    side: { type: String, default: "left", required: false },
  },
  data() {
    return {};
  },
  computed: {
    scssStyles() {
      return {
        "--side": this.setSide(),
      };
    },
    image() {
      return require("../static/assets/images/" + this.$props.image + ".jpg");
    },
  },
  methods: {
    setSide() {
      return this.$props.side === "left" ? "row" : "row-reverse";
    },
  },
};
</script>
<style lang="scss" scoped>
@use "../static/css/variables.scss" as v;
@use "../static/css/mixins.scss" as m;

.desc-component {
  width: 100%;
  @include m.flexLayout(column, center, center);
  font-family: "Montserrat", sans-serif;
  font-weight: 500;

  &__text {
    width: 100%;
    height: 100%;
    min-height: 60vh;
    @include m.flexLayout(column, center, center);
    background-color: v.$backgroundColor;
    line-height: 2rem;
    white-space: pre-line;
    h1 {
      font-size: 3rem;
      padding: 4rem 0;
      text-transform: uppercase;
    }
    p {
      font-size: 1rem;
      width: 60%;
    }
  }

  &__title {
    @include m.flexLayout(column, center, center);
    text-align: center;
    height: 60vh;
    width: 100%;
    font-size: 3rem;
    text-transform: uppercase;
  }

  &__program {
    width: 100%;
  }
}

@media screen and (min-width: v.$large) {
  .desc-component {
    height: 100vh;
    display: flex;
    flex-direction: var(--side);
    width: 100%;

    &__text {
      height: 100vh;
      width: 50%;
      p {
        font-size: 1.3rem;
      }
    }
    &__title {
      height: 100vh;
      width: 50%;
      font-size: 5rem;
      flex-direction: var(--side);
    }
    &__program {
      width: 50%;
    }
  }
}
</style>