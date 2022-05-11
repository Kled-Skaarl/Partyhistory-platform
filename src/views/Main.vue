<template>
  <el-container style="height: 100%">
    <el-header>
      <div class="bigtitile">
        <h2>党史学习平台后台管理系统</h2>
      </div>

      <!-- <p>{{usermessage.name}}</p> -->
    </el-header>
    <el-container>
      <el-aside style="width: auto">
        <common_aside></common_aside>
        <el-card class="message-card">
          <p>姓名：{{ usermessage.name }}</p>
          <p>学号：{{ usermessage.id }}</p>
          <el-button @click="signout">登出</el-button></el-card
        >
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import common_aside from "../components/common_aside.vue";

export default {
  name: "Main",
  components: {
    common_aside,
  },
  data() {
    return {
      usermessage: {},
    };
  },
  created() {
    this.$message({
      message: "登录成功！",
      type: "success",
    });
    console.log("this.$route.query.usermessage");
    this.usermessage = this.$route.query.usermessage;
    console.log(this.usermessage);
  },
  methods: {
    signout() {
      window.sessionStorage.removeItem('token');
      this.$store.commit("clearToken");
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>

<style scoped>
.el-header {
  background-color: brown;
  padding-top: 0%;
}
.el-main {
  padding-top: 0;
}
.bigtitile {
  text-align: center;
  color: aliceblue;
}
.message-card {
  width: 150px;
  background-color: brown;
  color: #fff;
  border: 0;
}
</style>
