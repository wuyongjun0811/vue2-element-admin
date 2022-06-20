<template>
<el-row class="home" :gutter="20">
  <el-col :span="8" style="margin-top: 20px">
    <el-card shadow="hover">
      <div class="user">
        <img :src="userImg" alt="">
        <div class="user-info">
          <p class="name">Admin</p>
          <p class="access">权限管理员</p>
        </div>
      </div>
      <div class="login-info">
        <p>上次登录时间:<span>2022/3/29</span></p>
        <p>上次登录地点:<span>江苏 南京</span></p>
      </div>
    </el-card>
    <el-card style="margin-top: 20px; height: 300px">
<!--      左侧table-->
      <el-table :data="tableData">
        <el-table-column v-for="(value,key) in tableLabel"
                         :key="key"
                         :prop="key"
                         :label="value">
        </el-table-column>
      </el-table>
    </el-card>
  </el-col>
  <el-col :span="16">
    <div class="orders">
<!--      循环遍历数组-->
      <el-card class="order-block" v-for="item in orderData"
               :key="item.name"
               :body-style="{display:'flex',padding:0}">
        <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
<!--        金额+订单详情-->
        <div class="detail">
          <p class="count">{{item.value+"个"}}</p>
          <p class="text">{{item.name}}</p>
        </div>
      </el-card>
      <el-card class="order-graph">
<!--        echarts图表-->
        <div  id="main" ref="echarts"></div>
<!--        <ECharts id="main" :chartData="echartData.order"></ECharts>-->
      </el-card>
      <div class="graph">
        <el-card class="graph1">
<!--          echarts图表-->
          <div id="main1" ref="userEcharts"></div>
<!--          <ECharts id="main1" :chartData="echartData.user"></ECharts>-->
        </el-card>
        <el-card class="graph2">
<!--          echarts图表-->
          <div id="main2" ref="viedoEcharts"></div>
<!--          <ECharts id="main2" :chartData="echartData.video"></ECharts>-->
        </el-card>
      </div>
    </div>
  </el-col>
</el-row>
</template>

