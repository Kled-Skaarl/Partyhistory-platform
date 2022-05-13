<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <div class="collapse" @click="isColl">|||</div>
    <el-menu-item
      v-for="item in dividers"
      :index="item.path"
      :key="item.path"
      @click="clickMenu(item)"
    >
      <i class="el-icon-document"></i>
      <span slot="title">{{ item.text }}</span>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  /* min-height: 400px; */
}
.el-menu {
  height: calc(100vh - 60px);
  border: none;
}
.collapse {
  background-color: #ccc;
  text-align: center;
  color: #fff;
  padding: 8px 0;
  cursor: pointer;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      dividers: [
        {
          text: "上传视频",
          path: "/upload_video",
          name: "upload_video",
        },
        {
          text: "上传文档",
          path: "/upload_file",
          name: "upload_file",
        },
      ],
    };
  },
  methods: {
    isColl() {
      this.isCollapse = !this.isCollapse;
      this.$emit("isColl", this.isCollapse);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      console.log(item);
      this.$router.push({
        name: item.name,
      });
    },
  },
};
</script>
