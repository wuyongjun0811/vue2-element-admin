import axios from "@/api/axios";
//API统一管理
export const getMenu=(params)=>{axios.request({url:'/permission/getMenu',method:'post',data:params})}
export const getData=()=>{
        return axios.request({
            url:'/home/getData',
            method:'get'
        })
}
