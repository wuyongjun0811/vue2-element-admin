import Mock from 'mockjs'
import homeApi from '../api/mockServerData'
// import permissionApi from "@/api/permission";
Mock.mock('/home/getData',homeApi.getData)
// Mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu())