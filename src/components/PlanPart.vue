<template>
    <el-col class="content">
        <el-row class="breadCol">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/home/home' }">指挥中心</el-breadcrumb-item>
                <el-breadcrumb-item>工作计划</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-row class="electricity">
                <el-col :span=2>配电</el-col>
                <el-col :span=2>送电</el-col>
                <el-col :span=2>变电</el-col>
                <el-col :span=2></el-col>
        </el-row>
        <div class="botm">
            <div class="rightPart">
                <el-row class="center" type="flex" justify="space-between">
                    <el-col>
                        <div>
                            <span>名称:</span>
                            <el-input class="headInput" placeholder="设备编号、名称"></el-input>
                        </div> 
                    </el-col>
                    <el-col>
                        <div>
                            <span>上传日期:</span>
                            <el-input class="headInput" placeholder="开始、结束"></el-input>
                        </div>
                    </el-col>
                    <el-col>
                        <el-button type="primary" class="search">查询</el-button>
                    </el-col>
                </el-row>
                <el-row class="ticket">
                    <span>电子工作票</span>
                    <el-button type="primary">Excel导入</el-button>
                    <el-button type="primary">Excel导出</el-button>
                </el-row>  
                <el-row class="table">
                    <el-table :data="tableData">
                        <el-table-column prop="num" label="序号" ></el-table-column>
                        <el-table-column prop="name" label="名称" ></el-table-column>
                        <el-table-column prop="date" label="上传日期" ></el-table-column>
                        <el-table-column prop="per" label="上传人员" ></el-table-column>
                        <el-table-column prop="com" label="所属单位" ></el-table-column>
                        <el-table-column prop="do" label="操作" >
                            <el-row class="button-group">
                                <el-col :span=8>
                                  <span>查看</span>
                                </el-col>
                                <el-col :span=8>
                                  <span>编辑</span>
                                </el-col>
                                <el-col :span=8>
                                  <span>删除</span>
                                </el-col>
                            </el-row>
                        </el-table-column>
                    </el-table>
                </el-row>
            </div>
            <div class="leftPart">
                <el-col class="first">工作内容</el-col>
                <el-col>电子工作票</el-col>
                <el-col>周计划</el-col>
            </div>
        </div>  
    </el-col>
</template>
<script>
    export default{
        name:'PlanPart',
        data(){
            return{
                tableData:[
                    {num:1,name:"zs",date:"2019-10-08",per:"zs",com:"yunhai"}
                ],
            }
        },
        methods:{

        },
    }
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
    .electricity{
        height: 7%;
        width: 100%;
    }
    .electricity .el-col{
        margin-top: 1.5%;
        color: #9B9B9B;
        font-size: 70%;
        height: 60%;
        line-height: 200%;
        text-align: center;
        border:1px solid #dadada;
        border-radius: 1px;
        border-left: none;
    }
    .electricity .el-col:hover{
        color: #fff;
        background-color: #00BC6E;
    }
    .botm{
        margin-top: 1.5%;
        width: 100%;
        height: 83%;
        border: 1px solid #dadada;

    }
    .rightPart{
        width: 80%;
        height: 100%;
        float: right;
    }
    .leftPart{
        width: 20%;
        height: 100%;
        border-right: 1px solid #dadada;
    }
    .leftPart .el-col{
        height: 10%;
        border-bottom: 1px solid #dadada;
        color: #9B9B9B;
        font-size: 90%;
        text-align: center;
        line-height: 300%;
    } 
    .leftPart .first{
        background-color: #F5FAF5;
        font-weight: bolder;
    }
    .center{
        margin-left: 3%;
        width: 65%;
        height: 10%;
        color: #9B9B9B;
        font-size: 80%;
        line-height: 300%;
    }
    .headInput{
        width: 60%;
    }
    .headInput /deep/ input{
        font-size: 100%;
        height: 30px;
        width: 100%;
    }
    .search{
        background-color: #00B06E;
        font-size: 90%;
        height:30px;
        line-height: 50%;
        border:none;
    }
    .ticket{
        height: 10%;
        border-top: 1px solid #dadada;
        border-bottom: 1px solid #dadada;
        line-height: 300%;
        background-color: #F5FAF5;
    }
    .ticket span{
        color: #9B9B9B;
        font-size: 90%; 
        padding-left: 3%;
        margin-right:60%;
    }
    .ticket .el-button{
        background-color: #00B06E;
        height: 35px;
        border:none;
    }
    .table{
        width: 100%;
    }
    .el-table {
        width: 1000px;
    }
    .el-table /deep/ th {
        padding: 0 !important;
    }
    .el-table /deep/ td {
        padding: 0 !important;
    }
    .el-table /deep/ th div {
        height: 10%;
        line-height: 300% !important;
        font-size: 100%;
        font-family: MicrosoftYaHei;
        font-weight: bold;
        color: rgba(155, 155, 155, 1);
        text-align: center;
        background-color: #F5FAF5;
    }
    .el-table /deep/ td div {
        line-height: 300% !important;
        font-size: 100%;
        font-family: MicrosoftYaHei;
        color: rgba(155, 155, 155, 1);
        text-align: center;
    }
    .button-group .el-col{
        cursor: pointer;
    }
</style>