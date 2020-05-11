<template>
  <header class="editor-header">
    <router-link class="m-r-20 logo-wrapper"
                 :to="{name:'home'}">
      <img class="logo"
           src="../../assets/imgs/Mainlogo.jpg"
           alt="">
    </router-link>
    <div class="header-content">
      <span class="title">写文章</span>
    </div>
    <div class="functions">
      <el-dropdown class="publish m-r-25"
                   placement="bottom">
        <el-button type="primary"
                   plain
                   size="small"
                   @click="$emit('relaseArticles')">
          发布<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>测试内容</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="more m-r-25"
                   placement="bottom-end">
        <i class="el-icon-more-outline"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>草稿</el-dropdown-item>
          <el-dropdown-item>我的文章</el-dropdown-item>
          <el-dropdown-item>专栏 · 发现</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { get } from '../../axios/apis';
export default {
  data () {
    return {
      loginName: '',
      isLogin: false,
    }
  },
  mounted () {
    this.checkLogin();
  },
  methods: {
    async checkLogin () {
      await get('/api/users/checkLogin').then((res) => {
        if (res.status === 200) {
          this.loginName = res.data.loginName
          this.isLogin = true;
        } else {
          this.$router.push({ name: 'signup' });
          this.isLogin = false;
        }
      });
    },
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.editor-header {
  border-bottom: 5px solid rgb(249, 249, 249);
}
.logo-wrapper {
  float: left;
}
.title {
  /* height: 60px; */
  line-height: 60px;
}
.functions {
  float: right;
  margin-top: -45px;
}
.header-content {
  display: flex;
}
.title {
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
}
.m-r-25 {
  margin-right: 20px;
}
</style>