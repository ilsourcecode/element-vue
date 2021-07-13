<template>
  <div class="selectB">
    <h1>我是selectb组件</h1>
    <!--
      multiple  多选
      需要将filterable和remote设置为true，
      remote-method为一个Function，它会在输入值发生变化时调用，'参数'为当前输入值。
      需要注意的是，如果el-option是通过v-for指令渲染出来的，此时需要为el-option添加key属性，且其值需具有唯一性。
      loading 是否正在从远程获取数据 boolean
      loading-text="加载中...." 远程搜索时，没加载完成时显示，默认 '加载中'
      no-data-text="没有数据匹配" 搜索的数据不存在时显示
      :popper-append-to-body="true" 将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false
    -->
    <el-select
            icon="el-icon-search"
            v-model="value"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            loading-text="加载中...."
            no-data-text="没有数据匹配"
            :loading="loading"
            @visible-change="dropDownBox">
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
    <!--
      allow-create 属性即可通过在输入框中输入文字来创建新的条目(参数)
      default-first-option 用户按下 enter 键时，默认选择条目(参数)第一个选项
    -->
    <el-select
            v-model="value1"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请选择文章标签">
      <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
      </el-option>
    </el-select>


  </div>
</template>

<script>
  export default {
    name: "SelectB",
    data() {
      return {
        options: [],
        value: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
          "Arkansas", "California", "Colorado",
          "Connecticut", "Delaware", "Florida",
          "Georgia", "Hawaii", "Idaho", "Illinois",
          "Indiana", "Iowa", "Kansas", "Kentucky",
          "Louisiana", "Maine", "Maryland",
          "Massachusetts", "Michigan", "Minnesota",
          "Mississippi", "Missouri", "Montana",
          "Nebraska", "Nevada", "New Hampshire",
          "New Jersey", "New Mexico", "New York",
          "North Carolina", "North Dakota", "Ohio",
          "Oklahoma", "Oregon", "Pennsylvania",
          "Rhode Island", "South Carolina",
          "South Dakota", "Tennessee", "Texas",
          "Utah", "Vermont", "Virginia",
          "Washington", "West Virginia", "Wisconsin",
          "Wyoming"],
        options1: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value1: []
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: `value:${item}`, label: `label:${item}` };
      });
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options = this.list.filter(item => {
              return item.label.toLowerCase()
                  .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      },
      dropDownBox() {
        console.log("下拉框隐藏/打开触发的事件");
      }
    }
  }
</script>

<style scoped>

</style>