<template>
<div class="user-manage">
  <el-dialog :title="operateType==='add'?'新增用户':'编辑用户'" :visible.sync="isShow">
  <Form :formLabel="operateFormLabel" :form="operateForm" :inline="true" ref="form"></Form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="isShow=false">取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </div>
  </el-dialog>
  <div class="user-manage-header">
    <el-button class="add" type="primary" @click="addUser">新增</el-button>
    <Form  class="input-search" :formLabel="formLabel" :form="searchForm" :inline="true" ref="form">
<!--slot区域-->
       <el-button class="search" type="primary" @click="getList">搜索</el-button>
    </Form>
  </div>
  <Table :table-data="tableData"
         :table-label="tableLabel"
         :pageSum="pageSum"
          @changePage="getList()"
          @edit="editUser"
          @delete="deleteUser"></Table>
</div>
</template>

<script>
import Form from "@/pages/Form";
import Table from "@/components/Table";
export default {
  name: "User",
  data(){
    return{
      operateType:"add",
      isShow:false,
      operateFormLabel:[
        {
          model:"name",
          label:"姓名",
          type:"input",
        },
        {
          model:"age",
          label:"年龄",
          type:"input",
        },
        {
          model:"sex",
          label:"性别",
          type:"select",
          opts:[
            {
              label:"男",
              value:1,
            },
            {
              label:"女",
              value:0,
            },
          ]
        },
        {
          model:"birth",
          label:"出生日期",
          type:"date",
        },
        {
          model:"address",
          label:"地址",
          type:"input",
        },
      ],
      operateForm:{
        name:"",
        address:"",
        age:"",
        birth:"",
        sex:""
      },
      formLabel:[
        {
          model:"keyword",
          label:"",
          type:"input",
        }
      ],
      searchForm:{
        keyword:""
      },
      tableData:[],
      tableLabel:[
        {
          prop:"name",
          label:"姓名"
        },
        {
          prop:"age",
          label:"年龄"
        },
        {
          prop:"sex",
          label:"性别"
        },
        {
          prop:"birth",
          label:"出生日期",
          width:200
        },
        {
          prop:"address",
          label:"地址",
          width:320
        },
      ],
      pageSum:{
        page:1,
        total:30
      }
    }
  },
  methods:{
    confirm(){

    },
    addUser(){
      this.isShow=true
    },
    getList(){
    },
    editUser(){

    },
    deleteUser(){

    }
  },
  components:{
    Form,
    Table
  }
}
</script>

<style  lang="less" scoped>
.user-manage-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-search{
padding-top: 11px;
}
.add{
  margin-top: -10px;
}
</style>