import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia' // pinia

const app = createApp(App) //
app.use(createPinia()) // pinia

app.mount('#app')