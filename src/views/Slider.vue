<template>
  <div class="slider">
    <h3>我是Slider组件（斯拉一der）滑块</h3>
    <div class="block">
      <h6>
        1、自定义滑块初始化值大小，会有对应长度的初始化 <br>
        2、:show-tooltip="false  是否隐藏提示内容 <br>
        3、:format-tooltip="formatToolTip" 可以对滑块的值进行一些操作，默认传入的参数是当前滑块的 value 值 <br>
        4、:step="10"  设置步长 <br>
        5、show-stops  显示每次步长的间隔点 <br>
        6、range 开启范围选择 <br>
        7、:marks="marks" 值是一个数组(数组中每个数字代表的就是当前滑块 value 滑到当前位置显示对应的东西)
        8、:show-input="true" 开启输入框设置滑块数据大小
        9、:show-input-controls="false" 开启输入框的前提下，是否禁用输入框的按钮
        10、input-size="larges" 有输入框的前提下，定义输入框的大小
      </h6>
      <span class="demonstration">默认</span>
      和 inputNumber 组合在一块的滑块：<el-slider
            :show-input="true"
            :show-input-controls="false"
            v-model="value1"
            input-size="larges"></el-slider>
      <el-input-number @change="handleChange" v-model="value1" :min="1" :max="100"></el-input-number>
      <br>
      自定义数据大小、设置显示提示内容的滑块：<el-slider :show-tooltip="true" :format-tooltip="formatToolTip" v-model="value2"></el-slider>
      禁用的滑块：<el-slider v-model="value3" disabled></el-slider>
      步长、步长间隔点的滑块：<el-slider v-model="value4" :step="10" show-stops></el-slider>
      有范围、步长、范围、步长间隔点的滑块：<el-slider v-model="value5" :step="10" range show-stops></el-slider>
      竖状态的滑块：<el-slider v-model="value6" :step="10" range height="200px" show-stops vertical></el-slider>
      <el-slider :marks="marks" :step="10" range v-model="value7"></el-slider>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Slider",
    data() {
      return {
        value1: 0,
        value2: 54,
        value3: 18,
        value4: 0,
        value5: 0,
        value6: 0,
        value7: 0,
        value8: 0,
        marks: {
          100: 'S',
          90: 'A',
          80: 'B',
          70: 'C',
          60: {
            style: {
              color: 'red'
            },
            label: this.$createElement('strong', 'D')
          },
          0: {
            style: {
              color: 'red'
            },
            label: this.$createElement("strong", 'E')
          }
        }
      }
    },
    methods: {
      formatToolTip(val) {
        return val / 100;
      },
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>

<style scoped>
  .toolTipClass {
    color: red;
  }
</style>