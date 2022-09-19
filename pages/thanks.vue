<template>
  <Nav />
  <second-slider class="thanks" route_name="Thanks"></second-slider>
  <contact class="whiteBlue" />
  <footer1 class="blueWhite" />
</template>

<script>
import Footer1 from "~~/src/components/Footer.vue";
import Contact from "~~/src/components/Contact.vue";
import SecondSlider from "~~/src/components/SecondSlider.vue";
import Nav from "~~/src/components/nav.vue";
export default {
  head() {
    return {};
  },
  components: { Footer1, Contact, SecondSlider, Nav },
};
</script>

<style scoped>
.thanks {
  background-image: linear-gradient(
      to right bottom,
      rgba(34, 158, 211, 0.618),
      rgba(51, 140, 204, 0.395)
    ),
    url("/src/assets/images/gcabd-thanks.jpg");
  background-position: center;
}
</style>
