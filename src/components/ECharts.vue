<template>
<div ref="echart"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: "ECharts",
  props:{
    isAxisChart:{
      type:Boolean,
      default:true
    },
    chartData:{
      type:Object,
      default(){
        return{
          xData:[],
          series:[]
        }
      }
    }
  },
  data(){
    return{
      //柱状图 折线图
      axisOption:{
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
          data:[],
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
        color:['#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#db7a80','#bd98b3'],
        series:[],
      },
      //饼图
      normalOption:{
        tooltip: {
          trigger: "item",
        },
        color:['#0f78f4','#dd536b','#9462e5','#a6a6a6','#e1bb22'],
        series:[]
      },
      echart:null
    }
  },
  watch:{
    chartData:{
      handler:function (){
        this.initChart()
      },
      deep:true
    }
  },
  methods:{
    initChart(){
      this.initChartData()
      if (this.echart){
        this.echart.setOption(this.options)
      }else {
        this.echart=echarts.init(this.$refs.echart)
        this.echart.setOption(this.options)
      }
    },
    initChartData(){
      if (this.isAxisChart){
        this.axisOption.xAxis.data=this.chartData.xData
        this.axisOption.series=this.chartData.series
      }else {
        this.normalOption.series=this.chartData.series
      }
    }
  },
  computed:{
    options(){
      return this.isAxisChart ? this.axisOption : this.normalOption;
    }
  }
}
</script>

<style scoped>

</style>