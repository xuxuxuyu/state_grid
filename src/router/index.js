import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Visual from '@/views/Visual'
import HomePart from '@/components/HomePart'
//指挥中心
import SitePart from '../components/SitePart.vue'
import WatchPart from '../components/WatchPart.vue'
import HistoryPart from '../components/HistoryPart.vue'
import MessagePart from '../components/MessagePart.vue'
import TalkPart from '../components/TalkPart.vue'
import AlarmPart from '../components/AlarmPart.vue'
import ConfigPart from '../components/ConfigPart.vue'
import RemotePart from '../components/RemotePart.vue'
import VideoPart from '../components/VideoPart.vue'
import AttendancePart from '../components/AttendancePart.vue'
import AnalysisPart from '../components/AnalysisPart.vue'
import PermissionPart from '../components/PermissionPart.vue'
import SystemPart from '../components/SystemPart.vue'
import LogPart from '../components/LogPart.vue'
import SOSPart from '../components/SOSPart.vue'
import PlanPart from '../components/PlanPart.vue'
//权限管理
import userPart from '../components/role/userPart.vue'
import unitPart from '../components/role/unitPart.vue'
import rolePart from '../components/role/rolePart.vue'
//设备管理
import ManagerPart from '../components/device/ManagerPart.vue'
import RepairPart from '../components/device/RepairPart.vue'
import StatePart from '../components/device/StatePart.vue'
import TypePart from '../components/device/TypePart.vue'
import UpdatePart from '../components/device/UpdatePart.vue'
//监控视频
import VideoLive from '../views/VideoLive.vue'
//视频管理
import faceTrack from '../components/video/faceTrack.vue'
import readCar from '../components/video/readCar.vue'
import readFace from '../components/video/readFace.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: '/grid',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/home',
      children: [
        {
          path: '/home/home',
          name: 'HomePart',
          component: HomePart,
        },
        {
          path: '/home/command/site',
          name: 'SitePart',
          component: SitePart,
        },
        {
          path: '/home/command/watch',
          name: 'WatchPart',
          component: WatchPart,
        },
        {
          path: '/home/command/plan',
          name: 'PlanPart',
          component: PlanPart,
        },
        {
          path: '/home/command/history',
          name: 'HistoryPart',
          component: HistoryPart,
        },
        {
          path: '/home/command/message',
          name: 'MessagePart',
          component: MessagePart,
        },
        {
          path: '/home/command/talk',
          name: 'TalkPart',
          component: TalkPart,
        },
        {
          path: '/home/command/SOS',
          name: 'SOSPart',
          component: SOSPart,
        },
        {
          path: '/home/command/alarm',
          name: 'AlarmPart',
          component: AlarmPart,
        },
        {
          path: '/home/command/config',
          name: 'ConfigPart',
          component: ConfigPart,
        },
        {
          path: '/home/command/remote/restart',
          name: 'RemotePart',
          component: RemotePart,
        },
        {
          path: '/home/video',
          name: 'VideoPart',
          component: VideoPart,
        },
        {
          path: '/home/attendance',
          name: 'AttendancePart',
          component: AttendancePart,
        },
        {
          path: '/home/analysis',
          name: 'AnalysisPart',
          component: AnalysisPart,
        },
        {
          path:'/home/device/manager',
          name:"ManagerPart",
          component:ManagerPart,
        },
        {
          path:'/home/device/repair',
          name:'RepairPart',
          component:RepairPart,
        },
        {
          path:'/home/device/state',
          name:'StatePart',
          component:StatePart,
        },
        {
          path:'/home/device/type',
          name:'TypePart',
          component:TypePart,
        },
        {
          path:'/home/device/update',
          name:'UpdatePart',
          component:UpdatePart,
        },
        {
          path: '/home/role/user',
          name: 'userPart',
          component: userPart,
        },
        {
          path: '/home/role/role',
          name: 'rolePart',
          component: rolePart,
        },
        {
          path: '/home/role/unit',
          name: 'unitPart',
          component: unitPart,
        },
        {
          path: '/home/system',
          name: 'SystemPart',
          component: SystemPart,
        },
        {
          path: '/home/log',
          name: 'LogPart',
          component: LogPart,
        },
        {
          path:'/home/video/read/track',
          name:'faceTrack',
          component:faceTrack,
        },
        {
          path:'/home/video/read/car',
          name:'readCar',
          component:readCar,
        },
        {
          path:'/home/video/read/face',
          name:'readFace',
          component:readFace,
        }
      ]
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/visual',
      name: 'Visual',
      component: Visual
    },
    {
      path: '/watch',
      name: 'VideoLive',
      component: VideoLive
    }
  ]
})
