<template>
  <div class="rate">
    <h1>我是 Rate 组件</h1>
    <h6>
      #、&lt;el-rate v-model="value1"&gt; 默认的评估样式 <br>
      1、colors: ['','','']评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色） <br>
      2、low-threshold="1" 到 > 1 为止都是一个等级  high-threshold="3" >= 3 为止是一个等级 <br>
      3、show-text 显示每个星星辅助文字 :texts="['A','B','C','D','E']" 自定义辅助文字信息 <br>
      4、score-template	分数显示模板	string	—	{value}
      5、show-score 显示当前分数，不能与 show-text 同时存在
      6、void-color 为选中的颜色 <br>
      7、:allow-half="true" 允许半选 <br>
      8、disabled-void-color 只读时为选中的颜色 <br>
      9、icon-classes	icon 的类名： <br>
      &emsp;&emsp;若传入数组，共有 3 个元素，为 3 个分段所对应的类名；array - ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'] <br>
      &emsp;&emsp;若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名	object - {1: 'el-icon-star-on', 3: 'el-icon-star-on', 5: 'el-icon-star-on'} <br>
      10、text-color 辅助文字颜色 <br>
      11、texts	辅助文字数组	array	—	['极差', '失望', '一般', '满意', '惊喜'] <br>
    </h6>
    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <el-rate void-color='#99A9BF' :allow-half="true" v-model="value1"></el-rate>
    </div>
    <div class="block">
      <span class="demonstration">区分颜色</span>
      <el-rate
              low-threshold="1"
              high-threshold="3"
              show-text
              :texts="['A','B','C','D','E']"
              v-model="value2"
              :colors="colors">
      </el-rate>
    </div>

    <div class="block">
      <span class="demonstration">区分笑脸</span>
      <el-rate
              v-model="value3"
              :icon-classes="iconClasses"
              void-icon-class="icon-rate-face-off"
              :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate>
    </div>

    <div class="block">
      <span>只读</span>
      <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
              :colors="{1: '#99A9BF', 3: '#F7BA2A', 5: '#FF9900'}">
      </el-rate>
      <el-input-number v-model="value" :min="0" :max="5" :step="0.1" size="mini"></el-input-number>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Rate",
    data() {
      return {
        value: 3.3,
        value1: null,
        value2: null,
        value3: null,
        // 等同于 { 1-2: '#99A9BF', 3: { value: '#F7BA2A', excluded: true }, 4-5: '#FF9900' }
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],

        // { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
        iconClasses: { 2: 'icon-rate-face-1', 4: 'icon-rate-face-2', 5: 'icon-rate-face-3' }
      }
    }
  }
</script>

<style scoped>

</style>