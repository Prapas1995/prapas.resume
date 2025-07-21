<template>
  <div class="header-section">
    <div class="container p-t-15 p-b-15">
      <div class="row h-100">
        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <router-link to="/" @click.native="scrollTo('#introduction')">
            <img :src="imgName" width="140">
          </router-link>
        </div>
        <!-- <div class="col-6 col-sm-8 col-md-9 col-lg-10 my-auto text-right no-wrap">
          <span v-for="item in phone" :key="item.tel" :class="item.class">
            <i class="material-icons m-r-5">{{ item.icon }}</i>
            <a :href="numberPhoneHref(item.tel)" target="_blank" class="mailto">
              <span v-if="item.title" class="title">{{ item.title }}: </span>
              <span>{{ numberPhoneShow(item.tel) }}</span>
            </a>
          </span>
          <span class="mail">
            <i class="material-icons m-r-5">mail_outline</i>
            <a id="contact-header" href="mailto:contact@conicle.com" target="_blank" class="mailto">contact@conicle.com</a>
          </span>
          <a id="start-header" href="mailto:contact@conicle.com" target="_blank" class="curved-btn bg-main-color text-white">GET STARTED</a>
        </div> -->
      </div>
    </div>
    <transition name="slide-fade">
      <i v-if="$store.state.htmlScrollTop > 900" class="material-icons pointer font-40 btn-top" @click="scrollToTop()">keyboard_arrow_up</i>
    </transition>
    HeaderSection
  </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderSection',
    props: {
      msg: String
    },
    data () {
    return {
      imgName: require('@/assets/images/prapas_svg.svg'),
    }
  },
  }
  </script>
  <style lang="scss" scoped>
  .header-section {
    font-size: 24px;
    font-weight: 700;
  }
  </style>
  