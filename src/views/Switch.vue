<template>
  <div class="switch">
    <h3>我是 Switch 组件</h3>
    <h6>
      1、active-color="#13ce66" ｜ inactive-color="#ff4949" 设置开关的背景颜色 <br>
      2、active-value="100" ｜ inactive-value="0" 设置开关的值 <br>
      3、active-text="按年计费" ｜ inactive-text="按月计费" 设置开关左右两边的文本内容 <br>
      4、:content="'开关值: ' + value1" 设置鼠标浮动到开关上时显示的内容 <br>
      5、placement 悬浮在开关上显示内容的位置，上下左右 <br>
      6、width="70"  设置开关宽度 <br>
      7、validate-event	改变 switch 状态时是否触发表单的校验
    </h6>
    <el-switch
            width="70"
            v-model="value"
            :active-icon-class="{'el-icon-arrow-right': !value}"
            :inactive-icon-class="{'el-icon-arrow-left': value}"
            active-color="#13ce66"
            inactive-color="#ff4949">
    </el-switch>

    <hr>

    <el-switch
            disabled
            v-model="value2"
            active-text="按年付费"
            inactive-text="按月付费">
    </el-switch>

    <el-switch
            :style="{display: 'block'}"
            v-model="value3"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="按年计费"
            inactive-text="按月计费">

    </el-switch>

    <hr>

    <el-tooltip :content="'开关值: ' + value1" placement="left">
      <el-switch
              v-model="value1"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-value="100"
              inactive-value="0">
      </el-switch>
    </el-tooltip>
  </div>
</template>

<script>
  export default {
    name: "Switch",
    data() {
      return {
        value: true,
        value1: '100',
        value2: true,
        value3: true
      }
    }
  }
</script>

<style scoped>

</style>