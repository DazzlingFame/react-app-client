import {AboutTexts} from "./components/aboutContent";
import {TextWithTranslation} from "../../utils/localisation";

export type HeaderLinksText = {
    work: string,
    about: string,
    contacts: string,
}

export type WorkTexts = {
    header: string;
    testing: TestingTexts;
    development: TestingTexts;
}

export type TestingTexts = {
    header: string,
    mainData: string;
    skills: string;
}

export type MainTexts = {
    header: string;
    headerLinks: HeaderLinksText;
    welcome: string;
}

type MultiLanguageTexts = {
    mainTexts: TextWithTranslation<MainTexts>;
    aboutTexts: TextWithTranslation<AboutTexts>,
    workTexts: TextWithTranslation<WorkTexts>,
}

export const multiLanguageTexts: MultiLanguageTexts = {
    mainTexts: {
        en: {
            header: 'Slava. K',
            headerLinks: {
                work: 'Work',
                about: 'About',
                contacts: 'Contacts',
            },
            welcome: 'Welcome to my resume',
        },
        ru: {
            header: 'Вячеслав. К',
            headerLinks: {
                work: 'Работа',
                about: 'Обо мне',
                contacts: 'Контакты',
            },
            welcome: 'Привет в моём резюме'
        }
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
    workTexts: {
        en: {
            header: 'Work',
            testing: {header: 'Testing', mainData: "Hi, i'm tester", skills: 'Jira, BDD, Manual testing'},
            development: {header: 'Development', mainData: "Hi, i'm developer", skills: 'JS, CSS, React, React-native, Jira'},
        },
        ru: {
            header: 'Работа',
            testing: {header: 'Тестирование', mainData: 'Привет, я тестировщик', skills: 'Jira, BDD, Manual testing'},
            development: {header: 'Разработка', mainData: "Привет, я разработчик", skills: 'JS, CSS, React, React-native, Jira'},
        },
    },
};
