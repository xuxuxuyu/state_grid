<template>
  <el-col class="content">
    <!-- 面包屑 -->
    <el-row class="breadCol">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/home' }">指挥中心</el-breadcrumb-item>
        <el-breadcrumb-item>SOS求救</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row class="top">
      <el-row class="top-top">
        <el-col class="title" :span="2">当前SOS</el-col>
        <el-col :span="18">&nbsp</el-col>
        <el-col :span="4">
          <span class="btn">报警配置项</span>
        </el-col>
      </el-row>
      <el-row class="chart-row">
        <el-col :span="24">
          <el-table :data="nowData" border style="width: 100%; height:100%">
            <el-table-column prop="xu" label="序号" width="100"></el-table-column>
            <el-table-column prop="bian" label="人员编号" width="160"></el-table-column>
            <el-table-column prop="name" label="人员名称" width="160"></el-table-column>
            <el-table-column prop="part" label="所属部门" width="160"></el-table-column>
            <el-table-column prop="site" label="工作站点" width="160"></el-table-column>
            <el-table-column prop="time" label="求救时间" width="230"></el-table-column>
            <el-table-column prop="state" label="操作" width="250">
              <el-row class="button-group">
                <el-col :span="12">
                  <span>发起对讲</span>
                </el-col>
                <el-col :span="12">
                  <span>解除求救</span>
                </el-col>
              </el-row>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="bottom">
      <el-row class="bottom-top">
        <el-col class="title" :span="2">SOS记录</el-col>
        <el-col :span="22">&nbsp</el-col>
      </el-row>
      <el-row class="chart-row">
        <el-col :span="24">
          <el-table :data="nowData" border style="width: 100%; height:100%">
            <el-table-column prop="xu" label="序号" width="100"></el-table-column>
            <el-table-column prop="bian" label="人员编号" width="160"></el-table-column>
            <el-table-column prop="name" label="人员名称" width="160"></el-table-column>
            <el-table-column prop="part" label="所属部门" width="160"></el-table-column>
            <el-table-column prop="site" label="工作站点" width="160"></el-table-column>
            <el-table-column prop="time" label="求救时间" width="230"></el-table-column>
            <el-table-column prop="state" label="操作" width="250">
              <el-row class="button-group">
                <el-col :span="24">
                  <span>已解决</span>
                </el-col>
              </el-row>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-row>
  </el-col>
</template>

<script>
export default {
  name: "SOSPart",
  data() {
    return {
      nowData: [
        {
          xu: "1",
          bian: "6233",
          name: "张三",
          part: "部门名称",
          site: "长春净月",
          time: "2019-09-19 12:23"
        },
        {
          xu: "1",
          bian: "6233",
          name: "张三",
          part: "部门名称",
          site: "长春净月",
          time: "2019-09-19 12:23"
        },
        {
          xu: "1",
          bian: "6233",
          name: "张三",
          part: "部门名称",
          site: "长春净月",
          time: "2019-09-19 12:23"
        },
        {
          xu: "1",
          bian: "6233",
          name: "张三",
          part: "部门名称",
          site: "长春净月",
          time: "2019-09-19 12:23"
        }
      ]
    };
  },
  methods:{

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
  height: 48%;
}
.top-top {
  width: 100%;
}
.top-top .el-col {
  font-size: 60%;
  text-align: center;
  line-height: 300%;
}
.chart-row {
  padding-left: 1%;
}
/* 表格相关 */
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
  font-size: 90%;
  font-family: MicrosoftYaHei;
  color: rgba(155, 155, 155, 1);
  text-align: center;
}
.button-group .el-col button {
  font-size: 80%;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(155, 155, 155, 1);
  border: 0px solid white;
}
.bottom {
  height: 44%;
}
.bottom-top {
  width: 100%;
  font-size: 80%;
  text-align: center;
  line-height: 25px;
  border-top: 1px solid #dadada;
}
.title {
  color: #9b9b9b;
  font-size: 80%;
}
.btn {
  display: block;
  background-color: #00bd6e;
  border-radius: 2px;
  color: white;
  width: 40%;
  height: 25px;
  border: 0px;
  line-height: 25px;
  margin-top: 4px;
}
.bottom-bottom {
  padding-left: 5px;
  padding-right: 5px;
}
</style>