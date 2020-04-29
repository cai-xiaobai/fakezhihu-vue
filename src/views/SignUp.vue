<template>
  <div class="signup">
    <div class="signup-wrapper">
      <sign-up-core />
      <div class="downloadBtn">
        <el-button class="download"
                   type="primary">下载 Fake 知乎App </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpCore from '../components/Sign/SignUpCore.vue'
export default {
  components: {
    SignUpCore,
  },
  data () {
    return {

    };
  },
};
</script>

<style>
.signup {
  height: 100%;
  position: fixed;
  width: 100%;
  background-color: cornflowerblue;
  background-image: url("../assets/imgs/LoginPage.png");
}
.downloadBtn {
  margin-top: 20px;
}
.download {
  width: 400px;
}
</style>