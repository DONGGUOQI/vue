<template>
 <el-container class="home">
   <!-- 头部区域 -->
  <el-header>
    <img src="../assets/heima.png" alt="">
    <el-button type="info" @click="logout">退出</el-button>
  </el-header>
     <!-- 侧边栏区域 -->
  <el-container>
    <el-aside :width="isCollapse ? '60px':'200px'">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="false"
      :collapse="isCollapse"
      :collapse-transition="false"
      router
      >
      <el-menu-item @click="toggle" style="text-align:center">| | |</el-menu-item>
        <!-- 侧边栏模板 -->
      <el-submenu :index="item.id+ ''" v-for="item in menus" :key="item.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.authName}}</span>
        </template>
        <el-menu-item-group  v-for="item in item.children" :key="item.id" @click="activ">
           <el-menu-item :index="'/'+item.path ">{{item.authName}}</el-menu-item>
        </el-menu-item-group>
     </el-submenu>

    </el-menu>
    </el-aside>
    <!-- 右边主体区域 -->
    <el-main>
       <!-- 占位符 -->
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>

</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      menus: [],
      isCollapse: false,
      activPath: ''
    }
  },
  created() {
    this.dataHome()
  },
  methods: {
    activ() {
      window.sessionStorage.setItem('activPath', this.$route.path)
    },
    // 退出方法
    logout () {
      // 清除本地的token
      window.sessionStorage.clear()

      this.$router.push('/login')
    },
    // 获取列表
    async dataHome () {
      const { data: res } = await this.$http.get('menus')
      this.menus = res.data
    },
    // 收起侧边栏
    toggle () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
 body, html, .home {
   height: 100%;
 }
.el-header {
  background-color: #373d51;
   display: flex;
justify-content: space-between;
align-items: center;
}
.el-aside {
  background-color: #333744;
}
</style>
