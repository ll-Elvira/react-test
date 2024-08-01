import axios from 'axios'


//创建实例
const instance = axios.create({
    baseURL:"/api",
    timeout:5000,
    // headers: {
    //     'x-auth-skip-sign': 'SKIP_SIGN',
    //     'x-auth-skip-encrypt': 'SKIP_ENCRYPT'
    // }

})

//拦截器
instance.interceptors.request.use(config=>{
    console.log("请求被拦截")
    return config
},error=>{
    console.log("请求失败")
})

instance.interceptors.response.use(res=>{
    console.log("响应被拦截")
    return res.data
},error=>{
    return error
})

export default instance;