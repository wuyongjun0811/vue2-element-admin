import vueConfig from "../../vueConfig"
import axios from "axios";
//axios二次封装
//对环境的改变 来改变接口请求的地址
const  baseUrl =vueConfig.baseUrl

class HttpRequest{
    constructor() {
        this.baseUrl=baseUrl
    }
    getInsideConfig(){
        return {
            baseUrl: this.baseUrl,
            header: {}
        }
    }
    interCeptors(instance){
        // Add a request interceptor
        instance.interceptors.request.use(function (config) {
            // Do something before request is sent
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

// Add a response interceptor
        instance.interceptors.response.use(function (response) {
            // Do something with response data
            return response;
        }, function (error) {
            // Do something with response error
            return Promise.reject(error);
        });
        }
    request(options){
        const instance=axios.create()
        options={...this.getInsideConfig(),...options}
        this.interCeptors(instance)
        return instance(options)
    }
}
export default new HttpRequest(baseUrl)