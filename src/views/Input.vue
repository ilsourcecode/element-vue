<template>
  <div class="input">
    <h1>我是Input组件</h1>
    用户名：<el-input size="small" v-model="input" :disabled="false" placeholder="请输入内容"></el-input>
    密码：<el-input v-model="inputPw" placeholder="请输入密码" show-password></el-input>
  </div>
</template>

<script>
  export default {
    name: "Input",
    data() {
      return {
        input: '',
        inputPw: ''
      }
    }
  }
</script>

<style scoped>

</style>