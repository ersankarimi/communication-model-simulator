import { createApp } from 'vue'
// @ts-expect-error
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
