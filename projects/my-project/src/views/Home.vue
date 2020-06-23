<template>
  <div class="home">
  <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    // 退出方法
    logout () {
      // 清除本地的token
      window.sessionStorage.clear()

      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
