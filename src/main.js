//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ListProgressTopics from './components/ListProgressTopics.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('list-progress-topics', ListProgressTopics)

app.mount('#app')
