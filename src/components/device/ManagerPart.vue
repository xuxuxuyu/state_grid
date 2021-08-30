<template>
  <div class="wrapper">
    <el-row class="head">
      <el-col><div>当前位置：设备管理</div></el-col>
    </el-row>
    <el-row class="center" type="flex" justify="space-between">
      <el-col>
        <div>
          <span>工作站:</span>
          <el-input
            class="headInput"
            placeholder="可以模糊下拉选查询"
          ></el-input>
        </div>
      </el-col>
      <el-col>
        <div>
          <span>员工姓名:</span>
          <el-input
            class="headInput"
            v-model="personneName"
            placeholder="可以模糊下拉选查询"
          ></el-input>
        </div>
      </el-col>
      <el-col>
        <div>
          <span>员工工号:</span>
          <el-input
            class="headInput"
            v-model="personnelId"
            placeholder="工号、名称"
          ></el-input>
        </div>
      </el-col>
      <el-col>
        <div>
          <span>设备编号:</span>
          <el-input
            class="headInput"
            v-model="equipmentId"
            placeholder="设备编号"
          ></el-input>
        </div>
      </el-col>
      <el-col>
        <el-button type="primary" @click="search">查询</el-button>
      </el-col>
    </el-row>
    <el-row class="btn">
      <el-button @click="dialogAdd = true">新增</el-button>
      <el-dialog title="新增设备" :visible.sync="dialogAdd">
        <el-form :model="form">
          <el-form-item label="设备编号">
            <el-input
              type="text"
              v-model="form.eqnum"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="设备名称">
            <el-input
              type="text"
              v-model="form.eqname"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="员工编号">
            <el-input
              type="text"
              v-model="form.pernum"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="设备类型"
            ><br />
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogAdd = false">取消</el-button>
          <el-button type="primary" @click="add">确定</el-button>
        </div>
      </el-dialog>
      <el-button
        @click="
          dialogUpdate = true;
          upchange();
        "
        >修改</el-button
      >
      <el-dialog title="修改设备" :visible.sync="dialogUpdate">
        <el-form :model="form">
          <el-form-item label="设备编号">
            <el-input
              type="text"
              v-model="update.eqnum"
              autocomplete="off"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="设备名称">
            <el-input
              type="text"
              v-model="update.eqname"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="员工编号">
            <el-input
              type="text"
              v-model="update.pernum"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="设备类型"
            ><br />
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogUpdate = false">取消</el-button>
          <el-button type="primary" @click="change">确定</el-button>
        </div>
      </el-dialog>
      <el-button @click="repair">报修</el-button>
      <el-button @click="scrap">报废</el-button>
      <el-button @click="start">启用</el-button>
      <el-button @click="stop">停用</el-button>
      <el-button @click="del">删除</el-button>
    </el-row>
    <el-row class="bottom">
      <el-table :data="tableData" @selection-change="getCurrentTableId">
        <el-table-column type="selection" width="100"> </el-table-column>
        <el-table-column prop="id" label="序号" v-if="show"></el-table-column>
        <el-table-column prop="personnelId" label="员工编号"></el-table-column>
        <el-table-column
          prop="personnelName"
          label="员工姓名"
        ></el-table-column>
        <el-table-column prop="equipmentId" label="设备编号"></el-table-column>
        <el-table-column prop="type" label="设备类型"></el-table-column>
        <el-table-column prop="" label="所属单位"></el-table-column>
        <el-table-column prop="state" label="设备状态"></el-table-column>
        <el-table-column prop="" label="上次报修时间"></el-table-column>
        <el-table-column prop="" label="报废时间"></el-table-column>
        <el-table-column prop="" label="上次启动时间"></el-table-column>
        <el-table-column prop="" label="上次停用时间"></el-table-column>
        <el-table-column prop="name" label="产品名称"></el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script>
