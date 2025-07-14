<template>
    <div id="homepage">
      <HelloWorld/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  export default {
    components: {
        HelloWorld: () => import('@/components/HelloWorld.vue')
    }
  }
  </script>
  