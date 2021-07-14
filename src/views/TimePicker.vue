<template>
  <div class="time-picker">
    <h3>我是 TimePicker 组件</h3>
    <h6>
      1、可以修改前缀 icon 图标、清空操作 <br>
      2、:picker-options <br>
      &emsp;&emsp;i、属性 "{ start: '08:30',step: '00:15',end: '18:30' }"自定义， <br>
      &emsp;&emsp;&emsp;&nbsp;开始时间、时间的步长、结束时间，自动渲染规定范围内的时间 <br>
      &emsp;&emsp;ii、属性 {selectableRange: '18:30:00 - 20:30:00'}" 设置时间可选范围 <br>
      3、arrow-control 使用按键控制时间选择器 <br>
      4、从某个时间开始到某个时间结束： <br>
      &emsp;&emsp;i、is-range 允许选择时间范围 arrow-control 也可使用 <br>
      &emsp;&emsp;ii、range-separator 开始时间 - 结束时间中间的分隔符 <br>
      &emsp;&emsp;iii、start-placeholder 开始的占位符 <br>
      &emsp;&emsp;iv、end-placeholder 结束占位符 <br>
      5、size 设置大小 medium/small/mini <br>
    </h6>
    <span>规定步长和范围的时间选择器：</span>
    <el-time-select
            size="small"
            prefix-icon="el-icon-search"
            clearable
            v-model="value"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }"
            placeholder="选择时间"
    ></el-time-select>
    <br>
    <span>规定范围内选择：</span>
    <el-time-picker
            v-model="value1"
            :picker-options="{
              selectableRange: '00:00:00 - 23:59:59'
            }"
            placeholder="选择时间"
    ></el-time-picker>
    &emsp;&emsp;&emsp;
    <span>带有案件的时间选择器：</span>
    <el-time-picker
            arrow-control
            v-model="value2"
            :picker-options="{
              selectableRange: '18:30:00 - 20:30:00'
            }"
            placeholder="任意时间点">

    </el-time-picker>
    <br>

    <el-time-picker
            is-range
            v-model="value4"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围">
    </el-time-picker>

    <el-time-picker
            is-range
            range-separator="到"
            v-model="value3"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
            arrow-control
    ></el-time-picker>

  </div>
</template>

<script>
  export default {
    name: "TimePicker",
    data() {
      return {
        value: '',
        value1: new Date(2016, 9, 10, 18, 30),
        value2: new Date(2016, 9, 10, 18, 30),
        value3: new Date(1999, 6, 17, 17, 4),
        value4: new Date(1999, 6, 17, 17, 4)
      }
    }
  }
</script>

<style scoped>

</style>