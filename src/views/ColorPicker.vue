<template>
  <div class="color-picker">
    <h1>我是 ColorPicker 组件</h1>
    <h6>
      #、&lt;el-color-picker v-model="color"&gt; 默认无颜色选择器 <br>
      1、show-alpha 是否支持透明度的选择 <br>
      2、:predefine="predefineColors" 预定颜色，值是一个颜色数组 <br>
      3、size="medium" 设置大小
      4、color-format	写入 v-model 的颜色的格式	string	hsl / hsv / hex / rgb	hex（show-alpha 为 false）/ rgb（show-alpha 为 true）<br>
    </h6>
    <div class="block">
      <span class="demonstration">有默认值：</span>
      <el-color-picker @active-change="colorChange" size="mini" show-alpha v-model="color1"></el-color-picker>
      &emsp;&emsp;&emsp;
      <span class="demonstration">无默认值：</span>
      <el-color-picker v-model="color2"></el-color-picker>
    </div>

    <span>预定义颜色：</span>
    <el-color-picker
            v-model="color"
            show-alpha
            :predefine="predefineColors">
    </el-color-picker>
  </div>
</template>

<script>
  export default {
    name: "ColorPicker",
    data() {
      return {
        color: null,
        color1: 'rgba(19, 206, 102, 0.8)',
        color2: '',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
      }
    },
    methods: {
      colorChange(color) {
        console.log(color + "画板中被选中的颜色");
      }
    }
  }
</script>

<style scoped>

</style>