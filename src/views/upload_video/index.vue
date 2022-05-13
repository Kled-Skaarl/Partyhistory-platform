<template>
  <div style="padding: 30px 8%">
    <el-card shadow="hover">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="类别">
          <el-select v-model="form.set" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="视频上传">
          <el-upload
            class="upload-demo"
            action="#"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">一次只能上传一个视频</div>
          </el-upload>
        </el-form-item>

        <el-form-item label="简介">
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="form.textarea"
            maxlength="25"
            ize="medium "
            show-word-limit
            :autosize="{ minRows: 8, maxRows: 8 }"
          >
          </el-input>
        </el-form-item>

        <el-form-item label="正文">
          <el-input
            type="textarea"
            size="medium "
            placeholder="请输入内容"
            v-model="form.textareas"
            :autosize="{ minRows: 8, maxRows: 8 }"
            show-word-limit
          >
          </el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      fileList: [],
      options: [
        {
          value: "科技",
          label: "科技",
        },
        {
          value: "文化",
          label: "文化",
        },
        {
          value: "改革",
          label: "改革",
        },
        {
          value: "工业",
          label: "工业",
        },
        {
          value: "扶贫",
          label: "扶贫",
        },
      ],
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
  },
};
</script>

<style>
/* .el-select {
  width: 100%;
} */
</style>
