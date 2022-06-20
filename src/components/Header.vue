<template>
  <header>
    <div class="l-content">
      <el-button @click="handleCollapse" plain icon="el-icon-menu" size="mini"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="hover" size="mini">
        <img :src="userImg"  class="user" alt="userImg">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: "Header",
  data(){
    return{
      userImg:require("../assets/userLogo1.png")
    }
  },
  computed:{
      ...mapState({
        tags:state=>state.tab.tabList
      })
  },
  methods:{
    handleCollapse(){
    this.$store.commit("tab/collapseMenu")
    }
  }
}
</script>

<style  lang="less" scoped>

header{
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  .l-content{
    display: flex;
    align-items: center;
    .el-button{
      margin-right: 20px;
    }
    }
  .r-content{
    margin-bottom: -5px;
    cursor: pointer;
    .usr{
      width: 30px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  }
</style>