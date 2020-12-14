import {AboutTexts} from "./components/aboutContent";
import {TextWithTranslation} from "../../utils/localisation";

export type HeaderLinksText = {
    work: string,
    about: string,
    contacts: string,
}

type MultiLanguageTexts = {
    headerLinks: TextWithTranslation<HeaderLinksText>
    aboutTexts: TextWithTranslation<AboutTexts>,
}

export const multiLanguageTexts: MultiLanguageTexts = {
    headerLinks: {
        en: {
            work: 'Work',
            about: 'About',
            contacts: 'Contacts',
        },
        ru: {
            work: 'Работа',
            about: 'Обо мне',
            contacts: 'Контакты',
        },
    },
    aboutTexts: {
        en: {
            sectionName: 'About',
            header: 'Hi, I’m Viacheslav Kolesnikov.',
            text: 'Just a good guy',
        },
        ru: {
            sectionName: 'Обо мне',
            header: 'Привет, я Вячеслав Колесников',
            text: 'Просто хороший человек',
        },
    },
};
