<template>
  <div class="inputNumber">
    <h1>我是 InputNumber 组件</h1>
    <template>
      <!--
        :step="2" 设置递增递减的步长
        v-model="num" 绑定这个变量
        @change="handleChange" 当数据值发生改变时触发当前事件
        :min="1" :max="10" 递增最大值，递减最小值
        step-strictly="true" 输入的值只接受步长的倍数
      -->
      <el-input-number v-model="num" step-strictly :step="4" @change="handleChange" :min="0" :max="10" label="描述文字"></el-input-number>

      <!--
        :precision="3" 设置当前小数点后几位
        :step="0.001" 步长
        size="medium" 设置尺寸 small mini
      -->
      <el-input-number v-model="num1" size="medium" controls-position="right" :precision="3" :step="0.001" :max="10"></el-input-number>
    </template>
  </div>
</template>

<script>
  export default {
    name: "InputNumber",
    data() {
      return {
        num: 1,
        num1: 0.00
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>

<style scoped>

</style>