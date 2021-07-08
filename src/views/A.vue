<template>
  <div class="a">
    <div>
      <!-- disabled 禁用 -->
      <el-link disabled href="https://element.eleme.io" target="_blank">禁用的连接</el-link> ｜
      <!--  :underline="false" 禁用下划线 -->
      <el-link :underline="false" type="primary">禁用下划线的连接</el-link> ｜
      <el-link icon="el-icon-phone" type="success">成功链接</el-link>
      <span :autofocus="true"> ｜</span>
      <el-link :underline="false" type="warning"><i class="el-icon-view"></i>警告链接</el-link> ｜
      <el-link type="danger">危险链接</el-link> ｜
      <el-link icon="el-icon-edit" :underline="false" type="info">修改</el-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "A"
  }
</script>

<style scoped>

</style>