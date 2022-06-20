import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "../src/router/index"
import { Button, Select,Container,Main,Aside,Header,Menu,Submenu,MenuItem,
  MenuItemGroup,Dropdown,DropdownMenu,DropdownItem,Row,Col,Card,Table,TableColumn
,Breadcrumb,BreadcrumbItem,Form,FormItem,Input,Switch,DatePicker,Option,Dialog,Pagination} from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import store from "../src/store/index"
import http from "axios";
import "../src/api/mock"
Vue.config.productionTip = false
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.use(Container);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form)
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Option);
Vue.use(Switch);
Vue.use(DatePicker);
Vue.use(Dialog);
Vue.use(Pagination);

Vue.use(VueRouter);
Vue.prototype.$http=http;

// router.beforeEach((to,from,next)=>{
//   store.commit("user/getToken")
//   const token = store.state.user.token
//   if (!token&& to.name!=='login'){
//     next({name:'login'})
//   }else next()
// })
new Vue({
  router:router,
  store,
  render: h => h(App),
}).$mount('#app')
