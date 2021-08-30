<template>
  <div class="login">
    <el-image class="logo" :src="imgsrc"></el-image>
    <el-image class="pic" :src="picsrc"></el-image>
    <el-form class="card">
      <h2>{{ msg }}</h2>
      <el-input
        class="inpname bord"
        v-model="username"
        placeholder="请输入账户名称"
      ></el-input>
      <el-input
        class="mima bord"
        v-model="password"
        placeholder="请输入密码"
        show-password
      ></el-input>
      <el-input class="inpcode bord" v-model="code" placeholder="请输入验证码">
      </el-input>
      <el-link class="getcode" :underline="false">获取验证码</el-link>
      <el-button class="inplogin bord loginBtn" v-on:click="login"
        >登录</el-button
      >
      <el-link class="reg" :underline="false">注册</el-link>
      <el-link class="forget" :underline="false">忘记密码</el-link>
    </el-form>
    <el-image class="bg" :src="bg"></el-image>
  </div>
</template>
<script>
import { httpPost, httpGet } from "../utils/http";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      msg: "安全生产综合管控系统",
      imgsrc: require("../assets/login/logo.png"),
      picsrc: require("../assets/login/pic.png"),
      bg: require("../assets/login/bg.png"),
      username: "",
      password: "",
      code: "",
    };
  },
  computed: {
    ...mapGetters({
      name: "name",
    }),
  },
  created() {},
  methods: {
    login: function () {
      this.$router.push({ path: "/home/home" });
      // if(this.username==""){
      //   alert("请输入账号名称")
      // }else if(this.password == ""){
      //   alert("请输入密码")
      // }else{
      //   httpPost('/auth/login',{username:this.username,password:this.password}).then((res)=>{
      //     console.log(res)
      //     if(res.success){ //登录成功
      //       let token = res.token
      //       //to do 保存token
      //       localStorage.setItem("loginToken", token);
      //       axios.defaults.headers.common['Authorization'] = token;
      //       this.$router.push({path:'/home/home'})
      //     }else{ //登录失败
      //       // console.log(res)
      //       alert(res.msg)
      //     }

      //   })
      // }
    },
  },
  mounted: function () {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login {
  width: 100vw;
  height: 100vh;
  background: rgba(9, 129, 111, 1);
  position: relative;
}
.login .logo {
  width: 16.4%;
  height: 8%;
  position: absolute;
  left: 1.9%;
  top: 2%;
}
.login .pic {
  width: 40.4%;
  height: 47.9%;
  position: absolute;
  left: 9%;
  top: 21.7%;
}
.login .card {
  width: 35.8%;
  height: 70%;
  background: #fff;
  position: absolute;
  left: 59.6%;
  top: 15%;
  z-index: 5;
}
.login .card h2 {
  width: 80.5%;
  height: 6.3%;
  position: absolute;
  left: 9.6%;
  top: 10.4%;
  color: #09816f;
  font-size: 200%;
  text-align-last: justify;
  text-align: justify;
  text-justify: distribute-all-lines;
}
.login .card .bord {
  width: 79.6%;
  height: 10%;
  color: #999;
  font-size: 70%;
  font-family: "MicrosoftYaHeiLight";
  border-collapse: separate;
}
.el-input__inner {
  height: 100%;
}
.login .card .inpname {
  position: absolute;
  left: 10%;
  top: 23.5%;
}
.login .card .mima {
  position: absolute;
  left: 10%;
  top: 37.4%;
}
.login .card .inpcode {
  position: absolute;
  left: 10%;
  top: 51.4%;
}
.login .card .getcode {
  color: #169e8c;
  font-size: 70%;
  line-height: 30%;
  font-family: MicrosoftYaHeiLight;
  position: absolute;
  left: 68.9%;
  top: 55.2%;
}
.login .card .inplogin {
  position: absolute;
  left: 10%;
  top: 70.9%;
  background: #09816f;
  color: #fff;
  font-size: 80%;
  text-align: center;
  padding: 0;
}
.reg,
.forget {
  font-size: 80%;
  color: #999;
  font-family: "MicrosoftYaHeiLight";
}
.login .card .reg {
  position: absolute;
  left: 11%;
  top: 88.6%;
}
.login .card .forget {
  position: absolute;
  left: 75.74%;
  top: 88.6%;
}
.login .bg {
  width: 86.9%;
  height: 25.1%;
  position: absolute;
  left: 6.5%;
  top: 74.9%;
}
</style>