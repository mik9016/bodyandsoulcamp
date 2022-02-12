<template>
  <div class="desc-component" :style="scssStyles">
    <div class="desc-component__img">
      <img :src="image" alt="imageDescripton" width="100%" height="100%" />
    </div>
    <Program
      v-if="program"
      :title="programTitle"
      :list="programList"
      class="desc-component__program"
    />
    <div v-else class="desc-component__text">
      <h1>{{ title }}</h1>
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
  height: 100vh;
  display: flex;
  flex-direction: var(--side);

  &__text {
    width: 50%;
    @include m.flexLayout(column, center, flex-start);
    background-color: v.$backgroundColor;
    // font-family: "Lato", sans-serif;
    font-family: "Montserrat", sans-serif;

    h1 {
      font-size: 3rem;
      padding: 4rem 0;
    }
    p {
      font-size: 1.5rem;
      width: 60%;
    }
  }

  &__img {
    width: 50%;

    img {
      object-fit: cover;
    }
  }

  &__program {
    width: 50%;
  }
}
</style>