import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Footer from "./components/Footer.vue"

import './assets/main.css'


/* import the fontawesome core */
import { library } from '../node_modules/@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '../node_modules/@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)


const app = createApp(App)

app.component('Footer', Footer)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