import { httpPost, httpGet } from "../../utils/http";
import axios from "axios";
export default {
  name: "ManagerPart",
  data() {
    return {
      show: false,
      options: [
        {
          id: 1,
          value: "1",
          label: "布控球",
        },
        {
          id: 2,
          value: "2",
          label: "执法记录仪",
        },
        {
          id: 3,
          value: "3",
          label: "安全帽",
        },
      ],
      value: "1",
      name: "",
      dialogAdd: false,
      dialogUpdate: false,
      tableData: [],
      multipleSelection: [],
      arr: [],
      form: {
        eqnum: "",
        eqname: "",
        pernum: "",
      },
      update: {
        eqnum: "",
        eqname: "",
        pernum: "",
      },
      equipmentId: "",
      personneName: "",
      personnelId: "",
    };
  },
  methods: {
    getCurrentTableId(vel) {
      this.multipleSelection = vel;
    },
    getArr() {
      this.multipleSelection.map((item) => {
        if (this.arr.indexOf(item.equipmentId) === -1) {
          this.arr.push(item.equipmentId);
        } else if (this.arr.indexOf(item.equipmentId) !== -1) {
          this.arr.splice(this.arr.indexOf(item.equipmentId), 1);
        }
      });
    },
    getEquipmentList() {
      httpGet("/equipment/list", { pageSize: "10", pageNo: "1" }).then(
        (res) => {
          if (res.success) {
            // console.log(res.Equipment)
            this.tableData = res.Equipment;
          } else {
            alert(res.msg);
          }
        }
      );
    },
    //查询
    search() {
      httpGet("/equipment/list", {
        pageSize: "10",
        pageNo: "1",
        equipmentId: this.equipmentId,
        personnelName: this.personnelName,
        personnelId: this.personnelId,
      }).then((res) => {
        if (res.success) {
          if (!res.Equipment) {
            alert("查询不到该信息，请核对后重新输入");
            this.getEquipmentList();
          } else {
            this.tableData = res.Equipment;
            // console.log("查询成功")
          }
        } else {
          alert(res.msg);
          // console.log(res)
        }
      });
    },
    //添加设备
    add() {
      if (
        this.form.eqnum != "" &&
        this.form.eqname != "" &&
        this.form.pernum != "" &&
        this.value != ""
      ) {
        this.getEquipmentList();
        this.dialogAdd = false;
        httpPost("/equipment/add", {
          equipmentId: this.form.eqnum,
          name: this.form.eqname,
          personnelId: this.form.pernum,
          typeId: this.value,
        }).then((res) => {
          console.log("当前选中的类型是");
          console.log(this.value);
          if (res.success) {
            this.getEquipmentList();
            alert("添加成功");
          } else {
            alert(res.msg);
            console.log(res);
          }
        });
      } else {
        alert("选项不能为空");
        this.dialogAdd = true;
      }
    },
    //删除设备
    del() {
      this.getArr();
      // console.log(this.arr)
      httpPost("/equipment/delete", { id: this.arr.join(",") }).then((res) => {
        if (res.success) {
          alert("删除成功");
          this.getEquipmentList();
        } else {
          alert(res.msg);
        }
      });
      this.arr = [];
    },
    //报修设备
    repair() {
      this.getArr();
      httpPost("/equipment/repair", { id: this.arr.join(",") }).then((res) => {
        if (res.success) {
          alert("报修设备成功");
          this.getEquipmentList();
        } else {
          alert(res.msg);
        }
      });
      this.arr = [];
    },
    //报废设备
    scrap() {
      this.getArr();
      httpPost("/equipment/scrap", { id: this.arr.join(",") }).then((res) => {
        if (res.success) {
          // console.log(res)
          alert("报废设备成功");
          this.getEquipmentList();
        } else {
          alert(res.msg);
        }
      });
      this.arr = [];
    },
    //启动设备
    start() {
      this.getArr();
      httpPost("/equipment/start", { id: this.arr.join(",") }).then((res) => {
        if (res.success) {
          // console.log(res)
          alert("启动设备成功");
          this.getEquipmentList();
        } else {
          alert(res.msg);
        }
      });
      this.arr = [];
    },
    //停用设备
    stop() {
      this.getArr();
      httpPost("/equipment/stop", { id: this.arr.join(",") }).then((res) => {
        if (res.success) {
          // console.log(res)
          alert("停用设备成功");
          this.getEquipmentList();
        } else {
          console.log(res);
          alert(res.msg);
        }
      });
      this.arr = [];
    },
    upchange() {
      this.update.eqnum = this.multipleSelection[0].equipmentId;
      this.update.eqname = this.multipleSelection[0].name;
      this.update.pernum = this.multipleSelection[0].personnelId;
      this.value = this.multipleSelection[0].type;
      // console.log("点击触发时间")
    },
    //修改设备
    change() {
      this.getArr();
      this.dialogUpdate = false;
      httpPost("/equipment/update", {
        id: this.arr.join(),
        equipmentId: this.arr.join(),
        name: this.update.eqname,
        personnelId: this.update.pernum,
        typeId: this.value,
      }).then((res) => {
        console.log(this.arr);
        if (res.success) {
          alert("修改成功");
          this.getEquipmentList();
        } else {
          alert(res.msg);
          // console.log(res)
        }
      });
      this.value = "";
    },
  },
  mounted() {
    this.getEquipmentList();
  },
};
</script>
<style>
.wrapper {
  width: 100%;
  height: 100%;
}
.head {
  height: 6%;
  font-size: 70%;
  line-height: 300%;
  padding-left: 2%;
}
.headInput /deep/ input {
  height: 40px;
}
.center {
  font-size: 80%;
  height: 10%;
  line-height: 400%;
  padding-left: 3%;
}
.center .el-input {
  width: 60%;
  font-size: 80%;
}
.center span {
  padding-right: 3%;
}
.center .el-button {
  margin-left: 40%;
}
.btn {
  font-size: 80%;
  height: 10%;
  line-height: 400%;
  padding-left: 2%;
}
.cell {
  text-align: center;
}
.el-table td div,
.el-table th div {
  height: 25px;
}
.el-dialog {
  width: 40%;
  height: 60%;
}
.el-dialog .el-form-item {
  margin-bottom: 0;
}
.el-dialog__header,
.el-dialog__body,
.el-dialog__footer {
  padding: 0;
  padding: 0 3% 0 3%;
}
.el-select {
  width: 100%;
}
.el-dialog .el-input /deep/ input {
  height: 40px;
}
</style>