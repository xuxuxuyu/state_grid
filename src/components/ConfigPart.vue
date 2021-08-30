<template>
  <el-col class="content">
    <!-- 面包屑 -->
    <el-row class="breadCol">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/home' }">指挥中心</el-breadcrumb-item>
        <el-breadcrumb-item>围栏配置</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row class="func" type="flex" align="moddle" justify="start">
      <el-input class="input" placeholder="围栏名称"></el-input>
      <el-row>
        <span class="add">新增围栏</span>
      </el-row>
    </el-row>
    <el-row class="bottom" type="flex" justify="start">
      <el-row class="charts" type="flex" justify="start">
        <el-table :data="tableData" border style="width: 100%; height:100%">
          <el-table-column prop="num" label="序号" width="70"></el-table-column>
          <el-table-column prop="lanNum" label="围栏编号" width="100"></el-table-column>
          <el-table-column prop="limit" label="围栏范围" width="130"></el-table-column>
          <el-table-column prop="site" label="所属站点" width="120"></el-table-column>
          <el-table-column label="围栏内人员" width="120">
            <el-row class="button-group">
              <el-col :span="24">
                <button @click="showPeople" class="green-btn">查看</button>
              </el-col>
            </el-row>
          </el-table-column>
          <el-table-column prop="type" label="围栏类型" width="100"></el-table-column>
          <el-table-column prop="state" label="围栏状态" width="100"></el-table-column>
          <el-table-column prop="message" label="推送消息" width="100"></el-table-column>
          <el-table-column prop="remark" label="备注" width="120"></el-table-column>
          <el-table-column label="操作" width="210">
            <el-row class="button-group">
              <el-col :span="6">
                <button>启用</button>
              </el-col>
              <el-col :span="6">
                <button>禁用</button>
              </el-col>
              <el-col :span="6">
                <button>编辑</button>
              </el-col>
              <el-col :span="6">
                <button>删除</button>
              </el-col>
            </el-row>
          </el-table-column>
        </el-table>
      </el-row>
    </el-row>
    <el-dialog title="人员信息" class="dialog" :visible.sync="dialogVisible" width="51%" :before-close="handleClose">
       <el-row class="func" type="flex" align="moddle" justify="center">
         <el-table :data="peopleData" border style="width: 100%; height:100%">
          <el-table-column prop="xu" label="序号" width="90"></el-table-column>
          <el-table-column prop="bian" label="人员编号" width="130"></el-table-column>
          <el-table-column prop="name" label="人员名称" width="130"></el-table-column>
          <el-table-column prop="zhi" label="职位" width="130"></el-table-column>
          <el-table-column prop="remark" label="人员备注" width="130"></el-table-column>
          <el-table-column prop="state" label="考勤状态" width="130"></el-table-column>
        </el-table>
       </el-row>
    </el-dialog>
  </el-col>
