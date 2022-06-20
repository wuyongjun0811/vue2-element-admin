import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/pages/Main";
import Home from "@/pages/Home";
import User from "@/pages/User";
import Goods from "@/pages/Goods";
import PageOne from "@/components/PageOne";
import PageTwo from "@/components/PageTwo";
import Login from "@/pages/Login";
Vue.use(VueRouter);
export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/",
            name:"main",
            component:Main,
            children:[
                {
                    path:"/home",
                    name:"home",
                    component:Home
                },
                {
                    path:"/user",
                    name:"user",
                    component:User
                },
                {
                    path:"/goods",
                    name:"goods",
                    component:Goods
                },
                {
                    path:"/pageOne",
                    name:"pageOne",
                    component:PageOne
                },
                {
                    path:"/pageTwo",
                    name:"pageTwo",
                    component:PageTwo,
                },
            ]
        },
        {
            path:'/login',
            name:"login",
            component:Login,
        }
    ]
})
