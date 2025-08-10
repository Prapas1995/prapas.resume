<template>
  <div class="training-section">
    <div class="container m-t-60">
      <div data-aos="flip-right" data-aos-once="true">
      <h1 class="ts-text-title text-center">Training</h1>
      <div class="text-center row">
        <div class="ts-flex-img-text col-md-12">
          <img class="ts-img" :src="android" alt="" />
          <h3 class="ts-text-subtitle">Android Application</h3>
          <p class="ts-text-detail">
            9 – 11 November 2017: Programing training android application with
            android studio, Create a application page register, Save data to
            mysql database and create a login page to the productdetail page to
            create a datalist.
          </p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrainingSection",
  props: {
    msg: String,
  },
  data() {
    return {
      isAnimate: false,
      android: require("@/assets/images/android.png"),
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.training-section {
  // background: red;
  .container {
    margin: 0 auto;
  }
  .ts-text-title {
    color: #ffffff;
    font-size: 38px;
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
  .ts-flex-img-text {
    .ts-img {
      width: 135px;
    }
    h3,
    p {
      color: #ffffff;
    }
    .ts-text-subtitle {
      font-size: 28px;
      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
    .ts-text-detail {
      font-size: 18px;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
}
</style>
