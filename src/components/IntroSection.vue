<template>
  <div class="intro-section">
    <div class="container">
      <div class="bg-circle top" />
      <div class="bg-circle bottom" />
      <div class="row">
        <div class="col-md-6" :class="{ 'fadeInLeft animated': isAnimate }">
          <h1 class="m-0">Modernize Learning</h1>
          <h3>for the modern world of work.</h3>
          <p class="m-t-20">
            Meet all-in-one people development platform to empower your
            organization to develop and transform even faster, easier, and
            better in the age of digital transformation.
          </p>
        </div>
        <!-- <div class="col-md-6">
          <div class="bg-software floating"><div class="inner"/></div>
        </div> -->
        <div class="col-md-6" :class="{ 'fadeInLeft animated': isAnimate }">
          <h1 class="m-0">Modernize Learning</h1>
          <h3>for the modern world of work.</h3>
          <p class="m-t-20">
            Meet all-in-one people development platform to empower your
            organization to develop and transform even faster, easier, and
            better in the age of digital transformation.
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="see-more text-center">
      <i class="material-icons pointer font-40 float-up-down" @click="scrollTo('#intro-customers')">keyboard_arrow_down</i>
    </div> -->
  </div>
</template>

<script>
import $ from "jquery";
import anime from "animejs";

export default {
  data() {
    return {
      isAnimate: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (screen.width > 575) {
        anime({
          targets: ".floating",
          translateY: -20,
          loop: true,
          direction: "alternate",
          duration: 3000,
          easing: "linear",
        });
        anime({
          targets: ".bg-circle",
          scale: [0.8, 1],
          opacity: [0, 0.2, 0],
          direction: "normal",
          delay: anime.stagger(1500),
          loop: true,
          duration: 4000,
          easing: "linear",
        });
      }
    });
  },
  methods: {
    scrollTo(section) {
      $("html").animate({ scrollTop: $(section).offset().top - 80 }, 500);
    },
  },
  watch: {
    "$store.state.isFullLoading"(val) {
      if (!val) this.isAnimate = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.intro-section {
  // background-color: $main-color;
  // color: $white-color;
  overflow: hidden;
  // background-image: radial-gradient(rgba(250, 250, 250, 0.17) 10%, transparent 10%), radial-gradient(rgba(250, 250, 250, 0.17) 10%, transparent 10%);
  background-position: 0 0, 25px 25px;
  background-size: 50px 50px;
  position: relative;
  background: #434343;
  background: linear-gradient(
    45deg,
    rgba(67, 67, 67, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );

  .container {
    position: relative;
    padding-top: 25%;
    padding-bottom: 15%;
    @media (min-width: 1440px) {
      padding-top: 15%;
      padding-bottom: 15%;
    }
  }

  .bg-circle {
    position: absolute;
    background: url("@/assets/images/bg-circle.png") no-repeat center/contain;
    opacity: 0;

    @media screen and (max-width: 768px) {
      background: none;
    }

    &.top {
      top: -145px;
      left: -40px;
      width: 600px;
      height: 600px;
    }

    &.bottom {
      bottom: -30px;
      right: -40px;
      width: 400px;
      height: 400px;
    }
  }

  // .bg-software {
  //   position: absolute;
  //   top: -75%;
  //   right: -245px;
  //   width: 150%;

  //   .inner {
  //     width: 100%;
  //     padding-bottom: 65%;
  //     background: url("@/assets/images/software-01.png") no-repeat left/cover;
  //   }
  // }

  .container {
    .row {
      .btn-inline-large {
        margin-top: 40px;
      }
    }
  }

  .see-more {
    @include absolute-edge;
    top: auto;
    padding-bottom: 20px;

    i {
      border: solid 4px white;
      border-radius: 50%;
    }
  }

  @media screen and (min-width: 1140px) {
    h1 {
      font-size: 4.2rem;
    }
  }

  @media screen and (max-width: 992px) {
    // .bg-software {
    //   top: -10%;
    //   right: -160px;
    // }

    .container {
      width: 90%;
      max-width: 850px;

      .row {
        h3 {
          font-size: 2.2rem;
        }
      }
    }
  }

  @media screen and (max-width: 875px) {
    .container {
      .row {
        h1 {
          font-size: 3.2rem;
        }
        h3 {
          font-size: 2rem;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    // .bg-software {
    //   position: relative;
    //   top: auto;
    //   right: auto;
    //   width: 100%;
    //   max-width: 750px;
    //   // padding-left: 60px;
    //   margin-top: 60px;
    // }

    .container {
      .row {
        .btn-inline-large {
          margin-top: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 575px) {
    // .bg-software {
    //   margin-top: 20px;
    // }

    .container {
      .row {
        h1 {
          font-size: 2.8rem;
        }
        h3 {
          font-size: 1.6rem;
        }
      }
    }

    .see-more {
      padding-bottom: 10px;

      i {
        font-size: 3rem !important;
      }
    }
  }
}
</style>
