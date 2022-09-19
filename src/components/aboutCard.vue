<template>
  <div class="our-mission container-fluid">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="card col-md-3 col-sm-12">
        <img
          src="/src/assets/images/gcabd-vision.jpg"
          class="card-img-top"
          alt="gcabd-1.jpg"
        />
        <div class="card-body">
          <h3 class="card-title text-center">Vision</h3>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div class="card col-md-3 col-sm-12">
        <img
          src="/src/assets/images/gcabd-values.jpg"
          class="card-img-top"
          alt="gcabd-1.jpg"
        />
        <div class="card-body">
          <h3 class="card-title text-center">Values</h3>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div class="card col-md-3 col-sm-12">
        <img
          src="/src/assets/images/gcabd-mission.jpg"
          class="card-img-top"
          alt="gcabd-1.jpg"
        />
        <div class="card-body">
          <h3 class="card-title text-center">Mission</h3>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.our-mission {
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  /* background-color: rgb(87, 181, 236); */
  padding: 80px 40px;
  /* min-height: 400px; */
}

.blueWhite {
  background-color: rgb(87, 181, 236);
}

.our-mission > .row > .card {
  padding: 10px;
  margin: 10px;
}

@media screen and (max-width: 780px) {
  .our-mission {
    clip-path: polygon(0 2%, 100% 0, 100% 98%, 0 100%);
  }
}
</style>
