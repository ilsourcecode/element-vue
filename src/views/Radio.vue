<template>
  <div class="radio">
    <template>
      <!-- 要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。 -->
      <!-- border 属性，当前页面元素是否需要边框 -->
      <!-- change 事件：当值发生改变了就会出发这个事件 -->
      <el-radio @change="radioClick" border v-model="radio" label="1">男</el-radio>
      <!-- 这里的 label 值就相当于 当前标签的 value + label 标签 -->
      <el-radio v-model="radio" label="2">女</el-radio>
    </template>

    <template>
      <div>
        <!-- size="medium" 设置单选框的大小 -->
        <!-- text-color="red" 设置 radio 中文字的颜色为 red -->
        <!-- @change="radioGroupClick" 这一组中的数据发生改变就会触发当前事件 -->
        <el-radio-group fill="yellow" v-model="radio1" text-color="red" @change="radioGroupClick">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio2" size="medium">
          <el-radio-button label="上海" ></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio3" size="small">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京" disabled ></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio4" disabled size="mini">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
    </template>

    <template>
      <div>
        <el-radio v-model="radio5" label="1">备选项1</el-radio>
        <el-radio v-model="radio5" label="2" border>备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio v-model="radio6" label="1" size="medium">备选项1</el-radio>
        <el-radio v-model="radio6" label="2" border size="medium">备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio7" size="small">
          <el-radio label="1">备选项1</el-radio>
          <el-radio label="2" border disabled>备选项2</el-radio>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio8" size="mini" disabled>
          <el-radio label="1">备选项1</el-radio>
          <el-radio label="2" border>备选项2</el-radio>
        </el-radio-group>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "Input",
    methods: {
      radioClick() {
        console.log("change event is run!");
      },
      radioGroupClick() {
        console.log("radio-group change event is run!")
      }
    },
    data () {
      return {
        radio: '2',
        radio1: '上海',
        radio2: '上海',
        radio3: '上海',
        radio4: '上海',
        radio5: '1',
        radio6: '1',
        radio7: '1',
        radio8: '1'
      };
    }
  }
</script>

<style scoped>

</style>