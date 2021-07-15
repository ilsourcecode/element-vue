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
      <br>
      <span class="demonstration">多个日期：</span>
      <el-date-picker
              type="dates"
              v-model="value4"
              placeholder="选择一个或多个日期">
      </el-date-picker>
    </div>
    <h6>
      1、 monthrange 月份范围类型
    </h6>
    <div class="block">
      <span class="demonstration">默认：</span>
      <el-date-picker
              v-model="value1"
              type="monthrange"
              range-separator="至"
              start-placeholder="开始月份"
              end-placeholder="结束月份">
      </el-date-picker>
      &emsp;&emsp;&emsp;
      <span class="demonstration">带快捷选项：</span>
      <el-date-picker
              v-model="value2"
              type="monthrange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始月份"
              end-placeholder="结束月份"
              :picker-options="pickerOptions">
      </el-date-picker>
    </div>

    <h6>
      1、value-format="yyyy-MM-dd" 修改时间选择器获取的值 <br>
      &emsp;&emsp;&emsp;i、yyyy-MM-dd 年月日 <br>
      &emsp;&emsp;&emsp;i、timestamp 时间戳
    </h6>
    <div class="block">
      <span class="demonstration">默认为 Date 对象</span>
      <div class="demonstration">值：{{ value6 }}</div>
      <el-date-picker
              v-model="value6"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">使用 value-format</span>
      <div class="demonstration">值：{{ value7 }}</div>
      <el-date-picker
              v-model="value7"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">时间戳</span>
      <div class="demonstration">值：{{ value8 }}</div>
      <el-date-picker
              v-model="value8"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="timestamp">
      </el-date-picker>
    </div>
    <h6>
      1、:default-time="['00:00:00', '23:59:59']" 默认日期选择器时间 时间从 00:00:00 开始到 23:59:59 结束 <br>
      2、daterange 日期范围类
    </h6>
    <div class="block">
      <p>组件值：{{ value9 }}</p>
      <el-date-picker
              v-model="value9"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['00:00:00', '23:59:59']">
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
          },{
            text: '本月',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: '今年至今',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近六个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value6: '',
        value7: '',
        value8: '',
        value9: ''
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