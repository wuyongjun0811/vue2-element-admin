<template>
  <div>
    <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
      <el-table-column
          label="型号"
          prop="model">
      </el-table-column>
      <el-table-column
          label="价格"
          prop="price">
      </el-table-column>
      <el-table-column
          label="库存"
          prop="store">
      </el-table-column>
      <el-table-column
          align="right">
        <template slot="header">
        </template>
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        background
        layout="prev, pager, next"
        :total="100">
    </el-pagination>
  </div>


  <!--<div class="table">-->
  <!--<el-table :data="tableData" style="height: 90%">-->
  <!--  <el-table-column v-for="item in tableLabel" :key="item.prop" :label="item.label">-->
  <!--    <template slot-scope="scope">-->
  <!--      <span style="margin-left: 10px">{{scope.row[item.prop]}}</span>-->
  <!--    </template>-->

  <!--  </el-table-column>-->
  <!--  <el-table-column prop="date" label="操作" width="180">-->
  <!--    <el-button size="mini" @click="handleEdit">编辑</el-button>-->
  <!--    <el-button size="mini" type="danger" @click="handleDelete">删除</el-button>-->
  <!--  </el-table-column>-->
  <!--</el-table>-->
  <!--  <el-pagination class="page"-->
  <!--      background-->
  <!--      layout="prev, pager, next"-->
  <!--      :total="pageSum.total"-->
  <!--      :current-page.sync="pageSum.page"-->
  <!--      @current-change="changePage"-->
  <!--      page-size="10">-->
  <!--  </el-pagination>-->
  <!--</div>-->

</template>

<script>
export default {
  name: "Goods",
  data() {
    return {
      tableData: [{
        model: 'iphone13pro',
        price: '8800元',
        store: '1000部'
      }, {
        model: 'iphone12pro',
        price: '8500元',
        store: '1500部'
      }, {
        model: 'iphone12',
        price: '5999元',
        store: '1800部'
      }, {
        model: 'iphone13ProMax',
        price: '9999元',
        store: '2000部'
      },],
      search: ''
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  // props:{
  //   tableData:Array,
  //   tableLabel:Array,
  //   pageSum:Object
  // },
  // methods:{
  //   handleEdit(row){
  //     this.$emit("edit",row)
  //   },
  //   handleDelete(row){
  //     this.$emit("delete",row)
  //   },
  //   changePage(page){
  //     this.$emit("changePage",page)
  //   }
  // }
}
</script>

<style lang="less" scoped>
.table{
  height: calc(100% - 62px);
  background-color: #fff;
  position: relative;
  .page{
    position: absolute;
    bottom: 0;
    right: 20px;
  }
}
</style>