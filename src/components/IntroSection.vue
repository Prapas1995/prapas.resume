<template>
  <div class="intro-section">
    <div class="container">
      <div class="is-flex-subtext-img row">
        <div class="is-flex-sub-text col-md-6" :class="{ 'fadeInLeft animated': isAnimate }">
            <h1 class="is-text-title">
              Modernize Learning
            </h1>
            <h3 class="is-text-subtitle">
              for the modern world of work.
            </h3>
            <p class="is-text-detail">
              Meet all-in-one people development platform to empower your organization to develop and transform even faster, easier, and better in the age of digital transformation.
            </p>
        </div>
        <div class="is-flex-sub-img col-md-6">
          <div class="is-image-dev1 dev-float"><div class="inner-img-dev"/></div>
        </div>
      </div>
      <div class="istell-mail-content-mobile">
        <span class="isflex-text-tell-mail-mobile">
          <i class="material-icons font-20 m-r-5">local_phone</i>:
          <a
            :href="numberPhoneHref('0843935488')"
            target="_blank"
            class="ismail-tell-mobile"
          >
            <span>08-43935488</span>
          </a>
        </span>
        <span class="isflex-text-tell-mail-mobile">
          <i class="material-icons font-20 m-r-5">mail_outline</i>:
          <a
            id="contact-header"
            href="mailto:contact@conicle.com"
            target="_blank"
            class="ismail-tell-mobile"
            >prapasjongkaenboon@gmail.com</a
          >
        </span>
      </div>
      <div class="issocial-content-mobile pt-2 pb-5">
        <div class="isflex-img-social-mobile mr-3">
          <img
            :src="facebook"
            class="isimg-social-mobile"
            @click="clickFacebook"
          />
        </div>
        <div class="isflex-img-social-mobile mr-3">
          <img
            :src="instagram"
            class="isimg-social-mobile"
            @click="clickInstagram"
          />
        </div>
        <div class="isflex-img-social-mobile mr-3">
          <img
            :src="tiktok"
            class="isimg-social-mobile"
            @click="clickTiktok"
          />
        </div>
        <div class="isflex-img-social-mobile mr-0">
          <img
            :src="linkedin"
            class="isimg-social-mobile"
            @click="clickLinkedin"
          />
        </div>
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
    };
  },
  mounted() {
    this.$nextTick(() => {
      // if (screen.width > 575) {
        anime({
          targets: '.dev-float',

          // boxShadow: [
          //   '0 0 0px 0px rgba(255, 255, 255, 0)', // Initial state (no glow)
          //   '0 0 20px 5px rgba(0, 255, 255, 0.7)' // Glowing state (blue-green glow)
          // ],
          // duration: 1000, // Animation duration in milliseconds
          // easing: 'easeInOutQuad', // Easing function for smooth transition
          // direction: 'alternate', // Animate back and forth
          // loop: true // Loop the animation continuously
          
          // translateY: [
          //   { value: -20, easing: 'easeOutSine', duration: 500 },
          //   { value: 0, easing: 'easeInOutQuad', duration: 800 }
          // ],
          // delay: anime.stagger(100, {grid: [10, 10], from: 'center'}), // Staggered delay for wave effect
          // loop: true,
          // direction: 'alternate'


          // opacity: [
          //   { value: 0, duration: 1200 }, // Fade out to 0 opacity over 400ms
          //   { value: 1, duration: 1200 }  // Fade in to 1 opacity over 400ms
          // ],
          // easing: 'linear', // Use a linear easing for a consistent fade
          // loop: true // Loop the animation indefinitely

          translateY: -20,
          loop: true,
          direction: 'alternate',
          duration: 3000,
          easing: 'linear'

        })
        // anime({
        //   targets: '.bg-circle',
        //   scale: [0.8, 1],
        //   opacity: [0, 0.2, 0],
        //   direction: 'normal',
        //   delay: anime.stagger(1500),
        //   loop: true,
        //   duration: 4000,
        //   easing: 'linear'
        // })
      // }
    })
  },
  methods: {
    numberPhoneHref(tel) {
      return `tel:+66${tel.substring(1)}`;
    },
    clickFacebook() {
      return console.log('Facebook');
    },
    clickInstagram() {
      return console.log('Instagram');
    },
    clickTiktok() {
      return console.log('Tiktok');
    },
    clickLinkedin() {
      return console.log('Linkedin');
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

  .istell-mail-content-mobile {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
    }
  }
  .issocial-content-mobile {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: row;
    }
  }
  .isflex-text-tell-mail-mobile {
    color: #ffffff;
  }
  .ismail-tell-mobile {
    @media (max-width: 768px) {
      color: #ffffff;
      padding: 0 10px 0 5px;
      font-size: 12px;
    }
  }
  .isflex-img-social-mobile {
    padding: 0;
  }
  .isimg-social-mobile {
    @media (max-width: 768px) {
      width: 25px;
    }
  }
}
</style>
