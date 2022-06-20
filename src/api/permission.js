// import Mock from "mockjs";
// export default {
//     getMenu:config=>{
//         const {username,password}=JSON.parse(config.body)
//     //    判断用户是否存在
//     //    判断账号和密码是否对应
//         if (username==='admin'&& password==='admin'){
//             return{
//                 code:20000,
//                 data:{
//                     menu:[
//                         {
//                             path:"/",
//                             name:"home",
//                             label:"首页",
//                             icon:"s-home",
//                             url:"pages/Home.vue"
//                         },
//                         {
//                             path:"/goods",
//                             name:"goods",
//                             label:"商品管理",
//                             icon:"s-goods",
//                             url:"pages/Goods.vue"
//                         },
//                         {
//                             path:"/user",
//                             name:"user",
//                             label:"用户管理",
//                             icon:"user",
//                             url:"pages/User.vue"
//                         },
//                         {
//                             label:"其他",
//                             icon:"location",
//                             children:[
//                                 {
//                                     path:"/pageOne",
//                                     name:"pageOne",
//                                     label:"页面1",
//                                     icon:"setting",
//                                     url:"components/pageOne.vue"
//                                 },
//                                 {
//                                     path:"/pageTwo",
//                                     name:"pageTwo",
//                                     label:"页面2",
//                                     icon:"setting",
//                                     url:"components/pageTwo.vue"
//                                 },
//                             ]
//                         },
//                     ]
//                 }
//             }
//         }else if (username==='wuyongjun'&& password==='123456'){
//             return {
//                 code: 20000,
//                 data:{
//                     menu:[
//                         {
//                             path:"/",
//                             name:"home",
//                             label:"首页",
//                             icon:"s-home",
//                             url:"pages/Home.vue"
//                         },
//                         {
//                             path:"/goods",
//                             name:"goods",
//                             label:"商品管理",
//                             icon:"s-goods",
//                             url:"pages/Goods.vue"
//                         },
//                     ],
//                     token:Mock.Random.guid(),
//                     message:"获取成功"
//                 }
//             }
//         }else{
//             return {
//                 code:0,
//                 data:{
//                     message:"请输入正确的用户名和密码"
//                 }
//             }
//         }
//
//     }
// }