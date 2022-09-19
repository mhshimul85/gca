<template>
  <div
    class="secondSlider container-fluid d-flex align-items-center justify-content-center"
  >
    <div>
      <h1>{{ route_name.toUpperCase() }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondSlider",
  data() {
    return {};
  },
  props: {
    route_name: String,
  },
};
</script>

<style scoped>
.secondSlider {
  color: #fff;
  height: 400px;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
}

.secondSlider h1 {
  font-size: 70px;
}
.blueWhite {
  background-color: rgb(87, 181, 236);
  color: #fff;
}

.whiteBlue {
  background-color: #fff;
  color: rgb(87, 181, 236);
}
</style>
