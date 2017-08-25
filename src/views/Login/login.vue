<template>
    <div class="login">
      <div class="login-content">
        <el-row>
          <h1 class="title">登录</h1>
          <el-form ref="loginForm" :model="loginForm" :rules="rules">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username" type="text" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" class="password">
                <el-input v-model="loginForm.password" type="password" placeholder="密码"></el-input>
                <router-link to='/forget' class="forget">忘记密码?</router-link>
            </el-form-item>
            <el-form-item class="button-group">
              <el-button type="primary" @click="login" :loading="loading">登录</el-button>
              <el-button @click="register">注册</el-button>
            </el-form-item>
          </el-form>
        </el-row>
      </div>
    </div>
</template>

<script>

  import Api from '../../api/api'
  import Ajax from '../../utils/ajax/ajax'
  import Store from '../../utils/store/store'

  export default {
    name: 'login',
    data () {
      return {
        loading: false,
        msg: '登录',
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符' }
          ],
          password: [
            { required: true, message: '请输入密码' },
          ]
        }
      }
    },
    methods: {
      login() {
        const self = this
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            self.loading = true
            Ajax.http(this, 'post', Api.login, {
              "username" : self.loginForm.username,
              "password" : self.loginForm.password
            }, (res) => {
              console.log(res)
              const store = new Store()
              store.set('userinfo' , res.data)
              self.$router.push('/v1/setting/shopinfo')
            }, false, (res) => {
              self.loading = false
            });
          }else{
            return false;
          }
        })
      },
      register() {
        this.$router.push('/reg')
      }
    },
    mounted () {
      document.title = '登录'
    }
  }
</script>

<style lang="scss">
  .login{
    width: 100%;
    height: 100%;
    display: inline-block;
    position: relative;
    background-color: #20a0ff;
    .login-content{
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 320px;
      height: 300px;
      margin-left: -180px;
      margin-top: -170px;
      background-color: #fff;
      border-radius: 5px;
      text-align: center;
      padding: 20px;
      .title{
        font-size: 20px;
      }
      .password{
        position: relative;
        .forget{
          position: absolute;
          right: 0;
          bottom: -35px;
          cursor: pointer;
          color: #58b7ff;
        }
      }
      .button-group{
        margin-top: 60px;
      }
    }
  }
</style>
