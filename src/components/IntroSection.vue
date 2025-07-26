<template>
  <div class="intro-section">
    <div class="container">
      <div class="is-flex-subtext-img row">
        <div
          class="is-flex-sub-text col-md-6"
        >
          <div :class="{ 'fadeInLeft animated': isAnimate }">
            <h1 class="is-text-title">Hi, My name is [ Ticker ].</h1>
            <h3 class="is-text-subtitle">I'm a software developer.</h3>
            <p class="is-text-detail">
              I graduated bachelor in Information Technology from Rajabhat Maha Sarakham University[Maha Sarakham],
              Currently, I am a front-end developer working on a web digital insurance broker [DIB] at SCB Protect.
            </p>
          </div>
          
        </div>
        <div class="is-flex-sub-img col-md-6">
          <div class="is-image-dev1 dev-float">
            <div class="inner-img-dev" />
          </div>
        </div>
      </div>
      <div class="is-tell-mail-content-mobile">
        <span class="is-flex-text-tell-mail-mobile">
          <i class="material-icons font-20 m-r-5">local_phone</i>:
          <a
            :href="numberPhoneHref('0843935488')"
            target="_blank"
            class="is-mail-tell-mobile"
          >
            <span>08-43935488</span>
          </a>
        </span>
        <span class="is-flex-text-tell-mail-mobile">
          <i class="material-icons font-20 m-r-5">mail_outline</i>:
          <a
            id="contact-header"
            href="mailto:contact@conicle.com"
            target="_blank"
            class="is-mail-tell-mobile"
            >prapasjongkaenboon@gmail.com</a
          >
        </span>
      </div>
      <div class="is-social-content-mobile pt-2 pb-5">
        <div class="is-flex-img-social-mobile mr-3">
          <img
            :src="facebook"
            class="is-img-social-mobile"
            @click="clickFacebook"
          />
        </div>
        <div class="is-flex-img-social-mobile mr-3">
          <img
            :src="instagram"
            class="is-img-social-mobile"
            @click="clickInstagram"
          />
        </div>
        <div class="is-flex-img-social-mobile mr-3">
          <img :src="tiktok" class="is-img-social-mobile" @click="clickTiktok" />
        </div>
        <div class="is-flex-img-social-mobile mr-0">
          <img
            :src="linkedin"
            class="is-img-social-mobile"
            @click="clickLinkedin"
          />
        </div>
      </div>
      <div :class="isAnimate ? 'is-flex-svg-pulse':'d-none'">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 5184 3844.17">
          <path class="is-path-pulse" d="M472.68,2183.89h678.94c3.36,0,6.34-2.87,7.41-7.14l40.53-160.91c2.68-10.61,14.23-8.97,15.19,2.16l30.25,352.19c.99,11.57,13.2,12.68,15.35,1.4l51.88-272.25c1.69-8.83,10.4-10.78,14.13-3.15l40.54,82.96c1.45,2.95,3.91,4.74,6.55,4.74h92.41c3.66,0,6.83-3.41,7.63-8.19l76.04-452.87c1.97-11.69,14.66-10.54,15.43,1.39l53.31,824.56c.79,12.22,13.9,13.01,15.49,.93l66.68-504.25c1.55-11.69,14.13-11.48,15.44,.27l14.52,129.22c.58,5.13,3.87,8.93,7.74,8.93h513.59c3.32,0,6.29-2.81,7.39-7l45.1-171.76c2.66-10.09,13.55-9.01,15.07,1.49l51.17,354.1c1.62,11.17,13.47,11.39,15.32,.29l49.66-298.57c1.71-10.3,12.41-11.15,15.02-1.19l30.26,115.63c1.1,4.2,4.06,7.02,7.39,7.02h125.72c3.82,0,7.07-3.7,7.71-8.75l45.45-361.07c1.51-11.95,14.4-11.53,15.48,.5l58.23,649.83c1.04,11.64,13.38,12.56,15.38,1.14l83.84-478.87c1.95-11.17,13.94-10.63,15.33,.69l35.02,283.79c1.23,9.97,11.25,12.07,14.68,3.06l32.28-84.6c1.34-3.51,4.03-5.71,6.97-5.71h425.48c3.55,0,6.65-3.21,7.56-7.81l29.65-150.4c2.09-10.62,13.42-10.33,15.2,.4l65.6,394.9c1.81,10.86,13.32,10.99,15.25,.16l72.68-407.51c1.94-10.92,13.61-10.65,15.27,.35l40.26,266.12c1.6,10.56,12.61,11.41,15.11,1.16l21.96-90.15c1.05-4.32,4.05-7.24,7.44-7.24h133.92c3.78,0,7.01-3.61,7.7-8.59l58.47-424.26c1.66-11.99,14.66-11.19,15.49,.95l51.88,760.5c.82,11.97,13.57,12.99,15.44,1.23l78.72-493.98c1.74-10.95,13.34-11.12,15.26-.23l27.61,156.3c.84,4.73,3.99,8.08,7.61,8.08h550.56" 
            style="fill:none; stroke:#fff; stroke-linecap:round; stroke-linejoin:round; stroke-width:14px;">
          </path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from "jquery";
