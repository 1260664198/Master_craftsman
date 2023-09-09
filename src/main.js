import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)

// 先挂载ElementPlus插件，然后传递选项
app.use(ElementPlus, { locale: zhCn })

// 清除默认样式
import '@/styles/reset.css'

// 再挂载路由
import routes from './router'
app.use(routes)

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

app.component('QuillEditor', QuillEditor)

app.mount('#app')
