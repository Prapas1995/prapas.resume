<template>
  <div
    class="header-section"
    :class="{ top: $store.state.htmlScrollTop === 0 }"
  >
    <div class="container p-t-15 p-b-15">
      <div class="sh-flex-content">
        <div>
          <img :src="imgName" class="hs-img-name" />
        </div>
        <div class="hs-social-content align-center">
          <span class="hs-flex-text-tell-mail">
            <i class="material-icons font-20 m-r-5">local_phone</i>:
            <a
              :href="numberPhoneHref('0843935488')"
              target="_blank"
              class="hs-mail-tell"
            >
              <span>08-43935488</span>
            </a>
          </span>
          <span class="hs-flex-text-tell-mail">
            <i class="material-icons font-20 m-r-5">mail_outline</i>:
            <a
              id="contact-header"
              href="mailto:contact@conicle.com"
              target="_blank"
              class="hs-mail-tell"
              >prapasjongkaenboon@gmail.com</a
            >
          </span>
          <div class="hs-flex-img-social mr-3">
            <img :src="facebook" class="hs-img-social" @click="clickFacebook" />
          </div>
          <div class="hs-flex-img-social mr-3">
            <img :src="instagram" class="hs-img-social" @click="clickInstagram"/>
          </div>
          <div class="hs-flex-img-social mr-3">
          <img :src="tiktok" class="hs-img-social" @click="clickTiktok"/>
          </div>
          <div class="hs-flex-img-social mr-0">
            <img :src="linkedin" class="hs-img-social" @click="clickLinkedin"/>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <i v-if="$store.state.htmlScrollTop > 500" class="material-icons pointer font-40 btn-top" @click="scrollToTop()">keyboard_arrow_up</i>
    </transition>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "HeaderSection",
  props: {
    msg: String,
  },
  data() {
    return {
      imgName: require("@/assets/images/prapas_svg.svg"),
      facebook: require("@/assets/images/facebook.png"),
      instagram: require("@/assets/images/instagram.png"),
      tiktok: require("@/assets/images/tiktok.png"),
      linkedin: require("@/assets/images/linkedin.png"),
    };
  },
  mounted() {
    this.$nextTick(() => window.addEventListener("scroll", this.handleScroll));
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollToTop() {
      $("html").animate({ scrollTop: 0 }, 1000);
    },
    handleScroll() {
      this.$store.commit("SET_STATE", {
        name: "htmlScrollTop",
        val: $("html").scrollTop(),
      });
    },
    numberPhoneHref(tel) {
      return `tel:+66${tel.substring(1)}`;
    },
    numberPhoneShow(tel) {
      if (tel.length === 9) {
        const first = tel.substring(0, 1);
        const second = tel.substring(1, 5);
        const third = tel.substring(5, 9);
        return `${first}-${second}-${third}`;
      } else if (tel.length === 10) {
        const first = tel.substring(0, 3);
        const second = tel.substring(3, 6);
        const third = tel.substring(6, 10);
        return `${first}-${second}-${third}`;
      }
    },
    clickFacebook() {
      const url = 'https://www.facebook.com/TickerIndy';
      return window.open(url, '_blank');
    },
    clickInstagram() {
      const url = 'https://www.instagram.com/ticker_1995';
      return window.open(url, '_blank');
    },
    clickTiktok() {
      const url = 'www.tiktok.com/@ticker1995';
      return window.open(url, '_blank');
    },
    clickLinkedin() { 
      const url = 'https://www.linkedin.com/in/prapas-jongkaenboon-aa703127b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app';
      return window.open(url, '_blank');
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";
@import "../styles/hamburgers.css";

.header-section {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #343434;
  z-index: 5;
  box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),0 3px 1px 0 rgba(20, 23, 28, 0.1);
  transition: all 0.3s linear;
  
  .container {
    margin: 0 auto;
  }
  .sh-flex-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 769px) and (max-width: 991px) {
    }
    @media (max-width: 768px) {
      .hs-social-content {
        display: none;
      }
    }
  }
  .hs-img-name {
    width: 280px;
    @media (min-width: 769px) and (max-width: 1024px) {
      width: 170px;
    }
    @media (max-width: 768px) {
      width: 200px;
    }
  }
  .hs-img-social {
    width: 38px;
    @media (min-width: 769px) and (max-width: 1024px) {
      width: 25px;
    }
    @media (max-width: 768px) {
      width: 25px;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .hs-flex-text-tell-mail {
    color: #ffffff;
  }
  .hs-mail-tell {
    color: #ffffff;
    font-size: 16px;
    padding: 0 10px 0 5px;
    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 12px;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  &.top {
    background-color: transparent;
    box-shadow: none;
  }
  .btn-top {
    position: fixed;
    bottom: 32px;
    right: 96px;
    padding: 3px;
    background-color: white;
    color: #343434;
    border-radius: 50%;
    transition: all 0.5s;
    box-shadow: 1px 1px 4px 0px #afafafc4;
    &:hover {
      transform: scale(1.15);
    }
  }
}
</style>
