<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <!-- <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div> -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="/src/assets/images/gcabd-slider-01.jpg"
          class="d-block w-100"
          alt="gcabd-slider-01.jpg"
        />
        <div class="carousel-caption d-none d-md-block">
          <h1>TAKE A STAND, WASH YOUR HANDS.</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="/src/assets/images/gcabd-slider-02.jpg"
          class="d-block w-100"
          alt="gcabd-slider-02.jpg"
        />
        <div class="carousel-caption d-none d-md-block">
          <h1>PLANT A TREE FOR THE HOPE OF FUTURE.</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="/src/assets/images/gcabd-slider-03.jpg"
          class="d-block w-100"
          alt="gcabd-slider-03.jpg"
        />
        <div class="carousel-caption d-none d-md-block">
          <h1>BE THE REASON FOR SOMEONE'S HEARTBEAT.</h1>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>

<style>
.carousel {
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
}

.carousel-item > img {
  height: 600px;
  width: 100%;
}

.carousel-indicators,
.carousel-caption {
  margin-bottom: 60px;
}

@media screen and (max-width: 1100px) {
  .carousel-item > img {
    width: 100%;
    height: 480px;
  }
}

@media screen and (max-width: 576px) {
  .carousel-item > img {
    width: 100%;
    height: 400px;
  }
}
</style>
