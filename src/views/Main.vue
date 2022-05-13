<template>
  <el-container style="height: 100%">
    <el-header>
      <div class="bigtitile">
        <h2>党史学习平台后台管理系统</h2>
      </div>

      <!-- <p>{{usermessage.name}}</p> -->
    </el-header>
    <el-container>
      <el-aside style="width: 200px; height: 100%; background-color: #e0e0e0">
        <common_aside @isColl="isColl"></common_aside>
        <el-card class="message-card" v-show="!isCollapse">
          <p>姓名：{{ usermessage.name }}</p>
          <p>学号：{{ usermessage.id }}</p>
          <el-button @click="signout" style="margin-top: 8px"
            >登出</el-button
          ></el-card
        >
      </el-aside>
      <el-main style="background-color: #e0e0e0">
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
      isCollapse: false,
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
    isColl(val) {
      this.isCollapse = val;
    },
    signout() {
      window.sessionStorage.removeItem("token");
      this.$store.commit("clearToken");
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>

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

  padding: 10px;
  color: aliceblue;
}
.message-card {
  width: 200px;
  background-color: brown;
  color: #fff;
  border: 0;
  height: 150px;
  border-radius: 0 !important;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
}
p {
  padding: 5px 0 !important;
}
</style>
