<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" background-color="#333" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="/login" @click="goTo('/login')">Login</el-menu-item>
          <el-menu-item index="/register" @click="goTo('/register')">Register</el-menu-item>
        </el-menu>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(route) {
      this.$router.push(route);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-header {
  background-color: #333;
  color: white;
  line-height: 60px;
  text-align: left;
  padding: 0 20px;
}
</style>
