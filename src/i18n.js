import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import hr from './locales/hr.json'

function loadLocaleMessages() {
  const locales = [{ EN: en }, { HR: hr }]
  const messages = {}
  locales.forEach(lang => {
    const key = Object.keys(lang)
    messages[key] = lang[key] 
  })
  return messages
}

export default createI18n({
  locale: 'EN', 
  fallbackLocale: 'EN',
  messages: loadLocaleMessages()
})
