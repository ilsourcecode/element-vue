<template>
  <div class="select">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <router-link to="/select/a">A</router-link>
          <br>
          <router-link to="/select/b">B</router-link>
          <br>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Select"
  }
</script>