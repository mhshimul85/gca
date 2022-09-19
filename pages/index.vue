<template>
  <Nav />
  <MainSlider />
  <Quote class="whiteBlue" />
  <AboutCard class="blueWhite" />
  <div class="event-container container">
    <h1 class="text-primary">EVENTS</h1>
    <FewEvents />
  </div>

  <Form class="blueWhite" />
  <contact class="whiteBlue" />
  <footer1 class="blueWhite" />
</template>

<script>
import Footer1 from "~~/src/components/Footer.vue";
import Contact from "~~/src/components/Contact.vue";
import Quote from "../src/components/Quote.vue";
import Form from "~~/src/components/Form.vue";
import MainSlider from "~~/src/components/mainSlider.vue";
import AboutCard from "~~/src/components/aboutCard.vue";
import Nav from "~~/src/components/nav.vue";
import FewEvents from "~~/src/components/fewEvents.vue";
export default {
  head() {
    return {};
  },
  components: {
    Footer1,
    Contact,
    Quote,
    Form,
    MainSlider,
    AboutCard,
    Nav,
    FewEvents,
  },
};
</script>

<style scoped>
.event-container {
  padding: 40px 0 !important;
}

.event-container h1 {
  color: rgb(87, 181, 236);
  padding: 10px 0 !important;
  text-align: center;
}
</style>
