<template>
  <el-col class="content">
    <!-- 面包屑 -->
    <el-row class="breadCol">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/home' }">指挥中心</el-breadcrumb-item>
        <el-breadcrumb-item>集群对讲</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row>
      <el-table :data="tableData">
        <el-table-column label="群组" >
          <el-table-column prop="xu" width="60">
              <input type="checkbox" />
          </el-table-column>
          <el-table-column prop="name" label="群组名称" ></el-table-column>
        </el-table-column>
        <el-table-column prop="name">
          <template slot="header" slot-scope="scope">
            <span class="til">当前群组：群组名称一</span>
           <button class="search">发起对讲</button>
          </template>
          <el-table-column prop="num" label="序号" ></el-table-column>
          <el-table-column prop="pernum" label="员工工号" ></el-table-column>
          <el-table-column prop="pername" label="员工姓名" ></el-table-column>
          <el-table-column prop="snum" label="设备编号" ></el-table-column>
          <el-table-column prop="job" label="职位" ></el-table-column>
          <el-table-column prop="where" label="所属工作站" ></el-table-column>
          <el-table-column prop="state" label="工作状态" ></el-table-column>
          <el-table-column prop="others" label="备注" ></el-table-column>
        </el-table-column>
      </el-table>
    </el-row> 
  </el-col> 
</template>

<script>
  import {httpPost,httpGet} from '../utils/http'
  import axios from 'axios'
export default {
  name: "TalkPart",
  data(){
    return {
      tableData:[
        {name:"群组名称一",num:"1",pernum:"3224",pername:"张三",snum:"2343",job:"职员",where:"长春南关站",state:"在线",others:"-"},
        {name:"群组名称二",num:"2",pernum:"4324",pername:"李四",snum:"2345",job:"职员",where:"长春南关站",state:"在线",others:"-"},
        {name:"群组名称三",num:"3",pernum:"4562",pername:"王五",snum:"2342",job:"职员",where:"长春朝阳站",state:"离线",others:"-"}
      ]
    }
  },
  methods:{
    getGroupList(){
      httpGet("/group/list",{pageSize:"10",pageNo:"1"}).then(res=>{
        // console.log(res)
        if(res.success){
          console.log(res)
        }else{
          alert(res.msg)
        }
      })
    },
  },
  mounted(){
    this.getGroupList()
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
.el-table /deep/ td, 
.el-table /deep/ th{
    padding:0 !important;
    text-align: center;
    font-size: 110%;

}
.til{
  font-size: 100%;
}
.el-table /deep/ th div{
    background: #F5FAF5;
    height: 15%;
    line-height: 250%;
}
.el-table /deep/ td div{
  line-height: 250%;
  height: 15%;
}
.til{
  position: relative;
  left: -40%;
}
.search{
  font-size: 90%;
  color: #fff;
  border: none;
  width: 8%;
  height: 70%;
  background: #00BA6E;
  border-radius: 3px;
  text-align:center;
  padding:0;
  position: absolute;
  right: 2%;
  top: 20%;
}
</style>