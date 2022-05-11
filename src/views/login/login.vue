<template>
  <el-form
    v-model="form"
    ref="form"
    label-width="100px"
    class="login-container"
  >
    <h3 class="login-title">系统登录</h3>
    <el-form-item
      label="账号"
      label-width="80px"
      prop="username"
      class="username"
    >
      <el-input
        type="input"
        v-model="form.username"
        auto-complete="off"
        placeholder="请输入账号"
      ></el-input>
    </el-form-item>
    <el-form-item
      label="密码"
      label-width="80px"
      prop="password"
      class="password"
    >
      <el-input
        type="password"
        v-model="form.password"
        auto-complete="off"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    <el-form-item class="login-submit">
      <el-button type="primary" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      usermessage: {
        name: "",
        id: "",
      },
    };
  },
  methods: {
    login() {
      var ses=window.sessionStorage;
      var that = this;
      this.axios({
        method: "post",
        url: "http://party.neixiangde.ren/api/login",
        data: this.form,
      }).then(function (res) {
        console.log(res.data);
        that.usermessage.name = res.data.user_display_name;
        that.usermessage.id = res.data.user_nicename;
        console.log(that.usermessage);
        const token = res.data.token;
        ses.setItem('token',token);
        console.log(that.usermessage)
        that.$store.commit("setToken", token);
        that.$router.push({
          name: "upload_video",
          query: {
            usermessage: that.usermessage,
          },
        });
      });
    },
  },
};
</script>

<style scoped>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 35px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cacac6;
}
.login-title {
  margin: 0 auto 40px auto;
  text-align: center;
  color: #505458;
}
.login-submit {
  /* text-align: center; */
  padding-left: 10%;
  /* margin: auto auto 0px auto; */
}
</style>
