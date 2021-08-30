<template>
    <div class="wrapper">
        <el-row class="breadCol">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/home/home' }">指挥中心</el-breadcrumb-item>
                <el-breadcrumb-item>人脸识别</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-row class="head">
            <el-link href="/home/video/read/car" :underline="false">车牌识别</el-link>
            <el-link href="/home/video/read/face" :underline="false"  style="background-color: #00BD6E;color:#fff">人脸识别</el-link>
            <el-link href="/home/video/read/track" :underline="false">人脸追踪</el-link> 
        </el-row>
        <el-row class="cen">
            <span class="tips">上传照片：</span>
            <input type="file">
            <span class="tips">时间范围：</span>
            <input type="text" placeholder="开始、结束">
            <el-button class="search">查询</el-button>
        </el-row>
        <el-row>
            <el-table :data="tableData">
                <el-table-column prop="num" label="序号" ></el-table-column>
                <el-table-column prop="vname" label="视频文件名" ></el-table-column>
                <el-table-column prop="facePic" label="人脸截图" ></el-table-column>
                <el-table-column prop="time" label="出现时间" ></el-table-column>
                <el-table-column prop="key" label="关键帧" ></el-table-column>
                <el-table-column prop="" label="视频来源" ></el-table-column>
                <el-table-column prop="" label="是否重要" ></el-table-column>
                <el-table-column prop="" label="操作" >
                    <el-row class="button-group">
                        <el-col :span=12>
                            <span>查看</span>
                        </el-col>
                        <el-col :span=12>
                            <span>编辑</span>
                        </el-col>
                    </el-row>
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>
<script>
export default {
    name: "readFace",
    data(){
        return {

        }
    },
    methods:{

    }    
}
</script>
<style scoped>
    .wrapper{
        position: relative; 
        background: #fff;  
        width: 100%;
        height: 100%;
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
    .head{
        margin-left: 1%;
        margin-top: 1%;
        width: 30%;
        height: 5%;
        border: 1px solid #dadada;
        border-radius: 3%;
        border-right:none;
        margin-bottom: 1%;
    }
    .head .el-link{
        width: 32%;
        height: 100%;
        margin: 0;
        font-size: 80%;
        border-right: 1px solid #dadada;
        line-height: 200%;
    }
    .head .el-link /deep/ span{
        width: 100%;
        height: 100%;
        text-align: center;
    }
    .head .el-link /deep/ span:hover{
        background-color: #00BD6E;
        color: #fff;
    }
    .cen{
        width: 100%;
        height: 10%;
        padding-top: 1%;
        border-bottom: 1px solid #dadada;
        border-top: 1px solid #dadada;
    }
    .cen .tips{
        font-size: 80%;
        color: #9B9B9B;
        font-weight: normal;
    }
    .cen input{
        width: 15%;
        height: 25px;
        font-size: 70%;
        padding-left: 0.5%;
        color: #9B9B9B;
        margin-right: 3%;
    }
    .search{
        margin-left: 3%;
        height: 20px;
        width: 80px;
        line-height: 10%;
    }
    .search{
        background-color: #00BD6E;
        color: #fff;
    }
    .el-table /deep/ th {
        padding: 0 !important;
    }
    .el-table /deep/ td {
        padding: 0 !important;
    }
    .el-table /deep/ th div {
        text-align: center;
        height: 10%;
        line-height: 300% !important;
        font-size: 100%;
        font-family: MicrosoftYaHei;
        font-weight: bold;
        color: rgba(155, 155, 155, 1);
        background-color: #F5FAF5;
    }
    .el-table /deep/ td div {
        line-height: 300% !important;
        font-size: 100%;
        font-family: MicrosoftYaHei;
        color: rgba(155, 155, 155, 1);
        text-align: center;
    }

</style>