<template>
  <div class="header-section" :class="{ 'top': $store.state.htmlScrollTop === 0 }">
    <div class="container p-t-15 p-b-15">
      <div class="row h-100">
        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <router-link to="/" @click.native="scrollTo('#introduction')">
            <img :src="imgName" width="140" />
          </router-link>
        </div>
        <div class="col-6 col-sm-8 col-md-9 col-lg-10 my-auto text-right no-wrap">
          <span class="vice">
            <i class="material-icons m-r-5">local_phone</i>
            <a :href="numberPhoneHref('020777687')" target="_blank" class="mailto">
              <span>020777687</span>
            </a>
          </span>
          <span class="mail">
            <i class="material-icons m-r-5">mail_outline</i>
            <a id="contact-header" href="mailto:contact@conicle.com" target="_blank" class="mailto">contact@conicle.com</a>
          </span>
        </div>
      </div>
    </div>
    <!-- <transition name="slide-fade">
      <i
        v-if="$store.state.htmlScrollTop > 900"
        class="material-icons pointer font-40 btn-top"
        @click="scrollToTop()"
        >keyboard_arrow_up</i
      >
    </transition> -->
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "HeaderSection",
  props: {
    msg: String,
  },
  data() {
    return {
      imgName: require("@/assets/images/prapas_svg.svg"),
      phone: [
        { class: 'vice', tel: '020777687', icon: 'local_phone' },
      ]
    };
  },
  mounted () {
    this.$nextTick(() => window.addEventListener('scroll', this.handleScroll))
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollTo (section) {
      $('html').animate({ scrollTop: $(section).offset().top - 61 }, 1000)
    },
    scrollToTop () {
      $('html').animate({ scrollTop: 0 }, 1000)
    },
    handleScroll () {
      this.$store.commit('SET_STATE', { name: 'htmlScrollTop', val: $('html').scrollTop() })
    },
    numberPhoneHref (tel) {
      return `tel:+66${tel.substring(1)}`
    },
    numberPhoneShow (tel) {
      if (tel.length === 9) {
        const first = tel.substring(0, 1)
        const second = tel.substring(1, 5)
        const third = tel.substring(5, 9)
        return `${first}-${second}-${third}`
      } else if (tel.length === 10) {
        const first = tel.substring(0, 3)
        const second = tel.substring(3, 6)
        const third = tel.substring(6, 10)
        return `${first}-${second}-${third}`
      }
    }
  }
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
  background: white;
  z-index: 5;
  box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),
    0 3px 1px 0 rgba(20, 23, 28, 0.1);
  transition: all 0.3s linear;

  &.top {
    background-color: transparent;
    box-shadow: none;
    a {
      color: white;
      &:hover {
        border-color: white;
      }
    }
    .curved-btn {
      color: red !important;
      background-color: white;
    }
  }

  .header {
    @media (max-width: 720px) {
      background-color: rgba(245, 245, 245, 0.5);
      border-radius: 100px;
      padding: 5px;
    }

    @media (max-width: 576px) {
      display: none;
    }
  }

  .vice {
    @media (max-width: 1199.9px) {
      display: none;
    }
  }

  .mail {
    @media (max-width: 720px) {
      display: none;
    }
  }

  .title {
    @media (max-width: 600px) {
      display: none;
    }
  }

  #start-header {
    @media (max-width: 720px) {
      display: none;
    }
  }

  .hamburger {
    position: relative;
    top: 4px;
    z-index: 9;
    padding: 0;

    &:focus {
      outline: none;
    }
    .hamburger-box {
      .hamburger-inner {
        width: 30px;
        height: 2px;
        &::before {
          width: 30px;
          height: 2px;
        }

        &::after {
          width: 30px;
          height: 2px;
        }
      }
    }
  }

  .menu {
    position: fixed;
    top: 0;
    left: 0px;
    z-index: 8;
    width: 100vw;
    height: 100vh;
    background: white;

    ul {
      text-align: center;
      margin-top: 10px;

      li {
        padding-bottom: 32px;

        a {
          display: inline-block;
          color: $main-color;
          font-size: 160%;
          font-weight: bold;
          text-transform: uppercase;
          white-space: nowrap;
          position: relative;

          &:after {
            display: block;
            content: "";
            border-bottom: solid 3px $main-color;
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
            transform-origin: 0% 50%;
          }

          &:before {
            position: absolute;
            right: -100px;
            bottom: 5px;
            content: "Coming soon";
            font-family: "caveat";
            font-size: 14px;
            transform: scaleX(0);
            transition: transform 250ms ease-in-out 250ms;
            transform-origin: bottom left;
          }

          &:hover {
            &:after {
              transform: scaleX(1);
            }
            &:before {
              transform: scaleX(1);
            }
          }
        }
      }
    }
  }

  .material-icons {
    color: #ddd;
    font-size: 20px;
  }

  .mailto {
    color: black;
    font-size: 1.3rem;
    padding: 0 18px 0 5px;
  }

  .btn-top {
    position: fixed;
    bottom: 32px;
    right: 96px;
    padding: 3px;
    background-color: white;
    color: $main-color;
    border-radius: 50%;
    transition: all 0.5s;
    box-shadow: 1px 1px 4px 0px #afafafc4;
    &:hover {
      transform: scale(1.15);
    }
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  .slide-fade-enter {
    transform: translateY(-10px);
    opacity: 0;
  }
  .slide-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }
}
</style>
