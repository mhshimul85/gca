<template>
  <div
    class="quote container-fluid d-flex align-items-center justify-content-center"
  >
    <blockquote class="blockquote">
      <p>
        "Volunteers don't get paid, not because they're worthless, but because
        they're priceless." -
        <span class="author">Sherry Anderson</span>
      </p>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: "Quote",
};
</script>

<style scoped>
.quote {
  text-align: center;
  min-height: 400px;
}

p {
  font-size: 40px;
}

.author {
  color: rgb(66, 126, 223);
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
