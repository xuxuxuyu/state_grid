<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{margin: 0; padding: 0;}
#app {
  font-size:20px;
}
.popper{
  padding: 0px !important;
  top: 36px !important;
}
</style>
