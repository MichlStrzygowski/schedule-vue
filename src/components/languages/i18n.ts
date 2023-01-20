import { createI18n } from 'vue-i18n'

// setup locale info for root Vue instance
const messages = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    pl: {
        message: {
            hello: 'Cześć'
        }
    }
}

const i18n = createI18n({
    locale: 'pl',
    fallbackLocale: 'en',
    messages
})

export default i18n;
