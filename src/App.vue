<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="less" scoped>
//#app {
//  font-family: Avenir, Helvetica, Arial, sans-serif;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//  text-align: center;
//}
html,body{
  margin:0;
  padding: 0;
}
#app{
  height: 100vh;

}
</style>
