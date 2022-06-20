<template>
  <el-form :model="form" ref="form" status-icon :rules="rules" label-width="100px" class="login-container">
  <h3 class="login-title">系统登录</h3>
  <el-form-item label="用户名" label-width="80px" prop="username" class="username">
    <el-input type="input" v-model="form.username" autocomplete="off" placeholder="请输入用户名">
    </el-input>
  </el-form-item>
  <el-form-item label="密码" label-width="80px" prop="password" class="password">
    <el-input type="password" v-model="form.password" autocomplete="off" placeholder="请输入密码">
    </el-input>
  </el-form-item>
  <el-form-item class="login-submit">
    <el-button type="primary" @click="login" class="login-submit">登录</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import Mock from "mockjs";
// import {getMenu} from "@/api";
export default {
  name: "Login",
  data(){
    return{
      form:{

      },
      rules:{
        username:[
          {require:true,message:"请输入用户名",trigger:"blur"},
          {min:3,message: "用户名长度不能小于3位",trigger:"blur"}
        ],
        password:[
          {require:true,message:"请输入密码",trigger:"blur"},
          // {min:6,message: "密码长度不能小于6位",trigger:"blur"}
        ]
      }
    }
  },
  methods:{
    login(){
      // getMenu(this.form).then(res=>{
      //   if (res.code===20000){
      //     this.$store.commit("tab/clearMenu")
      //     this.$store.commit("tab/setMenu",res.data.menu)
      //     this.$store.commit("user/setToken",res.data.token)
      //     this.$store.commit("tab/addMenu",this.$router)
      //     this.$router.push({name:"home"})
      //   }else {
      //     this.$message.warning(res.data.message)
      //   }
      // })

      const token = Mock.random.guid()
      this.$store.commit("setToken",token)
      this.$router.push({name:"home"})
    }
  }
}
</script>

<style lang="less" scoped>
.login-container{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 40px 20px 25px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow:  0 0 25px #c6c8ca;
}
.login-title{
  margin: 0 auto 40px auto;
  text-align: center;
  color: #505458;
}
.login-submit{
  margin: 0 auto 0 20px;
}
</style>