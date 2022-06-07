import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { i18n } from './language/i18n'
import { useI18n } from 'vue-i18n'
const app = createApp(App, {
    setup() {
        const { t } = useI18n()
        return { t }
    },
})
app.use(i18n)
app.use(store)
app.use(router)
app.mount('#app')
