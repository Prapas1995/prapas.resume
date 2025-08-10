<template>
  <div class="resume">
    <FullLoading />
    <HeaderSection/>
    <IntroSection/>
    <TrainingSection/>
    <TechStackSection/> 
    <FooterSection/> 
  </div>
</template>

<script>

import AOS from "aos";
import "aos/dist/aos.css";
export default {
  components: {
    FullLoading: () => import("@/components/FullLoading.vue"),
    IntroSection: () => import("@/components/IntroSection.vue"),
    TrainingSection: () => import("@/components/TrainingSection.vue"),
    TechStackSection: () => import("@/components/TechStackSection.vue"),
    HeaderSection: () => import("@/components/HeaderSection.vue"),
    FooterSection: () => import("@/components/FooterSection.vue"),
  },
  mounted() {
    this.$nextTick(() => AOS.init({ duration: 800 }));
  },
};
</script>
<style lang="scss">
  @import "@/styles/global.scss";
  .resume {
    background: #434343;
    background: linear-gradient(
    45deg,
    rgba(67, 67, 67, 1) 0%,
    rgba(0, 0, 0, 1) 100%
    );
  }
</style>
