<template>
  <div>
    <el-container>
      <!-- 头部 -->
      <el-header>
        <div class="hfx_tit">UNI-ADMIN</div>
        <!-- 头部导航菜单 -->
        <div class="hfx_nav">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item :index="index" v-for="(item,index) in navs" :key="index">{{item.name}}</el-menu-item>
            <el-submenu index="2">
              <template slot="title">admin</template>
              <el-menu-item @click="logout" index="2-1">退出登录</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-header>
      <!-- 主体区域 -->
      <el-container>
        <!-- 左侧导航菜单 -->
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-menu-item
              :index="item.path"
              v-for="(item,index) in navs[activeIndex].children"
              :key="index"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 内容主体区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import nav from "../../store/nav";
export default {
  data() {
    return {
      activeIndex: "0",
      navs: nav
    };
  },
  computed: {},
  created() {
    console.log(this.navs);
  },
  mounted() {},
  watch: {},
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
    },
    // 退出登录触发事件
    logout() {
      this.$confirm("此操作将退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 请求退出登录接口
          this.$axios.post("/api/admin/logout").then(res => {
            console.log(res);
            // 判断状态
            if (res.status == 200) {
              this.$message.success("退出登录成功");
              localStorage.removeItem("token");
              this.$router.push("/login");
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  },
  components: {}
};
</script>

<style scoped>
.el-header {
  background-color: #545c64;
  color: #333;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
}
.el-menu {
  border: none;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 500px;
}

body > .el-container {
  margin-bottom: 40px;
}
.hfx_tit {
  color: #fff;
  font-size: 26px;
}
</style>
