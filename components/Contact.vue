<template>
  <div class="contact-section">
    <div class="contact-section__image">
      <img
        src="~/static/assets/images/vert.jpg"
        alt="landingPhoto"
        width="100%"
        height="100%"
      />
    </div>
    <div class="contact-section__text">
      <h1>{{ title }}</h1>
      <p>{{ text1 }}</p>

      <button class="contact-section__text__mail">
        <a :href="`mailto:${mail}?subject=${mailTitle}`">{{ mail }}</a>
      </button>
      <p>{{ text2 }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: "", required: false },
    mail: { type: String, default: "", required: false },
    mailTitle: { type: String, default: "", required: false },
    text1: { type: String, default: "", required: false },
    text2: { type: String, default: "", required: false },
  },
};
</script>
<style lang="scss" scoped>
@use "../static/css/variables.scss" as v;
@use "../static/css/mixins.scss" as m;
.contact-section {
  width: 100%;
  height: fit-content;
  @include m.flexLayout(column, center, center);

  div {
    width: 100%;
    min-height: 60vh;
  }

  &__image {
    img {
      object-fit: cover;
    }
  }
  &__text {
    @include m.flexLayout(column, center, center);
    gap: 2rem;
    font-family: "Montserrat", sans-serif;
    background-color: whitesmoke;
    text-align: center;
    
    h1 {
      font-size: 3rem;
      color: v.$black;
      font-weight: 500;
    }
    p {
      line-height: 2rem;

      font-size: 1rem;
      font-weight: 500;
      white-space: pre-line;
      
    }
    &__mail {
      margin-top: 1rem;
      cursor: pointer;
      border: none;
      background-color: transparent;
      font-family: "Montserrat", sans-serif;
      a {
        text-decoration: none;
        color: v.$black;
        font-size: 1.3rem;
        font-weight: bold;
      }
    }
  }
}

@media screen and (min-width: v.$large) {
  .contact-section {
    flex-direction: row;
    height: 100vh;

    div {
      width: 50%;
      height: 100%;
    }
    &__text{
        h1{
             font-size: 4rem;
        }
    }
    &__mail {
        a {
    
        font-size: 2.5rem;
      
      }
    }
  }
}
</style>




