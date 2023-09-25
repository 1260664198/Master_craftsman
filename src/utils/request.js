// 二次封装axios
import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
    baseURL: '', // 基础路径
    timeout: 5000,  // 超时时间
})

// 请求拦截器
request.interceptors.request.use((config) => {

    return config // 返回配置对象
})

// 响应拦截器
request.interceptors.response.use((response) => {
    return response.data
},(error) => {
    // 失败回调:处理http网络错误信息
    let message = ''
    const status = error.response.status
    switch(status) {
        case 401:
            message = 'Token已过期!'
            break
        case 403:
            message = '无权访问!'
            break
        case 404:
            message = '请求地址错误!'
            break
        case 500:
            message = '服务器挂掉了!'
            break
        default:
            message = '网络异常,请重试!'

    }
    // 提示错误信息
    ElMessage({
        type: 'error',
        message
    })
    return Promise.reject(error)
})

// 对外暴露
export default request