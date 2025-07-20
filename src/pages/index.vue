<template>
  <div id="resume">
    <!-- <Information/> -->
    <FullLoading />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  components: {
    FullLoading: () => import("@/components/FullLoading.vue"),
    Information: () => import("@/components/Information.vue"),
  },
};
</script>
