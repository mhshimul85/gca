<template>
  <div
    class="form container-fluid d-flex align-items-center justify-content-center"
  >
    <div>
      <h1>Submit your Message</h1>
      <form
        autocomplete="off"
        action="https://formsubmit.co/info@gcabd.org"
        method="POST"
      >
        <input type="hidden" name="_subject" value="Message from New Submit" />
        <input type="hidden" name="_next" value="https://gcabd.org/thanks" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          required
          autocomplete="off"
        />
        <input
          type="text"
          name="email"
          placeholder="Your email"
          required
          autocomplete="off"
        />
        <br />
        <textarea
          type="text"
          name="message"
          placeholder="Your Message....."
          required
          autocomplete="off"
        ></textarea
        ><br />
        <input type="submit" class="submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
};
</script>

<style scoped>
@media screen and (min-width: 850px) {
  .form > * {
    width: 800px;
  }
}
.form {
  text-align: center;
  min-height: 400px;
  padding: 20px 10px;
}

h1 {
  margin: 10px;
  font-size: 45px;
}

.form input,
.form textarea {
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
}

.form textarea {
  height: 150px;
}

.blueWhite > div {
  padding: 40px 0 !important;
}
.blueWhite > div > form input,
.blueWhite > div > form textarea {
  border: 3px solid #fff;
  background-color: #fff;
  color: rgb(87, 181, 236);
}

.whiteBlue > div > form input,
.whiteBlue > div > form textarea {
  border: 3px solid rgb(87, 181, 236);
}

.whiteBlue > div > form > .submit {
  color: #fff;
}

.submit {
  background-color: rgb(87, 181, 236);
  font-weight: 700;
}

.blueWhite {
  background-color: rgb(87, 181, 236);
  color: #fff;
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
}

@media screen and (max-width: 780px) {
  .blueWhite {
    clip-path: polygon(0 2%, 100% 0, 100% 98%, 0 100%);
  }
}

.whiteBlue {
  background-color: #fff;
  color: rgb(87, 181, 236);
}
</style>
