<template>
  <Nav />
  <SecondSlider class="events" route_name="events" />
  <EventDetails />
  <Contact class="blueWhite" />
  <Footer class="blueWhite" />
</template>

<script>
import EventDetails from "~/src/components/eventDetails.vue";
import Contact from "~/src/components/Contact.vue";
import Footer from "~/src/components/Footer.vue";
import SecondSlider from "~/src/components/SecondSlider.vue";
import Nav from "~/src/components/nav.vue";
export default {
  head() {
    return {};
  },
  components: { EventDetails, Contact, Footer, SecondSlider, Nav },
};
</script>
<style scoped>
.events {
  background-image: linear-gradient(
      to right bottom,
      rgba(34, 158, 211, 0.618),
      rgba(51, 140, 204, 0.395)
    ),
    url("/src/assets/images/gcabd-events.jpg");
  background-position: center;
}
</style>
