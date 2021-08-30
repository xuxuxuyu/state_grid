<template>
  <div class="wrapper">
    <el-row class="head">
      <el-col><div>当前位置：用户管理</div></el-col>
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
            placeholder="可以模糊下拉选查询"
          ></el-input>
        </div>
      </el-col>
      <el-col>
        <div>
          <span>员工工号:</span>
          <el-input
            class="headInput"
            v-model="staffId"
            placeholder="工号、名称"
          ></el-input>
        </div>
      </el-col>
      <el-col>
        <div>
          <span>登录用户名:</span>
          <el-input class="headInput" v-model="userName"></el-input>
        </div>
      </el-col>
      <el-col>
        <el-button type="primary" @click="search">查询</el-button>
      </el-col>
    </el-row>
    <el-row class="btn">
      <el-button @click="dialogAdd = true">新增</el-button>
      <el-dialog title="新增用户" :visible.sync="dialogAdd">
        <el-form :model="form">
          <el-form-item label="员工姓名">
            <el-input
              type="text"
              v-model="form.realName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="员工编号">
            <el-input
              type="text"
              v-model="form.staffId"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="登录用户名">
            <el-input
              type="text"
              v-model="form.loginName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              type="password"
              v-model="form.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogAdd = false">取消</el-button>
          <el-button type="primary" @click="add">确定</el-button>
        </div>
      </el-dialog>
      <el-button
        @click="
          upchange();
          dialogUpdate = true;
        "
        >修改</el-button
      >
      <el-dialog title="修改用户" :visible.sync="dialogUpdate">
        <el-form :model="form">
          <el-form-item label="员工姓名">
            <el-input
              type="text"
              v-model="update.realName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="员工编号">
            <el-input
              type="text"
              v-model="update.staffId"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="登录用户名">
            <el-input
              type="text"
              v-model="update.userName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              type="password"
              v-model="update.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogUpdate = false">取消</el-button>
          <el-button type="primary" @click="change">确定</el-button>
        </div>
      </el-dialog>
      <el-button>密码重置</el-button>
      <el-button>停用</el-button>
      <el-button @click="del">删除</el-button>
      <el-button>Excel表格导出</el-button>
    </el-row>
    <el-row class="bottom">
      <el-table
        ref="myTable"
        :data="tableData"
        @selection-change="getCurrentTableId"
      >
        <el-table-column type="selection" width="100"> </el-table-column>
        <el-table-column
          prop="id"
          label="id"
          id="idCard"
          v-if="flag"
        ></el-table-column>
        <el-table-column prop="realName" label="员工姓名"></el-table-column>
        <el-table-column prop="staffId" label="员工编号"></el-table-column>
        <el-table-column prop="loginName" label="登录用户名"></el-table-column>
        <el-table-column prop="" label="单位"></el-table-column>
        <el-table-column prop="" label="角色">
          <template slot-scope="scope">
            <el-button @click="dialogRole = true" class="roleManagement"
              >设置角色</el-button
            >
            <el-dialog
              class="diarole"
              title="设置角色"
              :visible.sync="dialogRole"
              :append-to-body="true"
            >
              <el-checkbox-group v-model="checkList">
                <el-checkbox
                  v-for="val in roleName"
                  :label="val.id"
                  :key="val.id"
                  >{{ val.roleName }}</el-checkbox
                >
              </el-checkbox-group>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogRole = false">取消</el-button>
                <el-button type="primary" @click="setRole(scope.row)"
                  >确定</el-button
                >
              </div>
            </el-dialog>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script>
