<template>
  <div id="full-loading" v-if="isShow" :class="{ 'fade-out': isHiding }">
    <div class="flex-full-loading">
      <h1>
        <span>P</span>
        <span>r</span>
        <span>a</span>
        <span>p</span>
        <span>a</span>
        <span>s</span>
        <span>&nbsp;</span>
        <span>J</span>
        <span>o</span>
        <span>n</span>
        <span>g</span>
        <span>k</span>
        <span>a</span>
        <span>e</span>
        <span>n</span>
        <span>b</span>
        <span>o</span>
        <span>o</span>
        <span>n</span>
      </h1>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  data() {
    return {
      isShow: this.$store.state.isFullLoading,
      isHiding: false,
    };
  },
  watch: {
    "$store.state.isFullLoading"(val) {
      if (val) this.isShow = true;
      else {
        this.isHiding = true;
        setTimeout(() => {
          this.isHiding = false;
          this.isShow = false;
        }, 1000);
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.loading();
    });
  },
  methods: {
    loading() {
      anime({
        targets: "span",
        scale: [0, 1],
        duration: 500,
        opacity: [0, 1],
        delay: anime.stagger(150, { start: 150 }),
        complete: () => {
          this.$store.commit("SET_STATE", {
            name: "isFullLoading",
            val: false,
          });
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

#full-loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black; //3c3c3c
  opacity: 1;
  z-index: 99999;

  @include transition(opacity 0.3s linear);
  &.fade-out {
    opacity: 0;
  }
  .flex-full-loading {
    padding: 15% 0 0 0;
    h1 {
      font-family: "Geostar", serif;
      font-weight: 500;
      font-size: 48px;
      margin: 0px;
      color: white;
      @media (min-width: 769px) and (max-width: 991px) {
        font-size: 38px;
      }
      @media (max-width: 768px) {
        font-size: 20px;
      }
    }
  }
}
</style>
