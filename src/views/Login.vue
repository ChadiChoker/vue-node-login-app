<template>
  <el-form :model="form" @submit.prevent="login">
    <el-form-item label="Email">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="Password">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <el-button type="primary" @click="login">Login</el-button>
  </el-form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', this.form);
        alert(response.data);
      } catch (error) {
        alert('Login failed');
        console.error('Login error:', error);
      }
    }
  }
};
</script>

  