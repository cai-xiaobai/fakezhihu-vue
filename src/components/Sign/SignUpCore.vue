<template>
  <div>
    <el-card class="signup-content">
      <img src="@/assets/imgs/Loginlogo.png"
           alt="" />
      <p class="slogen">FakeZHihu Project </p>
      <div class="register"
           v-show="nowStatus === 'register' ">
        <el-form :model="registerForm"
                 status-icon
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
          <el-form-item prop="pass"
                        class="no-label">
            <el-input type="password"
                      v-model="registerForm.pass"
                      placeholder="请输入密码"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass"
                        class="no-label">
            <el-input type="password"
                      placeholder="请再次输入密码"
                      v-model="registerForm.checkPass"
                      @keyup.enter.native="submitForm('registerForm')"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop='submit'>
            <el-button class="submit-btn registerBtn"
                       type="primary"
                       @keyup.enter.native="submitForm('registerForm')"
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
                      @keyup.enter.native="submitForm('loginForm')"
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
                       @keyup.enter.native="submitForm('loginForm')"
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
import { post } from '../../axios/apis';
import md5 from 'md5';

export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.registerForm.checkPass !== '') {
          this.$refs.registerForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.pass) {
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
        name: '',
        email: '',
        pass: '',
        checkPass: '',
      },
      registerRules: { //注册表单规则
        name: [     //email规则
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        email: [     //email规则
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
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
    async register () {
      await post('/api/users/create', {
        loginName: this.registerForm.name,
        pwd: md5(this.registerForm.pass),
        email: this.registerForm.email,
      })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            this.$Message.success('注册成功');
            this.$router.push({ name: 'home' });
          } else {
            this.$Message.error(response.data.msg);
          }
        });
    },
    async login () {
      await post('/api/users/login', {
        loginName: this.loginForm.username,
        pwd: md5(this.loginForm.password),
      }).then((res) => {
        if (res.status === 200) {
          this.$Message.success('登录成功');
          this.$router.push({ name: 'home' });
        } else {
          this.$Message.error(res.data.msg);
        }
      });
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.nowStatus === 'register') {
            this.register();
          } else {
            this.login();
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
  margin-top: 10px;
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