import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)

// 先挂载ElementPlus插件，然后传递选项
app.use(ElementPlus, { locale: zhCn })

// scss全局变量
import '@/styles/index.scss'

// 再挂载路由
import routes from './router'
app.use(routes)

// 引入pinia仓库
import pinia from './store'
app.use(pinia)

// 引入路由鉴权
import './permission'

// 富文本编辑器
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

app.component('QuillEditor', QuillEditor)

app.mount('#app')
