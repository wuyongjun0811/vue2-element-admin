<template>
<el-form ref="form" label-width="100px" :model="form" :inline="inline">
  <el-form-item v-for="item in formLabel" :key="item.label" :label="item.label">
    <el-input v-if="item.type==='input'"
              v-model="form[item.model]"
              :placeholder="'请输入'+item.label">
    </el-input>
    <el-switch v-if="item.type==='switch'"
               v-model="form[item.model]">
    </el-switch>
    <el-date-picker v-if="item.type==='date'"
                    type="date"
                    placeholder="选择日期"
                    value-format="yyyy-MM-dd"
                    v-model="form[item.model]">
    </el-date-picker>
    <el-select v-if="item.type==='select'"
               v-model="form[item.model]"
               placeholder="请选择活动区域">
      <el-option v-for="item in item.opts"
                 :key="item.value"
                 :label="item.label" :value="item.value"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item><slot></slot></el-form-item>
</el-form>
</template>

<script>
export default {
  name: "Form",
  props:{
    formLabel:Array,
    form:Object,
    inline:Boolean,
  }
}
</script>

<style scoped>

</style>