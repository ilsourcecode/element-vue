<template>
  <div class="transfer">
    <h1>我是 Transfer(转移，搬迁) 组件</h1>
    <h6>
      #、&lt;el-transfer v-model="value" :data="data"&gt; 默认穿梭框 <br>
      1、:data="data" 通过 data 属性将穿梭框与一个数组绑定数据源 与 14 条相同功能 <br>
      &emsp;&emsp;i、key 为数据的唯一性标识 <br>
      &emsp;&emsp;ii、label 为显示文本<br>
      &emsp;&emsp;iii、disabled 表示该项数据是否禁止转移<br>
      2、v-model="value" value = [1,5] 被传递过去的值有这两个下标 <br>
      3、filterable 为 true 即可开启搜索模式 query 是搜索框的内容， item 是穿梭框中的所有数据 <br>
      4、label 属性包含搜索关键字，则会在搜索结果中显示 <br>
      5、这里的搜索是 cities 与 pinyin 两个数组的下标对应的 <br>
      6、titles 标题文案 <br>
      7、button-texts 按钮文案 <br>
      8、:render-content="renderFunc" 渲染穿梭框显示数据格式 第二个参数是穿梭框的所有数据 <br>
      &emsp;&emsp;i、format	列表顶部勾选状态文案 <br>
      &emsp;&emsp;&emsp;&emsp;i.i、object{noChecked, hasChecked} <br>
      &emsp;&emsp;&emsp;&emsp;i.ii、v -> { noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' } <br>
      9、:format="{ noChecked: '${total}', hasChecked: '${checked}/${total}' }"  列表顶部的勾选状态文案这里显示多少条数据被选择 <br>
      10、:left-default-checked="[2, 3]" :right-default-checked="[1]" 希望某些数据项在初始化时就被勾选 <br>
      11、@change 触发的时间参数信息 value 右面还有的数据 direction 移到了哪里(left/right) movedKeys 移走的 key <br>
      12、数据源没有 key 和 label 字段，在功能上与它们相同的字段名为 value 和 desc。因此可以使用props 属性为 key 和 label 设置别名。 <br>
      13、target-order	右侧列表元素的排序策略： <br>
      &emsp;&emsp;i、若为 original，则保持与数据源相同的顺序； <br>
      &emsp;&emsp;ii、若为 push，则新加入的元素排在最后； <br>
      &emsp;&emsp;iii、若为 unshift，则新加入的元素排在最前 <br>
      &emsp;&emsp;iv、string 类型	值 original / push / unshift	original<br>
      14、props	数据源的字段别名	object{key, label, disabled} <br>
      15、left-footer	左侧列表底部的内容 例：左按钮 &emsp;&emsp;right-footer	右侧列表底部的内容 例：右按钮

    </h6>
    <el-transfer v-model="value" :data="data"></el-transfer>

    <el-transfer
            filterable
            :filter-method="filterMethod"
            filter-placeholder="请输入城市拼音"
            v-model="value1"
            target-order="unshift"
            :data="data1">
    </el-transfer>

    <p style="text-align: center; margin: 0 0 20px">使用 render-content 自定义数据项</p>
    <div style="text-align: center">
      <el-transfer
              style="text-align: left; display: inline-block"
              v-model="value2"
              filterable
              :left-default-checked="[2, 3]"
              :right-default-checked="[1]"
              :render-content="renderFunc"
              :titles="['Source', 'Target']"
              :button-texts="['到左边', '到右边']"
              :format="{
                noChecked: '${total}',
                hasChecked: '${checked}/${total}'
              }"
              @change="handleChange"
              :data="data2">
        <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
        <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
      </el-transfer>
    </div>
    <p style="text-align: center; margin: 50px 0 20px">使用 scoped-slot 自定义数据项</p>
    <div style="text-align: center">
      <el-transfer
              style="text-align: left; display: inline-block"
              v-model="value4"
              filterable
              :left-default-checked="[2, 3]"
              :right-default-checked="[1]"
              :titles="['Source', 'Target']"
              :button-texts="['到左边', '到右边']"
              :format="{
                noChecked: '${total}',
                hasChecked: '${checked}/${total}'
              }"
              @change="handleChange"
              :data="data2">
        <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
        <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
        <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
      </el-transfer>
    </div>

    <el-transfer
            v-model="value3"
            :props="{
              key: 'value',
              label: 'desc'
            }"
            :data="data3">
    </el-transfer>
  </div>
</template>

<script>
  export default {
    name: "Transfer",
    data() {
      const generateData = data => {

        data = [];
        for (let i = 1; i <= 9; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i } `,
            disabled: i % 4 == 0
          });
        }

        return data;
      }

      const generateData1 = data => {
        data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      };

      const generateData2 = data => {
        data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };

      const generateData3 = data => {
        data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            value: i,
            desc: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };

      return {
        data: generateData(),
        value: [1, 4],
        data1: generateData1(),
        value1: [],
        filterMethod(query, item) {
          console.log(query + " || " + item);
          return item.pinyin.indexOf(query) > -1;
        },
        data2: generateData2(),
        value2: [1],
        value4: [1],
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        },
        data3: generateData3(),
        value3: []
      }
    },
    methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      }
    }
  }
</script>

<style scoped>
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>