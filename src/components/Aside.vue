<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse">
        <h3>{{isCollapse?'后台':'后台管理系统'}}</h3>
        <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
          <i :class="'el-icon-'+ item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </el-menu-item>
<!--        多级菜单-->
<!--        一级菜单-->
        <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{item.label}}</span>
          </template>
<!--          二级菜单-->
          <el-menu-item-group  v-for="(subItem,subIndex) in item.children" :key="subItem.path">
<!--            <template slot="title">分组一</template>-->
            <el-menu-item @click="clickMenu(subItem)" :index="subIndex">{{subItem.label}}</el-menu-item>
          </el-menu-item-group>
<!--          <el-menu-item-group title="分组2">-->
<!--            <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--          </el-menu-item-group>-->
<!--          <el-submenu index="1-4">-->
<!--            <template slot="title">选项4</template>-->
<!--            <el-menu-item index="1-4-1">选项1</el-menu-item>-->
<!--          </el-submenu>-->
        </el-submenu>
<!--        <el-menu-item index="3" disabled>-->
<!--          <i class="el-icon-document"></i>-->
<!--          <span slot="title">导航三</span>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index="4">-->
<!--          <i class="el-icon-setting"></i>-->
<!--          <span slot="title">导航四</span>-->
<!--        </el-menu-item>-->
      </el-menu>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: "Aside",
  data(){
    return{
    menu:[
      {
        path:"/",
        name:"home",
        label:"首页",
        icon:"s-home",
        url:"Home/Home"
      },
      {
        path:"/goods",
        name:"goods",
        label:"商品管理",
        icon:"s-goods",
        url:"MallManage/MallManage"
      },
      {
        path:"/user",
        name:"user",
        label:"用户管理",
        icon:"user",
        url:"UserManage/UserManage"
      },
      {
        label:"其他",
        icon:"location",
        children:[
          {
            path:"/pageOne",
            name:"pageOne",
            label:"页面1",
            icon:"setting",
            url:"Other/PageOne"
          },
          {
            path:"/pageTwo",
            name:"pageTwo",
            label:"页面2",
            icon:"setting",
            url:"Other/PageTwo"
          },
        ]
      },
    ]
    }
    },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
      //路由跳转
      this.$router.push({name:item.name})
      this.$store.commit("tab/selectMenu",item)
    },
  },
  computed:{
    noChildren(){
      return this.menu.filter(item=>!item.children)
    },
    hasChildren(){
      return this.menu.filter(item=>item.children)
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    },
    // asyncMenu(){
    //   return this.$store.state.tab.menu
    // }
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  height: 100%;
  border: none;
  background-color: #ffffff;
  h3{
    padding-left: 20px;
  }
  //span{
  //}
}
</style>