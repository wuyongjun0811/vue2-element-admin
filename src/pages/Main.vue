<template>
  <el-container style="height: 100%;">
    <el-aside width="auto">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "@/components/Aside";
import Header from "@/components/Header";
export default {
  name: "Main",
  components:{
    Aside,
    Header
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="less" scoped>
.el-header{
  background-color: #f7f7f7;
}
.el-main{
  padding-top: 0;
}
</style>