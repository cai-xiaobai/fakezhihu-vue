<template>
  <div>
    <el-card class="signup-content">
      <img src="@/assets/imgs/Loginlogo.png"
           alt="" />
      <p class="slogen">FakeZHihu Project </p>
      <div class="register"
           v-show="nowStatus === 'register' ">
        <el-form :model="registerForm"
                 :rules="registerRules"
                 ref="registerForm"
                 label-width="0px">
          <el-form-item prop='name'
                        class="no-label">
            <el-input placeholder="请输入用户名"
                      v-model="registerForm.name" />
          </el-form-item>
          <el-form-item prop='email'
                        class="no-label">
            <el-input placeholder="请输入邮箱"
                      v-model="registerForm.email" />
          </el-form-item>
          <el-form-item prop='password'
                        class="no-label">
            <el-input type="password"
                      placeholder="请输入密码"
                      v-model="registerForm.password" />
          </el-form-item>
          <el-form-item prop='password'
                        class="no-label">
            <el-input type="password"
                      placeholder="请再次输入密码"
                      v-model="registerForm.passwordEnsure" />
          </el-form-item>
          <el-form-item prop='submit'>
            <el-button class="submit-btn registerBtn"
                       type="primary"
                       @click="submitForm('registerForm')">注册</el-button>
          </el-form-item>
        </el-form>
        <div class="footer register-footer">
          <span>
            注册即代表同意
            <a href="#">《Fake 协议》</a>
            <a href="#">《隐私保护指引》</a>
          </span>
          <a href="#">注册机构号</a>
        </div>
      </div>

      <div class="login"
           v-show="nowStatus === 'login'">
        <el-form :model="loginForm"
                 :rules="loginRules"
                 ref="loginForm"
                 label-width="0px">
          <el-form-item prop='username'
                        class="no-label">
            <el-input placeholder="手机号或邮箱"
                      v-model="loginForm.username" />
          </el-form-item>
          <el-form-item prop='password'
                        class="no-label">
            <el-input type="password"
                      placeholder="请输入密码"
                      v-model="loginForm.password" />
          </el-form-item>
          <div class="others">
            <span>
              手机验证码登录
            </span>
            <span>
              忘记密码？
            </span>
          </div>
          <el-form-item prop="submit">
            <el-button class="submit-btn"
                       type="primary"
                       @click="submitForm('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>
        <div class="footer login-footer">
          <span>
            <a href="#">二维码登录 · </a>
            <a href="#">海外手机登录 · </a>
            <a href="#">社交账号登录</a>
          </span>
        </div>
      </div>

    </el-card>
    <div class="switcher">
      {{tips[nowStatus].base}}
      <span @click="nowStatus = nowStatus === 'register' ? 'login' :'register'">
        {{tips[nowStatus].link}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const validatePass = (rule, value, callback) => { //注册初次密码验证
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (!this.pwdReg.test(value)) {
        callback(new Error('用户密码需由数字/大写字母/小写字母/标点符号组成，8位以上'));
      } else {
        if (this.registerForm.passwordEnsure !== '') {
          this.$ref.registerForm.validateField('passwordEnsure');
        }
        callback();
      }
    };
    const validatePassEnsure = (rule, value, callback) => {  //注册第二次密码验证
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      nowStatus: 'login',  //当前展示表单
      tips: {
        register: {
          base: '已有账号?',
          link: '登录',
        },
        login: {
          base: '没有账号?',
          link: '注册',
        },
      },
      registerForm: { //注册表单数据
        email: '',
        password: '',
        passwordEnsure: '',
      },
      registerRules: { //注册表单规则
        email: [     //email规则
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
        ],
        password: [  //初次密码规则
          { required: true, message: '请输入密码', trigger: 'blur' },
          { vaildator: validatePass, trigger: ['blur'] },
        ],
        passwordEnsure: [  //二次密码规则
          { required: true, message: '请输入密码', trigger: 'blur' },
          { vaildator: validatePassEnsure, trigger: ['blur'] },
        ],
      },
      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名或邮箱', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.nowStatus === 'register') {
            console.log('触发注册方法');
          } else {
            console.log('触发登录方法');
          }
        } else {
          this.$Message.error('error submit!!!')
          return false;
        }
        return '';
      });
    },
  },
};
</script>


<style>
.signup-content {
  margin: 0 auto;
  width: 400px;
  display: flex;
  justify-content: center;
}
.submit-btn {
  width: 320px;
}
.no-label {
  width: 320px;
  height: 55px;
  margin-top: -10px;
}
.others,
.register-footer {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.registerBtn {
  margin-top: -15px;
}
.footer {
  font-size: 10px;
}
.footer span a {
  color: rgb(165, 164, 164);
}
.switcher {
  margin: 0 auto;
  margin-top: -2px;
  width: 400px;
  height: 40px;
  line-height: 40px;
  background-color: #f6f6f6;
}
</style>