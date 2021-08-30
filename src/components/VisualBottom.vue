<template>
  <el-row type="flex" justify="space-around" class="content">
      <el-col class="first">
        <span class="title">设备运行情况统计</span>
        <div id="piecharts" class="piecharts"></div>
      </el-col>
      <el-col class="second">
          <el-image class="bg-image" :src="secondBg" />
          <span class="title">>>&nbsp公告</span>
          <ul>
            <li v-for="val in news">
              <span class="now">{{val.now}}</span>
              <span class="time">{{val.time}}</span>
            </li>
            <li>
              <span class="more" :underline="false">更多</span>
            </li>
          </ul>
      </el-col>
      <el-col class="third">
        <el-image class="bg-image" :src="secondBg" />
        <span class="title">>>&nbsp公告</span>
          <ul>
            <li v-for="val in info">
              <span>工号&nbsp{{val.num}}</span>
              <span>姓名&nbsp{{val.name}}</span>
              <span>考勤时间&nbsp{{val.time}}</span>
            </li>
          </ul>
      </el-col>
      <el-col class="four">
        <span class="title">网络流量</span>
        <div id="histogram" class="histogram"></div>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: "VisualBottom",
  data() {
    return {
      secondBg: require("../assets/visual/second_bg.png"),
      news:[
        {now:"2019中国国际智能产业博览会...",time:"2019-08-27"},
        {now:"2019中国国际智能产业博览会...",time:"2019-08-27"},
        {now:"2019中国国际智能产业博览会...",time:"2019-08-27"},
        {now:"2019中国国际智能产业博览会...",time:"2019-08-27"},
        {now:"2019中国国际智能产业博览会...",time:"2019-08-27"},
        {now:"2019中国国际智能产业博览会...",time:"2019-08-27"}
      ],
      info:[
        {num:"00096",name:"刘一鸣",time:"08:15"},
        {num:"00096",name:"刘一鸣",time:"08:15"},
        {num:"00096",name:"刘一鸣",time:"08:15"},
        {num:"00096",name:"刘一鸣",time:"08:15"},
        {num:"00096",name:"刘一鸣",time:"08:15"},
        {num:"00096",name:"刘一鸣",time:"08:15"}
      ]
    };
  },
  mounted() {
      var dom = document.getElementById('piecharts')
      var myChart = this.echarts.init(dom)
      // 绘制饼图
      myChart.setOption({
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '65%',
          center:['50%','55%'],
          data: [
            {
              value: 10,
              name: '在线\n(10台)',
              itemStyle:{
                color:"#4eb33b"
              }
            },
            {
              value: 3,
              name: '离线\n(3台)',
              itemStyle:{
                color:"#d93a34"
              }
            },
            {
              value: 2,
              name: '维修\n(2台)',
              itemStyle:{
                color:"#e4a33b"
              }
            }
          ],
          label:{
            normal:{
              show:true,
              position:"inner",
              textStyle:{
                fontSize:'40%'
              }
            }
          },

        }]
      })
      //绘制柱状图
      var mydom = document.getElementById('histogram')
      var myHistogram = this.echarts.init(mydom)
      myHistogram.setOption({
        animation:false,
        grid: {  
          left: '8%',  
          right: '0',  
          bottom: '1%',  
          containLabel: true  
        },
        xAxis: {
          //去掉网格线
          splitLine:{show:false},
          show:false,
          min:0,
          max:100,
        },
        yAxis: {
          axisLine:{show:false},
          axisTick:{show:false},
          type: 'category',
          data:['内存','硬盘','CPU','流量'],
          axisLabel:{
            textStyle:{
              color:'#00D9FB',
              fontSize:'45%'
            },
          },
        },
        series: [
          {
            name:'数据',
            stack: '总量',
            type: 'bar',
            barCateGoryGap:20,
            data:[30,25,30,25],
            itemStyle:{
              normal: {
                  color: function(params){
                    let colorList=['#ff0012','#00d2ff','#d5fb00','#ff7e00']
                    return colorList[params.dataIndex]
                  }
                  
              }
            },
            barGap:'-50%',
            barCategoryGap:'40%',
            barWidth:"60%"
          },
          {
            name:'背景',
            stack: '总量',
            type:'bar',
            data:[50,55,50,55],
            itemStyle:{
              normal:{
                color:'#000D2B'
              }
            },
            zlevel: -1,
            barGap:'-50%',
            barCategoryGap:'40%',
            barWidth:"80%"
          }

        ]

      })
      setTimeout(function (){
                window.onresize = function () {
                  myChart.resize();
                  myHistogram.resize();
                }
      },200)
  }
}
</script>

<style scoped>
.content {
  /*width: 100vw;*/
}
.first {
  width: 24%;
  height: 100%;
  position: relative;
}
.piecharts{
  width: 100%;
  height: 100%;
}
.histogram{
  width: 100%;
  height: 100%;
}
.second {
  width: 24%;
  height: 100%;
  position: relative;
}
.bg-image {
  width: 100%;
  height: 100%;
  position: absolute;
}
.third {
  width: 24%;
  height: 100%;
  position: relative;
}
.four {
  width: 24%;
  height: 100%;
  position: relative;
}
.title{
  font-size: 65%;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: rgba(0, 242, 241, 1);
  position: absolute;
  left: 7.7%;
  top: 4.7%;
}
ul{
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 15% 5% 5%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
}
ul li{
  width: 91.9%;
  height:10%;
  color: #ffffff;
  font-size: 45%;
  display: flex;
  justify-content: space-around;
}
.more{
  position: absolute;
  right: 5%;
  cursor: pointer;
}
.histogram{
  position: absolute;
  padding: 0 5%;
}
</style>