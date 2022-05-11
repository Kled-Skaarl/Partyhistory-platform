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

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 150px;
  /* min-height: 400px; */
}
.el-menu {
  height: 600px;
  border: none;
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
