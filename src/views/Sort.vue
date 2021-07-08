<template>
  <div class="sort">
    <el-row :gutter="10" align="bottom">
      <!-- xs 调节每个栅格的比例 左 中左 中右 右 -->
      <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">1</div></el-col>
      <el-col :xs="9" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">2</div></el-col>
      <el-col :xs="9" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple">3</div></el-col>
      <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">4</div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Sort"
  }
</script>

<style>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>