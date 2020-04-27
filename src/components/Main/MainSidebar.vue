<template>
  <el-aside>
    <el-card class="draft no-padding">
      <icon-buttons :exists="['question','article','thinking']" />
    </el-card>
    <el-card>
      <div class="nav-link">
        <a href="#">
          <span class="text">
            <span class="el el-icon-fakezhihu-draft middle-icon"></span>
            我的草稿
          </span>
          <span class="num">2</span>
        </a>
      </div>
    </el-card>

    <el-card class="no-padding">
      <icon-buttons :exists="['live','book','desk','expert','consult']" />
    </el-card>

    <el-card class="no-padding">
      <div class="nav-link">
        <a href="#">
          <span class="text">
            <span class="el el-icon-fakezhihu-draft middle-icon"></span>
            我的收藏
          </span>
        </a>
      </div>
      <div class="nav-link">
        <a href="#">
          <span class="text">
            <span class="el el-icon-fakezhihu-draft middle-icon"></span>
            我关注的问题
          </span>
          <span class="num">32</span>
        </a>
      </div>
      <div class="nav-link">
        <a href="#">
          <span class="text">
            <span class="el el-icon-fakezhihu-draft middle-icon"></span>
            我的邀请
          </span>
          <span class="num">21</span>
        </a>
      </div>
      <div class="nav-link">
        <a href="#">
          <span class="text">
            <span class="el el-icon-fakezhihu-draft middle-icon"></span>
            站务中心
          </span>
        </a>
      </div>
      <div class="nav-link">
        <a href="#">
          <span class="text">
            <span class="el el-icon-fakezhihu-draft middle-icon"></span>
            帮助中心
          </span>
        </a>
      </div>
    </el-card>
    <sidebar-footer />
  </el-aside>
</template>

<script>
import IconButtons from '@/components/Main/IconButtons.vue';
import SidebarFooter from '@/components/Main/SidebarFooter.vue';
export default {
  components: {
    IconButtons,
    SidebarFooter
  },
  data () {
    return {

    };
  },
};
</script>

<style>
.draft {
  height: 101px;
}
.no-padding {
  margin-top: 20px;
}
</style>