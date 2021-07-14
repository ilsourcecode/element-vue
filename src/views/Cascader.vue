<template>
  <div class="cascader">
    <h1>我是Cascader组件</h1>
    <div class="block">
      <!--
        change 事件触发时 handleChange 方法的参数是当前级联选择器的值
        :options 需要指定对应的级联类型的数组即可渲染出来一个级联选择器
        clearable 清空当前级联选择器的数据
        :show-all-levels="false" 设置显示的格式只显示最后一级的文本数据，但是 change 触发的事件还是能够获取到整个级联的值
        :props=" {multiple: true} " 向子级传递这个属性的值，设置级联多选
        collapse-tags 折叠显示多选的文本结果
        checkStrictly: true  级联选择器中可以单独选择某个级联的文本数据 加上 multiple: true 可多选
        lazy: true  开启动态加载（远程加载）
        @expand-change 当展开节点发生变化时触发
      -->
      <h6>
        1、change 事件触发时 handleChange 方法的参数是当前级联选择器的值 <br>
        2、:options 需要指定对应的级联类型的数组即可渲染出来一个级联选择器 <br>
        3、clearable 清空当前级联选择器的数据 <br>
        4、:show-all-levels="false" ：<br>
        &emsp;&emsp;设置显示的格式只显示最后一级的文本数据，但是change 触发的事件还是能够获取到整个级联的值 <br>
        5、:props=" {multiple: true} " 向子级传递这个属性的值，设置级联多选 <br>
        6、collapse-tags 折叠显示多选的文本结果
      </h6>

      <h6>
        7、:props="{ expandTrigger: 'hover' }" 传递参数值，定义子级展开数据的样式 <br>
        8、disabled 在提供级联格式的数组数据时，如果某一级有 disabled 属性并且为 true 时，禁用当前 label 的选择 <br>
        9、checkStrictly: true  级联选择器中可以单独选择某个级联的文本数据 加上 multiple: true 可多选
        10、lazy: true  开启动态加载（远程加载）
        11、@expand-change 当展开节点发生变化时触发
        12、props 属性
        &emsp;&emsp;i、emitPath true 返回当前节点的所有值，false 只返回当前节点的值

      </h6>
      <span class="demonstration">默认 click(鼠标单击) 触发子菜单</span>
      <el-cascader
              clearable
              v-model="value"
              :show-all-levels="false"
              :options="options"
              @change="handleChange"
              :props=" props "
              collapse-tags
              @expand-change="foldNodeChange"
      ></el-cascader>

      &emsp;

      <span class="demonstration">hover(鼠标移动) 触发子菜单</span>
      <!--
        :props="{ expandTrigger: 'hover' }" 传递参数值，定义子级展开数据的格式
        disabled 在提供级联格式的数组数据时，如果某一级有 disabled 属性并且为 true 时，禁用当前 label 的选择
      -->
      <el-cascader
              v-model="value"
              :options="options"
              :props="{ expandTrigger: 'hover', checkStrictly: true}"
              @change="handleChange"></el-cascader>
      <hr>
      <hr>
      <hr>

      <!--
        <template slot-scope="{ node, data }">
          <span>{{ data.label }}</span>
          <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
        </template>
        用来自定义模版的数据，在这里可以去掉，通过 node，data 两个变量控制级联中的数据信息
      -->
      <el-cascader :options="options">
        <template slot-scope="{ node, data }">
          <span>{{ data.label }}</span>
          <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
        </template>
      </el-cascader>

      <hr>
      <hr>
      <hr>
      <!--
        el-cascader-panel 级联面板
      -->
      <el-cascader-panel :props="{multiple: true, checkStrictly: true}" :options="options"></el-cascader-panel>
    </div>
  </div>
</template>

<script>
  let id = 0;

  export default {
    name: "Cascader",
    data() {
      return {
        props: {
          multiple: true,
          checkStrictly: true, //级联选择器中可以单独选择某个级联的文本数据 加上 multiple: true 可多选
          lazy: true,
          leaf: false, // 数据添加是否为叶子节点的标志位
          lazyLoad (node, resolve) {
            // node 为当前点击的节点
            // resolve 为数据加载完成的回调(必须调用)函数
            // 通过 lazyload 来设置加载数据源的方法
            const { level } = node;
            setTimeout(() => {
              const nodes = Array.from({ length: level + 1 })
                  .map(item => ({
                    value: ++id,
                    label: `选项${id}`,
                    leaf: level >= 2,
                    item: item
                  }));
              // 通过调用resolve将子节点数据返回，通知组件数据加载完成
              resolve(nodes);
            }, 1000)
          }
        },
        value: [],
        options: [{
          value: 'zhinan',
          label: '指南',
          disabled: true,
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      foldNodeChange() {
        console.log("折叠节点发生改变！");
      }
    }
  }
</script>

<style scoped>

</style>