<template>
  <div class="home">
    <h1>我是Home组件</h1>
    <el-row>
      <!--  type="text" 时当前按钮时文字按钮 -->
      <el-button :loading="true" type="text">加载中...</el-button>
      <!-- el-button的size属性 默认最大尺寸 中等尺寸 medium 小尺寸 small 超小尺寸 mini  -->
      <!-- autofocus 变量的值只有 true/false，默认 false，true 自动垂直剧中 -->
      <el-button :autofocus="true" size="mini" @click="btnClick" disabled type="primary">自动垂直居中超小号按钮</el-button>
      <el-button icon="el-icon-back" type="primary">有图标的上一页</el-button>
      <el-button icon="el-icon-right" type="primary">下一页</el-button>
      <el-button type="success"><i class="el-icon-check color-blue"></i>成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button icon="el-icon-search" type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>

    <!--
      container attribute is only direction(方向):
          the first attribute is init style vertical(垂直)
          the second attribute is horizontal(水平), on the same level
    -->
    <el-container direction="vertical">
      <el-header height="100px">Header</el-header> <!-- header attribute is only height -->
      <el-container>
        <el-aside width="300px">Aside</el-aside> <!-- aside attribute is only width -->
        <el-main>Main</el-main> <!-- main is not attribute -->
      </el-container>
      <el-footer height="80px">footer</el-footer> <!-- footer attribute is only height -->
    </el-container>

    <el-row>
      <el-button plain>朴素按钮</el-button>
      <!-- disabled 属性表示当前元素无法点击 -->
      <el-button type="primary" disabled plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
  </div>
</template>

<script>

  export default {
    name: "Home",
    data(){
      return {
        message: "123123"
      }
    },
    methods: {
      btnClick() {
        this.message = "Hello Element";
      }
    }
  }

</script>

<style>

</style>
