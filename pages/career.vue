<template>
  <Nav />
  <SecondSlider class="career" route_name="career"> </SecondSlider>
  <div
    class="career-container container-fluid d-flex align-items-center justify-content-center"
  >
    <h1>SORRY... THERE IS NO VACANCY.</h1>
  </div>
  <Contact1 class="blueWhite" />
  <Footer class="blueWhite" />
</template>

<script>
import Nav from "~/src/components/nav.vue";
import SecondSlider from "~/src/components/SecondSlider.vue";
import Footer from "~/src/components/Footer.vue";
import Contact1 from "~/src/components/Contact.vue";
export default {
  head() {
    return {};
  },
  components: { Nav, SecondSlider, Footer, Contact1 },
};
</script>
<style scoped>
.career {
  background-image: linear-gradient(
      to right bottom,
      rgba(34, 158, 211, 0.618),
      rgba(51, 140, 204, 0.395)
    ),
    url("/src/assets/images/gcabd-career.jpg");
  background-position: center;
}
.career-container {
  min-height: 400px;
  color: rgb(87, 181, 236);
}
</style>
