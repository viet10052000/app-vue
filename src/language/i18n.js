import { createI18n } from 'vue-i18n'
import { en } from './locales/en'
import { vi } from './locales/vi'

//i18next
const i18n = createI18n({
    legacy: false,
    locale: 'vi',
    fallbackLocale: 'vi',
    globalInjection: true,
    messages: {
        en,
        vi,
    },
})
const translate = (key => {
    return i18n.global.t(key);
})
export { i18n , translate }