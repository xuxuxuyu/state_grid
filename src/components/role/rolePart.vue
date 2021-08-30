<template>
  <div class="wrapper">
    <el-row class="head">
      <el-col>
        <div>当前位置：用户管理</div>
      </el-col>
    </el-row>
    <el-row class="cen">
      <el-button @click="dialogAdd = true">新增</el-button>
      <el-dialog title="新增角色" :visible.sync="dialogAdd">
        <el-form :model="form">
          <el-form-item label="角色名称">
            <el-input type="text" v-model="form.roleName" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogAdd = false">取消</el-button>
          <el-button type="primary" @click="add">确定</el-button>
        </div>
      </el-dialog>
    </el-row>
    <el-row class="foot">
      <el-col :span="6">
        <el-row class="tips one">角色列表</el-row>
        <el-table :data="tableData" @row-click="showRight">
          <el-table-column width="40">
            <input type="checkbox" />
          </el-table-column>
          <el-table-column prop="index" label="序号" width="60"></el-table-column>
          <el-table-column prop="roleName" width="120" label="角色名称"></el-table-column>
          <!-- <el-table-column prop label="权重" width="45"></el-table-column> -->
          <el-table-column width="120" label="操作">
            <template slot-scope="scope">
              <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="delRow(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="18" class="right">
        <el-row class="tips two">权限控制</el-row>
        <el-row class="rightOne">
          <el-col :span="3">
            <span class="til">角色名称:</span>
          </el-col>
          <el-col :span="21">
            <el-input placeholder="超级管理员"></el-input>
          </el-col>
        </el-row>
        <el-row class="rightTwo">
          <el-col :span="3">
            <span class="til">描述:</span>
          </el-col>
          <el-col :span="21">
            <el-input placeholder="当前角色的用途，备注信息等"></el-input>
          </el-col>
        </el-row>
        <el-row class="rightThree">
          <el-col :span="3">
            <span class="til">全部功能:</span>
          </el-col>
          <el-col :span="21">
            <el-tree
              :data="treedata"
              show-checkbox
              node-key="id"
              :default-checked-keys="selectArray"
              default-expand-all="true"
              ref="tree"
              :props="defaultProps"
            ></el-tree>
          </el-col>
        </el-row>
        <el-row><span @click="save">保存</span></el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { httpPost, httpGet } from "../../utils/http";
export default {
  name: "rolePart",
  data() {
    return {
      dialogAdd: false,
      form: {
        roleName: ""
      },
      keys: [],
      tableData: [],
      treedata: [],
      selectArray: [],
      currentItem:Object
    };
  },
  methods: {
    getRoleList() {
      httpGet("/role/list", { pageSize: "10", pageNo: "1" }).then(res => {
        if (res.success) {
          let data = res.roleList.records.map((item,i)=>{
              item["index"] = i + 1;
              return item;
          })
          this.tableData = data;
        } else {
          console.log(res);
        }
      });
    },
    add() {
      this.getRoleList();
      this.dialogAdd = false;
      httpPost("/role/add", {
        roleName: this.form.roleName
      }).then(res => {
        if (res.success) {
          this.getRoleList();
          console.log("添加成功");
        } else {
          alert(res.msg);
          console.log(res);
        }
      });
    },
    showRight(item) {
      //this.getDefult(item.id);  暂时先注释 应该是点击编辑才触发
    },
    showAll() {
      console.log("showall");
      var that = this;
      httpGet("/menu/getAllMenulist", { pageSize: "10", pageNo: "1" }).then(
        res => {
          if (res.success) {
            console.log("右边数据加载了");
            function getTree(arr) {
              var newarr = arr.map(item => {
                item["label"] = item.title;
                if (item.children) {
                  getTree(item.children);
                }
                return item;
              });
              return newarr;
            }
            this.treedata = getTree(res.selected_MenuList);
          } else {
            alert(res.msg);
          }
        }
      );
    },
    delRow(row){
        httpPost("/role/delete",{id:row.id}).then((res)=>{
            console.log(res);
            alert(res.msg)
        })
        console.log(row);
    },
    edit(row){
        this.getDefult(row.id);
        console.log(row);
        this.currentItem = row;
    },
    getTree(arr) {
      var newarr = arr.map(item => {
        item["label"] = item.title;
        if (item.children) {
          getTree(item.children);
        }
        return item;
      });
      return newarr;
    },
    //获取选中权限
    getDefult(roleId) {
      httpGet("/roleMenu/getMenu", { rId: roleId })
        .then(res => {
          if (res.success) {
            console.log(res);
            var selectArray = [];
            res.roleList.map(item => {
              if (item.children) {
                item.children.map(child => {
                  if (child.isSelection == 1) {
                    selectArray.push(child.id);
                  }
                  if (child.children) {
                    child.children.map(childchild => {
                      if (childchild.isSelection == 1) {
                        selectArray.push(childchild.id);
                      }
                    });
                  }
                });
              }
              if (item.isSelection == 1) {
                selectArray.push(item.id);
              }
            });

            this.selectArray = selectArray;
            this.$refs.tree.setCheckedNodes(this.selectArray);
            alert("获取权限成功")
          } else {
            console.log(res);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    save(){
        let selects = this.$refs.tree.getCheckedNodes().map((item)=>{
            return item.id;
        });
        let menuIds = selects.join(",");
        httpPost("/roleMenu/add",{menuIds:menuIds,rId:this.currentItem.id}).then((res)=>{
            console.log(res);
            if(res.success){
                alert("操作成功")
            }
        })

    }
  },
  mounted() {
    this.getRoleList();
    this.showAll();
  }
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
.cen {
  font-size: 80%;
  height: 10%;
  line-height: 400%;
  padding-left: 3%;
}
.cen .el-button {
  width: 8%;
  height: 50%;
}
.foot {
  width: 100%;
}
.foot .el-col {
  height: 100%;
  border: 1px solid #000;
  border-right: none;
}
.tips {
  font-size: 70%;
  height: 8%;
  line-height: 300%;
}
.one {
  text-align: center;
}
.two {
  padding-left: 2%;
}
.el-table {
  font-size: 70%;
}
.el-table /deep/ th {
  text-align: center;
}
.rightOne .el-col,
.rightTwo .el-col,
.rightThree .el-col {
  border: none;
  margin-top: 1%;
  padding-left: 3%;
}
.rightOne .el-input /deep/ input {
  /*background-color: green;*/
  width: 300px;
  height: 30px;
  font-size: 90%;
}
.rightTwo .el-input /deep/ input {
  /*background-color: green;*/
  width: 400px;
  height: 60px;
  font-size: 90%;
}
.el-tree {
  padding: 0;
  width: 50%;
  font-size: 70%;
  color: #000;
  background-color: #f5faf5;
}
.el-tree /deep/ span {
  padding: 0;
  margin: 0;
}
.til {
  font-size: 80%;
}
.el-dialog {
  width: 40%;
  height: 30%;
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
.el-dialog__footer .el-button {
  text-align: center;
  padding: 12px 10px;
}
</style>
