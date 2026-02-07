<template>
  <div class="user-login-form-container">
    <div class="user-login-form">
      <div class="user-login-form-title">
        密码登录--UserLogin
      </div>
      <div class="user-login-form-item">
        <div class="user-login-form-item-title">
          账号
        </div>
        <input placeholder="请输入账号" type="text" v-model="account">
      </div>
      <div class="user-login-form-item">
        <div class="user-login-form-item-title">
          密码
        </div>
        <input placeholder="请输入密码" type="password" v-model="password">
        <div class="forgetPwd">忘记密码?</div>
      </div>
      <div class="usere-login-form-footer">
<!--        <button @click="register(account,password)" class="user-login-form-footer-btn">
          注册
        </button>
        <button @click="login(account,password)" class="user-login-form-footer-btn">
          登录
        </button>-->
        <el-button type="primary" class="user-login-form-footer-btn">注册</el-button>
        <el-button type="primary" class="user-login-form-footer-btn">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  props: {
    msg: String
  },
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    register(account, password) {
      console.log("account", account);
      console.log("password", password);
      this.account++;
    },
    login() {
      if (this.isUserLoggedIn) {
        console.log('用户已经登录');
      } else {
        console.log('用户尚未登录');
      }
      this.$destroy();
    }
  },
  beforeCreate() {
    console.log('创建前');
  },
  created() {
    console.log('创建 ');
  },
  beforeMount() {
    console.log('挂载前');
  },
  mounted() {
    console.log('挂载')
  },
  beforeUpdate() {
    console.log('更新前：'+this.account)
  },
  updated() {
    console.log('更新后：'+this.account)
  },
  beforeDestroy() {
    console.log('销毁前')
  },
  destroyed() {
    console.log('销毁')
  },
  computed: {
    isUserLoggedIn() {
      return localStorage.getItem('token');
    }
  }
}
</script>

<!-- scoped的意思是这个样式只对当前这个组件有用 -->
<style scoped lang="less">
.user-login-form-container {
  margin-top: 10%;
  margin-left: 20%;
  margin-right: 20%;
  background-color: #f3f3f3;
  display: flex;
  /*垂直居中*/
  align-items: center;
  /*水平居中*/
  justify-content: center;
  border-radius: 10px;

  .user-login-form {
    padding: 40px;
    display: flex;
    flex-direction: column;

    .user-login-form-title {
      font-size: 24px;
      text-align: center;
      margin-bottom: 40px;
      font-weight: bold;
    }

    .user-login-form-item {
      display: flex;
      font-size: 20px;
      margin-bottom: 20px;
      align-items: center;
      border: darkgray solid 1px;
      background-color: white;
      border-radius: 5px;
      padding: 6px;

      .user-login-form-item-title {
        margin-right: 10px;
        margin-bottom: 5px;
      }

      input {
        font-size: 18px;
        margin-right: 10px;
        border: none;
      }

      .forgetPwd {
        font-size: 16px;
        color: #4c7bb6;
        font-weight: bold;
        cursor: pointer;
      }
    }

    .usere-login-form-footer {
      display: flex;
      justify-content: space-between;
      .user-login-form-footer-btn{
        width: 100%;
      }
    }
  }
}

</style>
