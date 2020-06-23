<template>
<!-- 登录区域 -->
  <div id="login">
    <div class="login-box">
      <div class="login-img">
        <img src="../assets/logo.png" alt="">
      </div>
     <el-form ref="loginFormRef" class="form-box" :model="loginForm" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button @click="login">提交</el-button>
          <el-button @click="resetliginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        // 对用户名进行验证
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        // 对密码进行验证
        password: [
          { required: true, message: '密码错误', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetliginForm () {
      // 重置方法
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      // 登录方法
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        // 发送axios请求
        const { data: res } = await this.$http.post('login', this.loginForm)
        //  判断登录状态，给出提示
        if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
        this.$message.success(res.meta.msg)
        //  储存token，在本地
        window.sessionStorage.setItem('token', res.data.token)
        // 登录成功跳转到主页
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
#login {
  width: 100%;
   height: 100%;
  background-color: #2b4b6b;
}
.login-box {
  width: 450px;
  height: 300px;
  background-color: #ffffff;
  position: absolute;
    top:50%;
    left:50%;
 transform: translate(-50%, -50%);
}
.login-img {
   width: 130px;
   height: 130px;
   border-radius: 1px solid #ccc;
   border-radius: 50%;
   padding: 10px;
   box-shadow: 0 0 10px #ddd;
   background-color: #ffffff;
   position:absolute;
   left:50%;
   transform:translate(-50%,-50%)
  }
 img {
width: 100%;
height: 100%;
border-radius: 50%;
background-color: #cccccc;
}
/deep/ .form-box {
  margin-top: 80px;
  padding: 20px;
}
.btns {
    text-align:center;
  }
</style>
