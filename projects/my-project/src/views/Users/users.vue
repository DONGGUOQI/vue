<template>
  <div id="users">
    <!-- 面包屑 -->
<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  <el-breadcrumb-item>用户列表</el-breadcrumb-item>
</el-breadcrumb>
  <!-- 搜索导航 -->
    <!-- card卡片 -->
  <el-card style="margin-top: 15px;">
    <!-- 栅格 -->
    <el-row :gutter="20">
  <el-col :xl="8"><div>
  <el-input placeholder="请输入内容">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div></el-col>
  <el-col :xl="8">
   <el-button type="primary">主要按钮</el-button>
  </el-col>
  </el-row>

 <el-table
    :data="userslist"
    border
    style="width: 100%">
    <el-table-column
      prop="username"
      label="姓名"
      >
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
     >
    </el-table-column>
    <el-table-column
      prop="mobile"
      label="电话"
      >
      </el-table-column>
      <el-table-column
      prop="role_name"
      label="角色"
      >
      </el-table-column>
      <el-table-column
      prop="mg_state"
      label="状态"
      >
    </el-table-column>
    <el-table-column
      prop="type"
      label="操作">
    </el-table-column>
  </el-table>
</el-card>

  </div>
</template>

<script>
export default {
  name: 'users',
  components: {},
  data() {
    return {
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 9
      },
      addForm: {
        username: '',
        email: '',
        mobile: '',
        role_name: '',
        mg_state: true,
        type: ''
      },
      userslist: [],
      total: 0
    }
  },
  created() {
    this.getuser()
  },
  methods: {
    async getuser () {
      const { data: res } = await this.$http.get('/users', { params: this.queryInfo })
      // console.log(res)
      this.userslist = res.data.users
      this.total = res.data.total
    }
  },
  computed: {},
  watch: {}
}
</script>

<style lang="less" scoped>

</style>
