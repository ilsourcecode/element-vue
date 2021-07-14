<template>
  <div class="date-picker">
    <h3>我是 DatePicker 组件</h3>
    <h6>
      1、type="date" 日期格式 <br>
      2、:picker-options="pickerOptions" 提供快捷操作的变量 <br>
      &emsp;&emsp;&emsp;i、 pickerOptions 可以是个数组对象 <br>
      &emsp;&emsp;&emsp;ii、必须有 text 和 onClick 函数有一个 picker 形参代表当前对象需 <br>
      &emsp;&emsp;&emsp;&emsp;&ensp;要给父组件发送一个 pick 事件，值修改后的 date 事件 <br>
      3、显示周的日期格式 只需要修改 type="week" format="yyyy 第 WW 周" format 是显示的格式 <br>
      4、type="month" 月份选择器
      5、type="dates" 多个日期选择器
    </h6>
    <div class="block">
      <span class="demonstration">默认：</span>
      <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项：</span>
      <el-date-picker
              v-model="value2"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">周：</span>
      <el-date-picker
              v-model="value1"
              type="week"
              format="yyyy 第 WW 周"
              placeholder="选择周">
      </el-date-picker>
      &emsp;&emsp;&emsp;
      <span class="demonstration">月：</span>
      <el-date-picker
              v-model="value2"
              type="month"
              placeholder="选择月"
              @change="monthChange"
      >
      </el-date-picker>
      &emsp;&emsp;&emsp;
      <span class="demonstration">年：</span>
      <el-date-picker
              v-model="value3"
              type="year"
              placeholder="选择年"
              @change="yearChange">
      </el-date-picker>
      &emsp;&emsp;&emsp;
      <span class="demonstration">多个日期</span>
      <el-date-picker
              type="dates"
              v-model="value4"
              placeholder="选择一个或多个日期">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DatePicker",
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: '',
        value4: ''
      };
    },
    methods: {
      monthChange(val) {
        console.log(val + " || " + this.value2);
      },
      yearChange(val) {
        console.log(val + "  ||  " + this.yearChange);
      }
    }
  }
</script>

<style scoped>

</style>