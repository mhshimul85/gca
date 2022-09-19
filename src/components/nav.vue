<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img
          height="70px"
          src="/src/assets/images/gcabd-logo.png"
          alt="gcabd-logo"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">HOME</a>
            <!-- <nuxt-link class="nav-link" aria-current="page" to="/"
              >HOME</nuxt-link
            > -->
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">ABOUT GCABD</a>
            <!-- <nuxt-link class="nav-link" aria-current="page" to="/about"
              >ABOUT GCABD</nuxt-link
            > -->
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">WHAT'S NEW</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/events">EVENTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/career">WORK WITH US</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">CONTACT</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">DONATE US</a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  /* background-color: rgb(69, 218, 191); */
  background-color: #fff;
}

/* .nav-item {
  width: 20em !important;
} */

.nav-link {
  /* font-size: 25px; */
  font-weight: bold;
  margin: 0 10px;
}
</style>
