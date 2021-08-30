<template>
  <el-col class="content">
    <!-- 面包屑 -->
    <el-row class="breadCol">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/home' }">指挥中心</el-breadcrumb-item>
        <el-breadcrumb-item>消息推送</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row class="top">
      <el-col :span="6" class="top-left">
        <el-table :data="groupData" border style="width: 100%; height:100%">
          <el-table-column label="群组">
            <template slot="header" slot-scope="scope">
              <el-col :span="12" push="6"><span>群组</span></el-col>
              <el-col :span="12" push="5"><span>编辑</span></el-col>
            </template>
            <el-table-column prop="xu" width="60">
              <input type="checkbox" />
            </el-table-column>
            <el-table-column prop="name" label="群组名称"></el-table-column>
            <el-table-column label="操作">
              <span>查看</span>
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="18" class="top-right">
        <el-row>编辑消息</el-row>
        <el-row class="row edit">
          群组名称：
          <input />
        </el-row>
        <el-row class="row send-content">
          发送内容：
          <input />
        </el-row>
        <el-row class="row">
          <el-col :span="3">是否投屏：</el-col>
          <el-col :span="3">
            <input type="radio" />&nbsp&nbsp是
          </el-col>
          <el-col :span="3">
            <input type="radio" />&nbsp&nbsp否
          </el-col>
        </el-row>
        <el-row class="row">
          <el-col :span="3">是否定时：</el-col>
          <el-col :span="3">
            <input type="radio" />&nbsp&nbsp是
          </el-col>
          <el-col :span="3">
            <input type="radio" />&nbsp&nbsp否
          </el-col>
        </el-row>
        <el-row class="row edit">
          定时时间：
          <input />
        </el-row>
        <el-row class="row">提示：您输入的内容将会以语音的形式，发送给群组成员。</el-row>
        <el-row class="row">
          <el-col :span="6">&nbsp</el-col>
          <el-col :span="3" class="btn">发送</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="bottom">
      <el-row type="flex" justify="space-between" align="middle" class="bottom-top">
        <span class="title">消息记录：群组名称一</span>
        <span class="output">导出</span>
      </el-row>
      <el-row class="bottom-bottom">
        <el-table :data="groupData" border style="width: 100%; height:100%">
          <el-table-column prop="xu" width="60">
            <input type="checkbox" />
          </el-table-column>
          <el-table-column prop="name" width="80" label="序号"></el-table-column>
          <el-table-column prop="name" width="120" label="群组名称"></el-table-column>
          <el-table-column prop="name" width="400" label="发送内容"></el-table-column>
          <el-table-column prop="name" label="创建时间"></el-table-column>
          <el-table-column prop="name" label="定时时间"></el-table-column>
          <el-table-column prop="name" label="发送时间"></el-table-column>
          <el-table-column prop="name" label="状态"></el-table-column>
          <el-table-column prop="name" label="是否投屏"></el-table-column>
        </el-table>
      </el-row>
    </el-row>
  </el-col>
</template>
<script>
export default {
  name: "MessagePart",
  data() {
    return {
      groupData: [{ name: "名称一" }, { name: "名称二" }, { name: "名称三" }]
    };
  }
};
</script>
<style scoped>
.content {
  height: 100%;
  width: 100%;
  background-color: #fff;
}
.breadCol {
  height: 7%;
  width: 100%;
  padding-left: 9px;
  padding-top: 1.2%;
  background-color: #fff;
  border-bottom: 1px solid #dadada;
}
.el-breadcrumb {
  font-size: 80%;
}
.top {
  height: 56%;
  width: 100%;
  border-bottom: 1px solid #dadada;
}
.top-left {
  padding: 8px 5px 8px 5px;
  border-right: 1px solid #dadada;
  height: 100%;
}
.top-right {
  padding: 4px 25px 4px 25px;
  font-size: 70%;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(150, 150, 150, 1);
  line-height: 20px;
}

/* 表格 */
.el-table {
  font-size: 80%;
}
.el-table /deep/ th {
  padding: 0 !important;
}
.el-table /deep/ td {
  padding: 0 !important;
}
.el-table /deep/ th div {
  line-height: 200% !important;
  font-size: 90%;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(155, 155, 155, 1);
  text-align: center;
  background-color: #f5faf5;
}
.el-table /deep/ td div {
  line-height: 200% !important;
  font-size: 80%;
  font-family: MicrosoftYaHei;
  color: rgba(155, 155, 155, 1);
  text-align: center;
}
.radio {
}
.row {
  margin-top: 10px;
  width: 100%;
}
.edit input {
  line-height: 200%;
  width: 46%;
  font-size: 80%;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(150, 150, 150, 1);
}
.send-content input {
  line-height: 44px;
  width: 46%;
  font-size: 80%;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(150, 150, 150, 1);
}
.btn {
  line-height: 25px;
  background-color: #00bd6e;
  border-radius: 4px;
  color: white;
  text-align: center;
}
.bottom {
  line-height: 32px;
}
.bottom-top {
  padding-left: 11px;
  padding-right: 11px;
}
.bottom-bottom {
  width: 100%;
  height: 150px;
  line-height: 16px;
}
.title {
  font-size: 70%;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(150, 150, 150, 1);
}
.output {
  width: 57px;
  height: 22px;
  background-color: #00bd6e;
  color: white;
  border-radius: 4px;
  font-size: 60%;
  text-align: center;
  line-height: 22px;
}
</style>