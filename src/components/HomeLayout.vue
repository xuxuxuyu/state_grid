<template>
  <el-container class="content">
    <el-aside width="15%">
      <el-image class="menu-bg" :src="menuBg"></el-image>
      <el-row class="logo">
        <el-image :src="logo"></el-image>
      </el-row>
      <el-menu router="true" default-active="1-1" class="el-menu">
        <el-menu-item
          class="main-item"
          v-for="item in meunData"
          v-if="item.child.length == 0"
          :key="item.title"
          :index="item.path"
          :route="item.path"
          >{{ item.title }}</el-menu-item
        >
        <el-submenu
          class="sub"
          v-for="item in meunData"
          v-if="item.child.length > 0"
          :key="item.path"
          :index="item.title"
        >
          <template class="submenu-title" slot="title">{{
            item.title
          }}</template>
          <el-menu-item
            class="el-menu-item"
            v-for="childItem in item.child"
            v-if="childItem.child.length == 0"
            :key="childItem.title"
            :index="childItem.path"
            :route="childItem.path"
            >{{ childItem.title }}</el-menu-item
          >
          <!-- 三级菜单 -->
          <el-submenu
            class="sub-sub"
            v-for="(childItem, index) in item.child"
            v-if="childItem.child.length > 0"
            :key="index"
          >
            <template class="submenu-title sub-sub-menuTitle" slot="title">{{
              childItem.title
            }}</template>
            <el-menu-item
              class="el-menu-item sub-sub-item"
              v-for="child in childItem.child"
              :key="child.title"
              :index="child.path"
              :route="child.path"
              >{{ child.title }}</el-menu-item
            >
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container class="right">
      <el-header>
        <el-row
          class="header-row"
          type="flex"
          align="middle"
          justify="space-between"
        >
          <el-col class="header-col" :span="14"
            ><span class="title">安全生产综合管控系统</span></el-col
          >
          <el-col class="header-col" :span="10">
            <el-row type="flex" align="middle" justify="space-around">
              <span class="company">单位：国家电网长春电力有限公司</span>
              <el-badge is-dot class="item">
                <i class="el-icon-bell"></i>
              </el-badge>
              <el-image class="head" :src="head"></el-image>
              <!-- trigger="hover" -->
              <el-popover
                popper-class="popper"
                class="name"
                placement="top"
                width="70"
              >
                <el-row>修改密码</el-row>
                <el-row @click.native="back">退出</el-row>
                <span slot="reference">张一鸣</span>
              </el-popover>
            </el-row>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";
import LeftMenu from "./LeftMenu";

export default {
  name: "HomeLayout",
  components: {
    LeftMenu,
  },
  data() {
    return {
      head: require("../assets/home/head.png"),
      menuBg: require("../assets/left/leftMenuBg.png"),
      meunData: require("../assets/left/meun.json"),
      logo: require("../assets/home/logo.png"),
    };
  },

  methods: {
    back: function () {
      localStorage.removeItem("loginToken");
      this.$router.push({ path: "/login" });
    },
    getMenu() {
      console.log("菜单");
      httpGet("/menu/list")
        .then((res) => {
          if (res.success) {
            console.log(res);
            this.meunData = res.MenuList;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getMenu();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  height: 100vh;
}
.right {
  height: 100vh;
}
.el-header {
  background: url("../assets/header_bg.png") no-repeat;

  height: 7.5% !important;

  position: relative;
}
.main {
  height: 92.6%;
}
.title {
  width: 279px;
  height: 28px;
  font-size: 28px;
  font-family: SourceHanSansCN;
  font-weight: 800;
  color: rgba(255, 255, 255, 1);
}
.company {
  font-size: 18px;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.menu-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0%;
}

.el-aside {
  height: 100%;
  position: relative;
}

.el-main {
  background-color: #f3f8f6;
  padding: 0px;
}
.header-row {
  height: 100%;
}
.header-col {
}
.item {
}
.el-icon-bell {
  color: #fff;
  font-size: 24px;
}
.head {
  width: 30px;
  height: 30px;
}
.name {
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
}
.el-popover .el-row {
  text-align: center;
  font-size: 9px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(112, 112, 112, 1);
  line-height: 27px;
  cursor: pointer;
}

.logo {
  height: 7.5%;
  width: 100%;
  background-color: #0c915b;
  position: relative;
}
.logo .el-image {
  height: 62.5%;
  width: 60.7%;
  position: absolute;
  left: 18.75%;
  top: 18.75%;
}
.el-menu {
  /* height: 100%; */
}
.el-menu /deep/ .el-submenu__title {
  height: 5vh;
  line-height: 5vh;
  font-size: 90%;
  padding: 0% !important;
  background-color: #00bd6e;
  color: white;
  font-family: SourceHanSansCN;
  font-weight: 500;
  text-align: center;
  width: 100%;
}
.el-menu /deep/ .el-submenu__icon-arrow {
  color: white;
  font-size: 90%;
  font-weight: 500;
  top: 37%;
  right: 10px;
}
.sub /deep/ .el-menu-item {
  height: 5vh;
  line-height: 5vh;
  font-size: 18px;
  /* padding: 0px !important; */
  background-color: #0c915b;
  color: white;
  padding: 0% !important;
  font-family: SourceHanSansCN;
  font-weight: 500;
  text-align: center;
  width: 100%;
  min-width: 0px;
}
/* 二级菜单 菜单背景 */
.sub-sub /deep/ .el-submenu__title {
  background-color: #0c915b;
}
/* 三级菜单  标题 */
.el-menu /deep/ .sub-sub-item {
  color: white;
  padding-left: 20px !important;
}
.main-item {
  height: 5vh;
  line-height: 5vh;
  font-size: 18px;
  padding: 0px !important;
  background-color: #00bd6e;
  color: white;
  font-family: SourceHanSansCN;
  font-weight: 500;
  text-align: center;
  width: 100%;
}
.el-menu /deep/ .is-active {
  background-color: #006b3c !important;
}
</style>

</style>

