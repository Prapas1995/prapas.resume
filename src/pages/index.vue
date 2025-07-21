<template>
  <div id="resume">
    <!-- <FullLoading /> -->
    <HeaderSection/>
    <IntroSection/>
    <!-- <InformationSection/>
    <TechStackSection/> -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  components: {
    FullLoading: () => import("@/components/FullLoading.vue"),
    IntroSection: () => import("@/components/IntroSection.vue"),
    InformationSection: () => import("@/components/InformationSection.vue"),
    TechStackSection: () => import("@/components/TechStackSection.vue"),
    HeaderSection: () => import("@/components/HeaderSection.vue"),
  },
};
</script>
<style lang="scss">
  @import "@/styles/global.scss";
</style>
