<template>
    <el-form :model="form" @submit.prevent="register">
      <el-form-item label="Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="register">Register</el-button>
    </el-form>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      async register() {
        try {
          const response = await axios.post('http://localhost:3000/register', this.form);
          alert(response.data);
        } catch (error) {
          alert('Registration failed');
        }
      }
    }
  }
  </script>
  