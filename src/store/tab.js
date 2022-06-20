// import Cookie from "js-cookie";
export default {
    namespaced:true,
    state:{
        isCollapse:false,
        tabList:[
            {
                path:'/home',
                name:"home",
                label:"首页",
                icon:"home"
            }
        ],
        //高亮显示
        currentMenu:null,
        menu:[]
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse=!state.isCollapse
        },
        selectMenu(state,value){
            if (value.name!=="home"){
                state.currentMenu=value
                //    当前选中菜单的索引
               const result = state.tabList.findIndex(item=>item.name===value.name)
                if (result===-1){
                    state.tabList.push(value)
                }else {
                    state.currentMenu=null
                }
            }
        },
        // setMenu(state,value){
        //     state.menu=value
        //     Cookie.set("menu",JSON.stringify(value))
        // },
        // clearMenu(state){
        //     state.menu=[]
        //     Cookie.remove("menu")
        // },
        // addMenu(state,router){
        //     if (!Cookie.get("menu")){
        //         return
        //     }
        //     const menu = JSON.parse(Cookie.get("menu"))
        //     state.menu=menu
        //     const menuArray=[]
        //     menu.forEach(item=>{
        //         if (item.children){
        //             item.children=item.children.map(item=>{
        //                 item.component=()=>import(`../pages/${item.url}`)
        //                 return item
        //             })
        //             menuArray.push(...item.children)
        //         }else {
        //             item.component=()=>import(`../pages/${item.url}`)
        //             menuArray.push(...item)
        //         }
        //     })
        //     //路由的动态添加
        //     menuArray.forEach(item =>{
        //         router.addRoutes("Main",item)
        //     })
        // }
    }
}