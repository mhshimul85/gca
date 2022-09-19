<template>
  <div
    class="contact container-fluid d-flex align-items-center justify-content-center"
  >
    <!-- <h1 class="d-flex flex-column">Contact Us</h1>
    <p class="d-flex flex-column">Atindra Mohon Roy Sharak,</p> -->

    <div>
      <h1>Contact Us</h1>
      <p>Atindra Mohon Roy Sharak,</p>
      <p>Adarsha Sadar, Cumilla,</p>
      <p>Bangladesh - 3500</p>
      <p class="mail">
        <a href="mailto:info@gcabd.org">info@gcabd.org</a>
      </p>
      <div class="social">
        <v-icon>mdi-facebook</v-icon>
        <v-icon>mdi-twitter</v-icon><v-icon>mdi-youtube</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact {
  text-align: center;
  line-height: 20px;
  min-height: 400px;
  clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
  font-size: 1.7em;
}

.mail {
  margin: 10px 0;
}
.social > *:not(:first-child) {
  margin-left: 20px;
}

.blueWhite,
.blueWhite a {
  background-color: rgb(87, 181, 236);
  color: #fff;
  text-decoration: none;
}

.whiteBlue,
.whiteBlue a {
  background-color: #fff;
  color: rgb(87, 181, 236);
  text-decoration: none;
}
</style>
