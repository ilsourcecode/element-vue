<template>
  <div class="checkout">
    <h1>我是 Checkout 组件</h1>
    <h5>-复选框/默认选择框</h5>
    <template>
      <el-checkbox @change="checkboxChange" v-model="checkbox1">兴趣1</el-checkbox>
      <el-checkbox v-model="checkbox2">兴趣2</el-checkbox>
      <el-checkbox v-model="checkbox3">兴趣3</el-checkbox>
      <el-checkbox v-model="checkbox4" disabled>默认感兴趣的不可取消</el-checkbox>
    </template>

    <hr>
    <h5>-全选/反选</h5>
    <template>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group :max="1" v-model="checkedCities" @change="handleCheckedCitiesChange" fill="green" text-color="red">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </template>
    <hr>

    <h5>-限制多选框</h5>
    <template>
      <el-checkbox-group
              v-model="checkedCities"
              :min="1"
              :max="2">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </template>
    <hr>

    <h5>-带有边框，可设置大小的复选框</h5>
    <!-- size="small" 设置在 el-checkbox-group(分组复选框的标签上) -->
    <!-- border 设置每个单一复选框的边框 disabled 禁用当前复选框-->
    <template>
      <div>
        <el-checkbox v-model="checkbox1" label="备选项1" border></el-checkbox>
        <el-checkbox v-model="checkbox2" label="备选项2" border></el-checkbox>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox v-model="checkbox3" label="备选项1" border size="medium"></el-checkbox>
        <el-checkbox v-model="checkbox4" label="备选项2" border size="medium"></el-checkbox>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup1" size="small">
          <el-checkbox label="备选项1" border></el-checkbox>
          <el-checkbox label="备选项2" border disabled></el-checkbox>
        </el-checkbox-group>
        {{checkboxGroup1}}
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
          <el-checkbox label="备选项1" border></el-checkbox>
          <el-checkbox label="备选项2" border></el-checkbox>
        </el-checkbox-group>
        {{checkboxGroup2}}
      </div>
    </template>
  </div>
</template>

<script>

  const cityOptions = ['上海', '北京', '广州', '深圳'];

  export default {
    name: "Checkbox",
    data() {
      return {
        checkbox1: true,
        checkbox2: false,
        checkbox3: false,
        checkbox4: true,
        checkAll: false,

        checkedCities: ['上海', '北京'],

        cities: cityOptions,
        isIndeterminate: true,
        checkboxGroup1: [],
        checkboxGroup2: ['备选项2']
      }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      checkboxChange() {
        console.log("checkbox change event is run！")
      }
    }
  }
</script>
