<template>
  <div class="data-time-picker">
    <h3>我是 DateTimePicker 组件</h3>
    <h4>el-date-picker 的 type 类型可以为：year/month/date/week/ datetime/datetimerange/daterange</h4>
    <h6>
      1、日期时间都有的选择器只需要把 el-date-picker 的 type 属性改变成 datetime 就行了 <br>
      2、:picker-options="pickerOptions" 设置 shortcuts 快捷操作 <br>
      3、default-time="12:00:00" 设置默认时间 <br>
    </h6>
    <div class="block">
      <span class="demonstration">默认：</span>
      <el-date-picker
              v-model="value1"
              type="datetime"
              placeholder="选择日期时间">
      </el-date-picker>
      &emsp;
      <span class="demonstration">带快捷选项：</span>
      <el-date-picker
              v-model="value2"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions">
      </el-date-picker>
      &emsp;
      <span class="demonstration">设置默认时间：</span>
      <el-date-picker
              v-model="value3"
              type="datetime"
              placeholder="选择日期时间"
              default-time="12:00:00">
      </el-date-picker>
    </div>

    <h6>
      1、 时间日期范围性：el-date-picker 的 type="datetimerange" 就行了 <br>
      2、range-separator 间隔符
    </h6>
    <div class="block">
      <span class="demonstration">默认：</span>
      <el-date-picker
              v-model="value4"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
      </el-date-picker>
      &emsp;&emsp;
      <span class="demonstration">带快捷选项：</span>
      <el-date-picker
              v-model="value5"
              type="datetimerange"
              :picker-options="pickerOptions2"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right">
      </el-date-picker>
    </div>

    <h6>
      1、设置默认时间： <br>
      &emsp;&emsp;i、:default-time="['12:00:00']" 有一个参数时代表，设置开始时间日期的默认时间 <br>
      &emsp;&emsp;ii、:default-time="['12:00:00', '08:00:00']" 两个值的时候，前面时开始时间的默认值，后面是结束时间的默认值 <br>

    </h6>
    <div class="block">
      <span class="demonstration">起始日期时刻为 12:00:00</span>
      <el-date-picker
              v-model="value1"
              type="datetimerange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00']">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
      <el-date-picker
              v-model="value2"
              type="datetimerange"
              align="right"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00', '08:00:00']">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DateTimePicker",
    data() {
      return {
        pickerOptions: {
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
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: ''
      };
    }
  }
</script>

<style scoped>

</style>