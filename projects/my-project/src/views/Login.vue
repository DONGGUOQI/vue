<template>
  <div id="login">
    <div class="login-box">
      登录模块
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
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
  position: sticky;
    top:50%;
    left:50%;
 transform: translate(-50%, -50%);
}
</style>
