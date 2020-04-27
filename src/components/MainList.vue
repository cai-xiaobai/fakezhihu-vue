<template>
  <div class="main-content">
    <el-container class="container">
      <div class="list">
        <main-list-wrapper />
      </div>
      <div class="sidebar">
        <main-sidebar />
      </div>
    </el-container>
  </div>
</template>

<script>
import MainListWrapper from '@/components/Main/MainListWrapper.vue';
import MainSidebar from '@/components/Main/MainSidebar.vue'
export default {
  name: 'MainList',
  components: {
    MainListWrapper,
    MainSidebar,
  },
};
</script>

<style>
.container {
  justify-content: center;
}
</style>