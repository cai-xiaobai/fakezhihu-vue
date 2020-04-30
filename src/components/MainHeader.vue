<template>
  <header class="main-header">
    <div class="header-content">
      <el-row :gutter="0">
        <el-col :span="4">
          <router-link class="m-r-20"
                       :to="{name:'home'}">
            <img class="logo"
                 src="../assets/imgs/Mainlogo.jpg"
                 alt="" />
          </router-link>
        </el-col>
        <el-col :span="6"
                :pull="1">
          <el-menu :default-active="activeIndex"
                   class="m-r-20"
                   mode="horizontal"
                   @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">发现</el-menu-item>
            <el-menu-item index="3">话题</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="8"
                :pull="2">
          <div class="search">
            <el-input size="small"
                      class="m-r-10"
                      placeholder="请输入内容"
                      v-model="keywords">
              <el-button slot="append"
                         icon="el-icon-search"></el-button>

            </el-input>
          </div>

        </el-col>
        <el-col :span="2"
                :pull="2">
          <el-button size='small'
                     class="problemBtn"
                     type='primary'>提问</el-button>
        </el-col>
        <el-col :span="4"
                :pull="1">
          <div class="userInfo"
               v-if="!isLogin">
            <router-link :to="{name:'signup'}">登录</router-link>
          </div>
          <div class="userInfo"
               v-if="isLogin">
            <i class="el-icon-bell m-r-40 icon-item"></i>
            <i class="el-icon-message m-r-40 icon-item"></i>
            <el-dropdown placement="bottom"
                         trigger="click"
                         class="hand-click">
              <span class="userAvatar">
                {{this.loginName}}
                <!-- <img class="avatar"
                     src="../assets/imgs/logo.png"
                     alt="" /> -->
                <el-avatar size="medium"
                           src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <div @click="goToPersonalPage">
                    <span class="el-icon-user"></span>
                    我的主页
                  </div>
                </el-dropdown-item>
                <el-dropdown-item divided>
                  <i class="el-icon-setting">设置</i>
                </el-dropdown-item>
                <el-dropdown-item divided>
                  <div @click="logout">
                    <span class="el-icon-switch-button"></span>
                    退出
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </div>
  </header>
</template>

<script>
import { get, post } from '../axios/apis';
export default {
  data () {
    return {
      activeIndex: '1',
      keywords: '',
      isLogin: false,
      loginName: '',
    };
  },
  methods: {
    handleSelect (key) {
      console.log(key);
    },
    goToPersonalPage () {
      console.log('跳转到用户首页');
    },
    async logout () {
      await post('/api/users/logot').then((res) => {
        if (res.status === 200) {
          this.$Message.success('注销成功');
          this.loginName = "";
          this.$router.push({ name: 'signup' });
        } else {
          this.$Message.error('注销失败，请稍后再试');
        }
      });
    },
    async checkLogin () {
      await get('/api/users/checkLogin').then((res) => {
        if (res.status === 200) {
          this.loginName = res.data.loginName
          this.isLogin = true;
          // console.log("abcc")
        } else {
          this.$router.push({ name: 'signup' });
          this.isLogin = false;
        }
      });
    }
  },
  mounted () {
    this.checkLogin();
  }
};
</script>

<style scoped>
.header-content {
  /* width: 1032px; */
  height: 52px;
  padding: 10px;
  border-bottom: 5px solid black;
  margin: 0 auto;
}
/* 整体的下划线进行隐藏 */
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
/* 导航栏的间距等样式 */
.el-menu-item {
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
}
.m-r-20 {
  height: 54px;
}
.search,
.problemBtn {
  margin-top: 15px;
  margin-left: -20px;
}
.userInfo {
  margin-left: 20px;
  margin-top: 6px;
}
.icon-item,
.userAvatar {
  margin: 0 15px;
}
</style>