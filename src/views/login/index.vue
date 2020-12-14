<template>
  <div class="hfx_box">
    <div class="hfx_login">
      <p class="hfx_title">UNI-ADMIN</p>
      <hr />
      <el-form
        style="margin-top:30px"
        :model="hfx_loginForm"
        :rules="hfx_rolueForm"
        ref="hfx_loginForm"
        label-width="25px"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input style="width:400px" v-model="hfx_loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input style="width:400px" v-model="hfx_loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="login('hfx_loginForm')" style="width:400px">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hfx_loginForm: {
        username: "",
        password: ""
      },
      hfx_rolueForm: {
        username: [
          { required: true, message: "请输入用户名", targger: "blur" }
        ],
        password: [{ required: true, message: "请输入用户名", targger: "blur" }]
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    // 点击登录触发事件
    login(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // 使用axios请求接口
          this.$axios.post("/api/admin/login", this.hfx_loginForm).then(res => {
            console.log(res);
            if (res.status == 200) {
              this.$message.success("登录成功");
              // 保存token值到本地存储
              localStorage.setItem("token", res.data.data.token);
              // 跳转页面到home页面
              this.$router.push("/hhome");
            }            
          }).catch(err=>{
            console.log(err)
            this.$message.error('登陆失败')
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.hfx_box {
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hfx_login {
  width: 450px;
  height: 300px;
  // background: #000;
  border: 1px solid #999;
  border-radius: 5px;
}
.hfx_title {
  width: 100%;
  font-size: 28px;
  color: #666;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
}
</style>