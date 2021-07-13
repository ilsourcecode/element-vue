<template>
  <div class="select">
    <h1>我是 select 组件</h1>

    <!--
      :disabled="index % 2 === 0"  禁用某个 option 参数
      disabled 在 el-select 使用，表示当前选择器是一个禁用的
      clearable 在 el-select 使用，表示当前选择器有内容时可以清空
    -->
    <el-select v-model="value" clearable placeholder="请选择">
      <el-option
              v-for="(item,index) in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="index % 2 === 0"
      >
      </el-option>
    </el-select>

    <hr>
    <hr>
    <hr>

    <el-select v-model="value1" multiple placeholder="请选择">
      <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
      </el-option>
    </el-select>


    <!--
      multiple 当前 select 选择器可以多选
      collapse-tags 将多选的参数合并成一条数据
    -->
    <el-select
            v-model="value2"
            multiple
            collapse-tags
            style="margin-left: 20px;"
            placeholder="请选择">
      <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
      </el-option>
    </el-select>

    <hr>
    <hr>
    <hr>

    <el-select v-model="value" placeholder="请选择">
      <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
      </el-option>
    </el-select>

    <hr>
    <hr>
    <hr>

    <!--
      filterable 开启搜索功能  默认选择 label 属性包输入值的选项
      :filter-method="dataFilter" dataFilter 自定义的搜索方法
       可以通过传入一个filter-method来实现。filter-method为一个
         Function，它会在输入值发生变化时调用，参数为当前输入值。
    -->
    <el-select v-model="value" filterable placeholder="请选择">
      <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
      </el-option>
    </el-select>

    <hr>
    <hr>
    <hr>
    <el-select v-model="value" placeholder="请选择">
      <el-option-group
              v-for="group in options1"
              :key="group.label"
              :label="group.label">
        <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </el-option>
      </el-option-group>
    </el-select>
  </div>
</template>

<script>
  export default {
    name: "Select",
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        options1: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value: '',
        value1: [],
        value2: []
      }
    }
  }
</script>