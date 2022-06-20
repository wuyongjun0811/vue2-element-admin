import Cookie from 'js-cookie'
export default {
    namespaced:true,
    state:{
        token:"",
    },
    mutations:{
        setToken(state,value){
            state.token=value
            Cookie.set("token",value)
        },
        clearToken(state){
            state.token="",
                Cookie.remove("token")
        },
        getToken(state){
            state.token= state.token||Cookie.get("token")
        }
    }
}