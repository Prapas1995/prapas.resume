<template>
  <div class="tech-stack-section">
    <div class="container m-t-60 m-b-20">
      <h1 class="tes-text-title text-center">Skills</h1>
      <div class="tes-flex-img-content text-center row">
        <div class="tes-flex-img-text col-md-5">
          <img class="tes-img" :src="dev3" alt="" data-aos="fade" data-aos-once="true"/>
           <ul class="tes-text-list m-t-12" data-aos="fade-up" data-aos-once="true">
            <li>
              <h3 class="tes-text-subtitle">● Currently</h3>
              <p class="tes-text-detail">
                - Use vue framework as server-side rendering(ssr) and use site core as content management system(cms) and use .net as web api, salesforce cloud and use sql server as database.
              </p>
            </li>
            <li>
              <h3 class="tes-text-subtitle">● July 2021 - June 2023</h3>
              <p class="tes-text-detail">
                - Create web api with asp.net framework and use swagger tools is ui and use sql server is database.
              </p>
              <p class="tes-text-detail">
                - Create a website with vue framework and vuetify, bootstrap ui and use swagger tools api and use sql server is database.
              </p>
              <p class="tes-text-detail">
                - Create a website with nuxt framework and element-plus ui and use swagger tools api and use sql server is database.
              </p>
            </li>
            <li>
              <h3 class="tes-text-subtitle">● April 2017 - February 2021</h3>
              <p class="tes-text-detail">
                - Create a website with php laravel framework and ui template admin pro and use sql server is database.
              </p>
              <p class="tes-text-detail">
                - Build mobile application with react native framework and use material-ui and use node is api and use mongodb is database.
              </p>
              <p class="tes-text-detail">
                - Create a website with react framework and material-ui and use node is api and use mongodb is database.
              </p>
            </li>
           </ul>
        </div>
        <div class="tes-flex-img-text col-md-7" data-aos="fade-down-left" data-aos-once="true">
          <div class="tes-flex-img-logo">
            <img class="tes-img" :src="css" alt="" style="width: 98px;" data-aos="flip-right" :data-aos-delay="`${getRandomDelay()}`" data-aos-once="true"/>
            <img class="tes-img" :src="html" alt="" data-aos="flip-right" :data-aos-delay="`${getRandomDelay()}`" data-aos-once="true"/>
            <img class="tes-img" :src="js" alt="" data-aos="flip-right" :data-aos-delay="`${getRandomDelay()}`" data-aos-once="true"/>
            <img class="tes-img" :src="laravel" alt="" style="width: 183px;" data-aos="flip-right" :data-aos-delay="`${getRandomDelay()}`" data-aos-once="true"/>
            <img class="tes-img" :src="vue" alt="" data-aos="flip-right" :data-aos-delay="`${getRandomDelay()}`" data-aos-once="true"/>
            <img class="tes-img" :src="react" alt="" data-aos="flip-right" :data-aos-delay="`${getRandomDelay()}`" data-aos-once="true"/>
            <img class="tes-img" :src="php" alt="" data-aos="flip-right" :data-aos-delay="`${getRandomDelay()}`" data-aos-once="true"/>
            <img class="tes-img" :src="c" alt="" data-aos="flip-right" :data-aos-delay="`${getRandomDelay()}`" data-aos-once="true"/>
            <img class="tes-img" :src="node" alt="" data-aos="flip-right" :data-aos-delay="`${getRandomDelay()}`" data-aos-once="true"/>
            <img class="tes-img" :src="mongodb" alt="" data-aos="flip-right" :data-aos-delay="`${getRandomDelay()}`" data-aos-once="true"/>
            <img class="tes-img" :src="postgresql" alt="" style="width: 112px;" data-aos="flip-right" :data-aos-delay="`${getRandomDelay()}`" data-aos-once="true"/>
            <img class="tes-img" :src="sqlserver" alt="" data-aos="flip-right" :data-aos-delay="`${getRandomDelay()}`" data-aos-once="true"/>
            <img class="tes-img" :src="salesforce" alt="" style="width: 202px;" data-aos="flip-right" :data-aos-delay="`${getRandomDelay()}`" data-aos-once="true"/>
            <img class="tes-img" :src="sitecore" alt="" data-aos="flip-right" :data-aos-delay="`${getRandomDelay()}`" data-aos-once="true"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "TechStackSection",
  props: {
    msg: String,
  },
  data() {
    return {
      isAnimate: false,
      android: require("@/assets/images/android.png"),
      dev3: require("@/assets/images/dev3.png"),
      css: require("@/assets/images/css.png"),
      html: require("@/assets/images/html.png"),
      js: require("@/assets/images/js.png"),
      laravel: require("@/assets/images/laravel.png"),
      c: require("@/assets/images/c.png"),
      mongodb: require("@/assets/images/mongo.png"),
      node: require("@/assets/images/node.png"),
      php: require("@/assets/images/php.png"),
      postgresql: require("@/assets/images/postgresql.png"),
      react: require("@/assets/images/react.png"),
      salesforce: require("@/assets/images/salesforce.png"),
      sitecore: require("@/assets/images/sitecore.png"),
      sqlserver: require("@/assets/images/sql-server.png"),
      vue: require("@/assets/images/vue.png"),
    };
  },
  mounted() {
    this.$nextTick(() => AOS.init({ duration: 800 }));
  },
  methods: {
    getRandomDelay () {
      return Math.floor(Math.random() * 15) * 100
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.tech-stack-section {
  // background: red;
  .container {
    margin: 0 auto;
  }
  .tes-text-title {
    color: #ffffff;
    font-size: 38px;
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
  .tes-flex-img-content {
    display: flex;
    align-items: center;
  }
  .tes-flex-img-text {
    .tes-img {
      width: 135px;
    }
    h3,p {
      color: #ffffff;
    }
    .tes-text-subtitle {
      font-size: 28px;
      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
    .tes-text-detail {
      font-size: 18px;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
  .tes-flex-img-logo {
    display: flex;
    flex-wrap: wrap; 
    justify-content: center; 
    align-items: center;
    gap: 20px;
  }
  .tes-text-list {
    text-align: left;
    margin: 0px;
    padding: 0px;
    list-style: none;
    li {
      list-style: none;
      p {
        margin-left: 25px;
      }
    }
  }
}
</style>
