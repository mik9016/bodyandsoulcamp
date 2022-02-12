<template>
  <div class="title-section">
    <div class="title-section__image">
      <img
        src="../static/assets/images/fit7.jpg"
        alt="landingPhoto"
        width="100%"
        height="100%"
      />
    </div>
    <div class="title-section__text">
      <h1>{{ c.titleSection.title }}</h1>
      <p>{{ c.titleSection.description }}</p>
    </div>
  </div>
</template>
<script>
import c from "../content/text-content.json";
export default {
  data() {
    return {
      c,
    };
  },
};
</script>
<style lang="scss" scoped>
@use "../static/css/variables.scss" as v;
@use "../static/css/mixins.scss" as m;
.title-section {
  width: 100%;
  @include m.flexLayout(column, center, center);
  // display: flex;
  // flex-direction: row;

  div {
    width: 100%;
    height: 100%;

    &:first-of-type {
      img {
        object-fit: cover;
      }
    }
    &:nth-child(2) {
      backdrop-filter: blur(2px);
      @include m.flexLayout(column, center, center);
      font-family: "Montserrat", sans-serif;
      background-color: transparent;
      color: v.$backgroundColor;
      position: absolute;

      h1 {
        font-size: 4rem;
        text-align: center;
        font-weight: 500;
      }

      p:first-of-type {
        font-size: 1rem;
        font-weight: 500;
      }
      p:last-of-type {
        margin-top: 1rem;
        font-size: 1.5rem;
      }
    }
  }
}

@media screen and (min-width: v.$large) {
  .title-section {
    display: flex;
    flex-direction: row;
    height: 100vh;
    background-color: whitesmoke;
    position: relative;

    div {
      width: 50%;
      &:nth-child(2) {
        position: relative;
        color: v.$black;
        backdrop-filter: none;
      }
    }
  }
}
</style>