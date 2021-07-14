<template>
  <div id="app">
    <div id="nav">
      <el-container>
        <el-header>
          <img width="30px" height="30px" src="./assets/logo.png" alt="">
        </el-header>

        <el-container>
          <el-aside width="200px">
            <router-link to="/">Home</router-link>
            <br>
            <router-link to="/about">About</router-link>
            <br>
            <router-link to="/sort">Sort</router-link>
            <br>
            <router-link to="/a">A</router-link>
            <br>
            <router-link to="/radio">Radio</router-link>
            <br>
            <router-link to="/checkout">Checkout</router-link>
            <br>
            <router-link to="/input">Input</router-link>
            <br>
            <router-link to="/inputNumber">InputNumber</router-link>
            <br>
            <router-link to="/select">Select</router-link>
            <br>
            <router-link to="/switch">Switch</router-link>
            <br>
            <router-link to="/slider">Slider</router-link>
            <br>
            <router-link to="/timePicker">TimePicker</router-link>
            <br>
            <router-link to="/datePicker">DatePicker</router-link>
            <br>
          </el-aside>

          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<style>
  .el-header {
    background: indianred;
  }

  .el-aside {
    background: blanchedalmond;
  }

  .el-main {
    background: chartreuse;
  }

  .el-footer {
    background: #ff8198;
  }
</style>
