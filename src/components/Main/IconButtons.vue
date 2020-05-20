<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="8">
        <div class="icon-item normal-btn"
             v-if="exists.indexOf('question') >= 0">
          <i class="el-icon-tickets big-icon"></i>
          <p>写回答</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="icon-item normal-btn"
             v-if="exists.indexOf('article') >= 0">
          <router-link :to="{name:'editor',params:{articleId:0}}">
            <i class="el-icon-edit-outline big-icon"></i>
            <p>写文章</p>
          </router-link>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="icon-item normal-btn"
             v-if="exists.indexOf('thinking') >= 0">
          <i class="el-icon-tickets big-icon"></i>
          <p>写想法</p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="icon-item normal-btn"
             v-if="exists.indexOf('live') >= 0">
          <i class="el-icon-tickets big-icon"></i>
          <p>Live</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="icon-item normal-btn"
             v-if="exists.indexOf('book') >= 0">
          <i class="el-icon-tickets big-icon"></i>
          <p>书店</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="icon-item normal-btn"
             v-if="exists.indexOf('desk') >= 0">
          <i class="el-icon-tickets big-icon"></i>
          <p>圆桌</p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="icon-item normal-btn"
             v-if="exists.indexOf('expert') >= 0">
          <i class="el-icon-tickets big-icon"></i>
          <p>专栏</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="icon-item normal-btn"
             v-if="exists.indexOf('consult') >= 0">
          <i class="el-icon-tickets big-icon"></i>
          <p>付费咨询</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="icon-item normal-btn"
             v-if="exists.indexOf('consult') >= 0">
          <i class="el-icon-tickets big-icon"></i>
          <p>百科</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ['exists'],
};
</script>