import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import pl from './languages/pl'
import ru from './languages/ru'

const resources = {
    pl: pl,
    ru: ru
};
i18n
    .use(initReactI18next)
    .init({
        debug: true,
        resources,
        lng: "pl",
        keySeparator: '.',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n