<script>
import {getData} from "@/api";
import * as echarts from 'echarts';
// import ECharts from "@/components/ECharts";
export default {
  name: "Home",
  data(){
    return{
      userImg:require(".././assets/userLogo1.png"),
      tableData:[
        {
          name:'iphone',
          todayBuy:100,
          monthBuy:1000,
          totalBuy:1100,
        },
        {
          name:'iphone',
          todayBuy:100,
          monthBuy:1000,
          totalBuy:1100,
        },
      ],
      tableLabel:{
        name:"名称",
        todayBuy:"今日购买",
        monthBuy:"本月购买",
        totalBuy:"总销量",
      },
      orderData:[
        {
          name:"今日支付订单",
          value:1000,
          icon:"success",
          color:"#2ec7c9",
        },
        {
          name:"今日收藏订单",
          value:1300,
          icon:"star-on",
          color:"#ffb980",
        },
        {
          name:"今日未支付订单",
          value:200,
          icon:"s-goods",
          color:"#5ab1ef",
        },
        {
          name:"本月支付订单",
          value:5000,
          icon:"success",
          color:"#2ec7c9",
        },
        {
          name:"本月收藏订单",
          value:3000,
          icon:"star-on",
          color:"#ffb980",
        },
        {
          name:"本月未支付订单",
          value:600,
          icon:"s-goods",
          color:"#5ab1ef",
        },
      ],
      // echartData:{
      //   order:{
      //     xData:[],
      //     series:[]
      //   },
      //   user:{
      //     xData:[],
      //     series:[]
      //   },
      //   video:{
      //     xData:[],
      //     series:[]
      //   }
      // }
    }
  },
  // components:{
  //   ECharts,
  // },
  mounted() {
    Object.defineProperty(document.getElementById('main'),'clientWidth',{get:function(){return 800;}})
    Object.defineProperty(document.getElementById('main'),'clientHeight',{get:function(){return 260;}})
    Object.defineProperty(document.getElementById('main1'),'clientWidth',{get:function(){return 380;}})
    Object.defineProperty(document.getElementById('main1'),'clientHeight',{get:function(){return 212;}})
    Object.defineProperty(document.getElementById('main2'),'clientWidth',{get:function(){return 380;}})
    Object.defineProperty(document.getElementById('main2'),'clientHeight',{get:function(){return 180;}})
    getData().then(res=>{
      const {code,data}=res.data
      if (code===20000){
        this.tableData=data.tableData
        const order=data.orderData
        const xData=order.date
        const keyArray=Object.keys(order.data[0])
        const series=[]
        keyArray.forEach(key=>{
          series.push({
            name:key,
            type:"line",
            data:order.data.map(item=>item[key]),
          })
        })
        let myChart = echarts.init(this.$refs.echarts)
        const option ={
          xAxis:{
            data:xData
          },
          yAxis:{},
          legend:{
            data:keyArray
          },
          series
        }
        // this.echartData.order.xData=xData
        // this.echartData.order.series=series
        myChart.setOption(option)

        // 用户图
        let myChart1 = echarts.init(this.$refs.userEcharts)
        const userOption={
          legend: {
            textStyle:{
              color:"#333"
            }
          },
          grid:{
            left:"20%"
          },
          //提示框
          tooltip:{
            trigger:"axis",
          },
          xAxis: {
            type:"category",
            data:data.userData.map(item=>item.data),
            axisLine: {
              lineStyle: {
                color: "#17b3a3"
              }
            },
        },
          yAxis: {
            type:"value",
            axisLine: {
              lineStyle: {
                color:"#17b3a3"
              }
            }
          },
          color:['#2ec7c9','#b6a2de'],
          series:[
            {
              name:"新增用户",
              type:"bar",
              data:data.userData.map(item=>item.new)
            },
            {
              name:"活跃用户",
              type:"bar",
              data:data.userData.map(item=>item.active)
            }
          ],
        }
        myChart1.setOption(userOption)
        // this.echartData.user.xData=data.userData.map(item=>item.data)
        // this.echartData.user.series=[
        //       {
        //         name:"新增用户",
        //         type:"bar",
        //         data:data.userData.map(item=>item.new)
        //       },
        //       {
        //         name:"活跃用户",
        //         type:"bar",
        //         data:data.userData.map(item=>item.active)
        //       }
        //     ]

        // 饼图
        let myChart2 = echarts.init(this.$refs.viedoEcharts)
        const videoOption={
            tooltip: {
              trigger: "item",
            },
          color:['#0f78f4','#dd536b','#9462e5','#a6a6a6','#e1bb22','#39c362','#3ed1cf'],
          series:[
            {
              type:"pie",
              data:data.videoData
            }
          ]
        }
        myChart2.setOption(videoOption)
        // this.echartData.video.series=[
        //     {
        //       type:"pie",
        //       data:data.videoData
        //     }
        //   ]
      }
      console.log(res)
    })
  }
}
</script>

<style scoped>
.user{
  border-bottom: 1px solid #8c8c8c;
}
.orders{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 15px;
  justify-content: space-between;
}
.orders el-card{
  width: 200px;
}
.orders .icon{
  width: 60px;
  height: 60px;
  font-size: 25px;
  line-height: 50px;
  text-align: center;
}
.orders .detail{
  height: 20px;
}
.order-block{
  height: 50px;
  width: 31%;
  margin: 5px;
}
.detail .count,.detail .text{
  margin: 2px;
}
.text{
  font-size: 14px;
  color: #8c8c8c;
}
.order-graph{
  width: 100%;
  height: 260px;
}
.graph{
  display: flex;
  width:100%;

}
.graph1{
  width: 50%;
  height: 212px;
  margin-right: 10px;
}
#main1{
  padding-left: -10px;
}
.graph2{
  width: 50%;
  height: 212px;
}
</style>