<template>
  <div class="about">
    <!-- gutter 属性指定每一栏之间的间隔 -->
    <!--
       justify: 属性
            center 值，可以让当前一行的两个元素居中显示，中间会有 gutter 值的距离
            end 值，把同一行的元素在末尾展示
            start 值，把同一行的元素在头部展示
            space-between 值，把同一行的元素分别向两边排列
            space-around 值，把同一行的元素均分
    -->
    <el-row :gutter="30" type="flex" justify="space-around" class="banner-box">
      <!-- 这里把页面的宽划分成 24 份 -->
      <el-col :span="4">
        <div class="grid-content bg-purple">1
          <img width="30px" height="30px" src="../assets/logo.png" alt="">
        </div>
      </el-col>
<!--      <el-col :span="16"><div class="grid-content bg-purple">2</div></el-col>-->
<!--       offset 属性，设置偏移量，总共页面合起来 24 份，偏移量相对于当前的元素标签偏移16份
           <el-col :span="4" :offset="16"><div class="grid-content bg-purple-light">3</div></el-col>-->
      <el-col :span="4"><div class="grid-content bg-purple">2</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">3</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">4</div></el-col>
    </el-row>
  </div>
</template>

<style>
  .bg-purple {
    background: #ff5777;
  }

  .bg-purple-light {
    background: #ff8198;
  }
</style>
