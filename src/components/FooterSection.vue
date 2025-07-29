<template>
  <div class="footer-section">
    <div class="container m-t-60 pb-8" style="padding-bottom: 20px;">
      <div class="text-center row">
        <div class="fs-flex-img-text col-md-12">
          <img class="fs-img" :src="prapas" alt="" />
          <h3 class="fs-text-subtitle">thank you for watching</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
  props: {
    msg: String,
  },
  data() {
    return {
      isAnimate: false,
      prapas: require("@/assets/images/prapas.jpeg"),
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.footer-section {
  // background: red;
  .container {
    margin: 0 auto;
  }
  .fs-flex-img-text {
    .fs-img {
      width: 135px;
    //   border-radius: 100%;
      clip-path: circle(50%);
    }
    h3{
      color: #ffffff;
    }
    .fs-text-subtitle {
      font-size: 28px;
      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
  }
}
</style>