import anime from "animejs";

export default {
  data() {
    return {
      isAnimate: false,
      facebook: require("@/assets/images/facebook.png"),
      instagram: require("@/assets/images/instagram.png"),
      tiktok: require("@/assets/images/tiktok.png"),
      linkedin: require("@/assets/images/linkedin.png"),
      linkedin: require("@/assets/images/linkedin.png"),
    };
  },
  mounted() {
    this.$nextTick(() => {
      anime({
        targets: ".dev-float",
        translateY: -20,
        loop: true,
        direction: "alternate",
        duration: 3000,
        easing: "linear",
      });
      // anime({
      //   targets: '.is-path-pulse',
      //   // strokeDasharray: [
      //   //   { value: '0 12423' }, // Start with no visible dash (all gap)
      //   //   { value: '100 0' }  // End with a solid line (all dash)
      //   // ],
      //   easing: 'linear',
      //   direction: "infinite",
      //   loop: true,
      //   strokeDashoffset: [0, 12423],
      //   strokeDashoffset: [100, 0],
      //   //   stroke-dasharray: 6423;
      //   // stroke-dashoffset: 12423;
      //   //     stroke-dashoffset: 0;
      // })
    });
  },
  methods: {
    numberPhoneHref(tel) {
      return `tel:+66${tel.substring(1)}`;
    },
    clickFacebook() {
      return console.log("Facebook");
    },
    clickInstagram() {
      return console.log("Instagram");
    },
    clickTiktok() {
      return console.log("Tiktok");
    },
    clickLinkedin() {
      return console.log("Linkedin");
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
  overflow: hidden;
  background-position: 0 0, 25px 25px;
  background-size: 50px 50px;
  position: relative;
  // background: #434343;
  // background: linear-gradient(
  //   45deg,
  //   rgba(67, 67, 67, 1) 0%,
  //   rgba(0, 0, 0, 1) 100%
  // );
  padding: 110px 0 0 0;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 80px 0 0 0;
  }
  @media (max-width: 768px) {
    padding: 70px 0 0 0;
  }
  .container {
    margin: 0 auto;
    position: relative;
  }
  .is-flex-subtext-img {
    align-items: center;
  }

  .is-flex-sub-text {
    h1,h3,p {
      color: #ffffff;
    }
    .is-text-title {
      font-size: 38px;
      @media (max-width: 768px) {
        font-size: 28px;
      }
    }
    .is-text-subtitle {
      font-size: 28px;
      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
    .is-text-detail {
      font-size: 18px;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }

  .is-image-dev1 {
      // position: absolute;
      // top: -75%;
      // right: -245px;
      width: 100%;
      // background: red;
      .inner-img-dev {
        padding: 45%;
        background: url('@/assets/images/dev1.png') no-repeat center/cover;
      }
    }

  .is-tell-mail-content-mobile {
    display: none;
    @media (min-width: 481px) and (max-width: 768px) {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
      padding: 65px 0 0 0;
    }
    @media (max-width: 480px) {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
      padding: 65px 0 0 0;
    }
  }
  .is-social-content-mobile {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: row;
    }
  }
  .is-flex-text-tell-mail-mobile {
    color: #ffffff;
  }
  .is-mail-tell-mobile {
    @media (max-width: 768px) {
      color: #ffffff;
      padding: 0 10px 0 5px;
      font-size: 12px;
    }
  }
  .is-flex-img-social-mobile {
    padding: 0;
  }
  .is-img-social-mobile {
    @media (max-width: 768px) {
      width: 25px;
    }
  }
  .is-flex-svg-pulse{
    position: absolute;
    top: -37%;
    left: -5%;
    width: 50%;
    @media (min-width: 954px) and (max-width: 1024px) {
      position: absolute;
      top: -43%;
      left: 1%;
      width: 43%;
    }
    @media (min-width: 769px) and (max-width: 953px) {
      display: none;
    }
    @media (max-width: 768px){
      position: absolute;
      top: 30%;
      left: 1%;
      width: 50%;
    }
    @media (max-width: 767px) {
      position: absolute;
      top: 64%;
      left: 19%;
      width: 60%;
    }

  }
  .is-flex-svg-pulse .is-path-pulse {
    stroke-dasharray: 6423;
    animation: dashPathPulse 5s linear infinite;
  }
  @keyframes dashPathPulse {
    0% {
      stroke-dashoffset: 12423;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
}
</style>
