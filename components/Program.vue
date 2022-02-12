<template>
  <div class="program-component">
    <ul>
      <li v-for="(item, idx) in list" :key="idx">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
import c from "../content/text-content.json";

export default {
  props: {
    title: { type: String, required: true },
    list: { type: Array, required: true },
  },
  data() {
    return { c };
  },
};
</script>
<style lang="scss" scoped>
@use "../static/css/variables.scss" as v;
@use "../static/css/mixins.scss" as m;

.program-component {
  
  width: 100%;
  height: 60vh;
  font-size: 2rem;
  @include m.flexLayout(column, center, center);
  background-color: v.$backgroundColor;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;

  ul {
    margin: 1rem;
    line-height: 2rem;

    li {
      font-size: 1rem;
      margin: 0.5rem ;
      list-style: inside;
    }
  }
}

@media screen and (min-width: v.$large) {
  .program-component {
    height: 100%;
    ul {
  
      li {
        font-size: 1.5rem;
  
      }
    }
  }
}
</style>