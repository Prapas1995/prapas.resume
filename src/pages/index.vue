<template>
    <div id="resume">
      <!-- <HelloWorld/> -->
      <comingSoon/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  export default {
    components: {
        // HelloWorld: () => import('@/components/HelloWorld.vue')
        comingSoon: () => import('@/components/comingSoon.vue')
    }
  }
  </script>
  