## 日志

------



- 登录接口请求

```js
this.axios({
        method: "post",
        url: "http://party.neixiangde.ren/api/login",
        data: this.form,
      }).then(function (res) {})
```

登录功能已实现，校园网账号登录

- `src/views/upload_video/index.vue`为上传视频页
- `src/views/upload_file/index.vue`为上传文档页
