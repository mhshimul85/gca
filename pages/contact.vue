<template>
  <Nav />
  <second-slider class="contact-us" route_name="contact us"
    >Contact</second-slider
  >
  <Form class="whiteBlue" />
  <Contact1 class="blueWhite" />
  <footer1 class="blueWhite" />
</template>

<script>
import Footer1 from "~/src/components/Footer.vue";
import SecondSlider from "~/src/components/SecondSlider.vue";
import Form from "~/src/components/Form.vue";
import Nav from "~/src/components/nav.vue";
import Contact1 from "~/src/components/Contact.vue";
export default {
  head() {
    return {};
  },
  components: { Footer1, SecondSlider, Form, Nav, Contact1 },
};
</script>

<style scoped>
.contact-us {
  background-image: linear-gradient(
      to right bottom,
      rgba(34, 158, 211, 0.618),
      rgba(51, 140, 204, 0.395)
    ),
    url("/src/assets/images/gcabd-contact.jpg");
  background-position: center;
}
</style>