</template>
<script>
export default {
  name: "ConfigPart",
  data() {
    return {
      dialogVisible: false,
      peopleData: [
        {
          xu: "1",
          bian: "1698",
          name: "张三",
          zhi: "主管",
          remark: "备注",
          state: "组长"
        },
        {
          xu: "1",
          bian: "1698",
          name: "张三",
          zhi: "主管",
          remark: "备注",
          state: "组长"
        },{
          xu: "1",
          bian: "1698",
          name: "张三",
          zhi: "主管",
          remark: "备注",
          state: "组长"
        },{
          xu: "1",
          bian: "1698",
          name: "张三",
          zhi: "主管",
          remark: "备注",
          state: "组长"
        },{
          xu: "1",
          bian: "1698",
          name: "张三",
          zhi: "主管",
          remark: "备注",
          state: "组长"
        },{
          xu: "1",
          bian: "1698",
          name: "张三",
          zhi: "主管",
          remark: "备注",
          state: "组长"
        },{
          xu: "1",
          bian: "1698",
          name: "张三",
          zhi: "主管",
          remark: "备注",
          state: "组长"
        },{
          xu: "1",
          bian: "1698",
          name: "张三",
          zhi: "主管",
          remark: "备注",
          state: "组长"
        }
      ],
      tableData: [
        {
          num: "1",
          lanNum: "1698",
          name: "围栏一",
          limit: "12360,12873",
          site: "长春经开站",
          type: "外围栏",
          state: "启用",
          message: "触发围栏",
          remark: "内围栏危险"
        },
        {
          num: "1",
          lanNum: "1698",
          name: "围栏一",
          limit: "12360,12873",
          site: "长春经开站",
          type: "外围栏",
          state: "启用",
          message: "触发围栏",
          remark: "内围栏危险"
        },
        {
          num: "1",
          lanNum: "1698",
          name: "围栏一",
          limit: "12360,12873",
          site: "长春经开站",
          type: "外围栏",
          state: "启用",
          message: "触发围栏",
          remark: "内围栏危险"
        },
        {
          num: "1",
          lanNum: "1698",
          name: "围栏一",
          limit: "12360,12873",
          site: "长春经开站",
          type: "外围栏",
          state: "启用",
          message: "触发围栏",
          remark: "内围栏危险"
        },
        {
          num: "1",
          lanNum: "1698",
          name: "围栏一",
          limit: "12360,12873",
          site: "长春经开站",
          type: "外围栏",
          state: "启用",
          message: "触发围栏",
          remark: "内围栏危险"
        },
        {
          num: "1",
          lanNum: "1698",
          name: "围栏一",
          limit: "12360,12873",
          site: "长春经开站",
          type: "外围栏",
          state: "启用",
          message: "触发围栏",
          remark: "内围栏危险"
        },
        {
          num: "1",
          lanNum: "1698",
          name: "围栏一",
          limit: "12360,12873",
          site: "长春经开站",
          type: "外围栏",
          state: "启用",
          message: "触发围栏",
          remark: "内围栏危险"
        },
        {
          num: "1",
          lanNum: "1698",
          name: "围栏一",
          limit: "12360,12873",
          site: "长春经开站",
          type: "外围栏",
          state: "启用",
          message: "触发围栏",
          remark: "内围栏危险"
        },
        {
          num: "1",
          lanNum: "1698",
          name: "围栏一",
          limit: "12360,12873",
          site: "长春经开站",
          type: "外围栏",
          state: "启用",
          message: "触发围栏",
          remark: "内围栏危险"
        }
      ]
    };
  },

  methods:{
    showPeople(){
      this.dialogVisible = true;
    },
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
.func {
  height: 8%;
  width: 100%;
  position: relative;
}
.func .input {
  width: 15%;
  height: 60%;
  font-size: 70%;
  position: absolute;
  left: 2%;
  top: 20%;
}
.func .input /deep/ .el-input__inner {
  height: 100%;
  line-height: 100%;
}
.add {
  width: 80px;
  height: 60%;
  background-color: #00bd6e;
  border-radius: 3px;
  font-size: 70%;
  color: white;
  line-height: 250%;
  text-align: center;
  position: absolute;
  left: 240px;
  top: 10px;
}
.bottom {
  width: 100%;
}
.charts {
  padding-left: 9px;
}
.el-table {
  font-size: 10px;
}
.el-table /deep/ th {
  padding: 0 !important;
}
.el-table /deep/ td {
  padding: 0 !important;
}
.el-table /deep/ th div {
  height: 10%;
  line-height: 200% !important;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(155, 155, 155, 1);
  text-align: center;
}
.el-table /deep/ td div {
  line-height: 200% !important;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: rgba(155, 155, 155, 1);
  text-align: center;
}
.button-group {
}
.button-group .el-col button {
  font-size: 80%;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(155, 155, 155, 1);
  border: 0px solid white;
}
.button-group .el-col .green-btn {
  color: #00a06e;
}

.dialog /deep/ .el-dialog__header{
  padding: 0px;
  padding-left: 8px;
}
.dialog /deep/ .el-dialog__header span{
  font-size:8px !important;
font-family:MicrosoftYaHei;
font-weight:400;
color:rgba(155,155,155,1);
}
.dialog /deep/ .el-dialog__header .el-dialog__headerbtn{
  top: 8px;
  font-size:12px !important;
  right: 8px;
}
.dialog /deep/  .el-dialog__body{
  padding: 0px !important;
}
</style>