import { httpPost, httpGet } from "../../utils/http";
import axios from "axios";
export default {
  name: "userPart",
  data() {
    return {
      rowInfo: [],
      flag: false,
      roleName: [],
      checkList: [],
      arr: [],
      dialogAdd: false,
      dialogUpdate: false,
      dialogRole: false,
      staffId: "",
      userName: "",
      tableData: [{ staffId: 1 }],
      multipleSelection: [],
      form: {
        realName: "",
        staffId: "",
        userName: "",
        password: "",
      },
      update: {
        realName: "",
        staffId: "",
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    getCurrentTableId(vel) {
      this.multipleSelection = vel;
    },
    getRoleList() {
      httpGet("/role/list", { pageSize: "10", pageNo: "1" }).then((res) => {
        if (res.success) {
          this.roleName = res.roleList.records;
        } else {
          alert(res.msg);
        }
      });
    },
    //设置角色
    setRole(row) {
      console.log(row);
      this.dialogRole = false;
      httpPost("/userRole/add", {
        roleIds: this.checkList.join(","),
        userId: row.id,
      }).then((res) => {
        if (res.success) {
          alert("设置角色成功");
        } else {
          console.log(res);
          alert(res.msg);
        }
      });
    },
    //获取id
    getArr() {
      this.multipleSelection.map((item) => {
        if (this.arr.indexOf(item.id) === -1) {
          this.arr.push(item.id);
        } else if (this.arr.indexOf(item.id) !== -1) {
          this.arr.splice(this.arr.indexOf(item.id), 1);
        }
      });
    },
    getUserList() {
      httpGet("/user/list", { pageSize: "10", pageNo: "1" }).then((res) => {
        if (res.success) {
          console.log("tableData刷新成功");
          // console.log(res.userList.records)
          this.tableData = res.userList.records;
        } else {
          alert(res.msg);
        }
      });
    },
    //查询
    search() {
      httpGet("/user/list", {
        pageSize: "10",
        pageNo: "1",
        staffId: this.staffId,
        userName: this.userName,
      }).then((res) => {
        // console.log(res)
        if (res.success) {
          if (!res.userList.records) {
            alert("查询不到该信息，请核对后重新输入");
            this.getUserList();
          } else {
            this.tableData = res.userList.records;
            console.log("查询成功");
          }
        } else {
          alert(res.msg);
        }
      });
    },
    //删除用户
    del() {
      this.getArr();
      httpPost("/user/delete", {
        id: this.arr.join(","),
      }).then((res) => {
        if (res.success) {
          alert("删除成功");
          this.getUserList();
        } else {
          alert(res.msg);
        }
      });
      this.arr = [];
    },
    //添加用户
    add() {
      this.getUserList();
      this.dialogAdd = false;
      if (
        this.form.realName != "" &&
        this.form.staffId != "" &&
        this.form.loginName != "" &&
        this.form.password != ""
      ) {
        httpPost("/user/add", {
          realName: this.form.realName,
          staffId: this.form.staffId,
          loginName: this.form.loginName,
          pwd: this.form.password,
        }).then((res) => {
          if (res.success) {
            this.getUserList();
            console.log("添加成功");
          } else {
            alert(res.msg);
            console.log(res);
          }
        });
      } else {
        alert("选项不能为空");
        this.dialogAdd = true;
      }
      this.form = {};
    },
    //修改用户
    upchange() {
      this.update.realName = this.multipleSelection[0].realName;
      this.update.staffId = this.multipleSelection[0].staffId;
      this.update.loginName = this.multipleSelection[0].loginName;
      this.update.password = this.multipleSelection[0].password;
      // if(this.multipleSelection.length>1){
      //     alert("不能同时修改多个")
      // }
    },
    change() {
      this.getArr();
      this.dialogUpdate = false;
      httpPost("/user/update", {
        userId: this.arr.join(),
        realName: this.update.realName,
        staffId: this.update.staffId,
        loginName: this.update.loginName,
        pwd: this.update.password,
      }).then((res) => {
        if (res.success) {
          alert("修改成功");
          this.getUserList();
        } else {
          alert(res.msg);
          console.log(res);
        }
      });
    },
  },
  mounted() {
    this.getUserList();
    this.getRoleList();
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
.roleManagement {
  line-height: 0;
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
.diarole /deep/ .el-dialog__header {
  padding: 5% 3%;
}
.diarole {
  height: 40%;
}
</style>