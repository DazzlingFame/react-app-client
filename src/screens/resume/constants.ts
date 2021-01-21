import {AboutTexts} from "./components/aboutContent";
import {TextWithTranslation} from "../../utils/localisation";

import logo from '../../assets/images/doge.jpg'
import smilingDoge from '../../assets/images/dogeSmiling.jpg'
import dogePillow from '../../assets/images/dogePillow.jpg'

export const DOGE_IMG = {
    source: logo, desc: 'doge'
};
export const DOGE_SMILING_IMG = {
    source: smilingDoge, desc: 'smilingDoge'
};
export const DOGE_PILLOW_IMG = {
    source: dogePillow, desc: 'dogePillow'
};

export type HeaderLinksText = {
    work: string,
    about: string,
    contacts: string,
}

export type WorkTexts = {
    header: string;
    testing: WorkBlockTexts;
    development: WorkBlockTexts;
}

export type WorkBlockTexts = {
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
            header: 'Привет, я Вячеслав Колесников.',
            text: 'В текущий момент я FrontEnd разработчик в команде клиентского сервиса PROFI.RU. В своей карьере я прошел путь от младшего специалиста ' +
                'по тестированию до Senior QA, а затем, сменив рельс, стал React-Native и React разработчиком. \nЯ закончил "Научно исследовательский университет Московский Институт Электронной ' +
                'Техники" по специальности "Программная инженерия"',
        },
    },
    workTexts: {
        en: {
            header: 'Work',
            testing: {header: 'Testing', mainData: "Hi! In 2017 I graduated from the university and got a job at PROFI.RU as a junior " +
                    "testing specialist, in the future, leaving this position as a Senior QA. I joined the mobile development team and immediately got into work. The mentor quickly taught " +
                    "me how to use Jira as a task and bug tracker, I began to closely engage in functional testing, regression testing, writing test cases and checklists. \n" +
                    "The company had a positive attitude towards employee initiatives, and due to the specialty of the sprints, I started to have free time, and my team lead and I decided to " +
                    "try to automate some of the regressions. From university, I had Java programming skills and the first version of automation was implemented on the BDD framework JBehave, " +
                    "and then, after reflecting on the results, we decided to switch to JS and WebdriverIO. As a result, we have reduced the time for regression testing of both platforms of " +
                    "the mobile application in a team from 1-2 days to 4-6 hours.", skills: 'Jira, BDD, Manual testing, Regression testing, Mobile testing, WDIO, WebdriverIO'},
            development: {
                header: 'Development',
                mainData: "Hi, i'm developer",
                skills: 'JS, CSS, React, React-native, Jira'},
        },
        ru: {
            header: 'Работа',
            testing: {
                header: 'Тестирование',
                mainData: 'Привет, в 2017 году я закончил университет и устроился в PROFI.RU в качестве младшего специалиста по тестированию, ' +
                    'в будущем, покинув эту должность в качестве Senior QA. Я попал в команду мобильной разработки и сразу включился в работу. Ментор быстро научила меня пользоваться Jira в качестве таск и ' +
                    'баг трекера, я начал плотно заниматься функциональным тестированием задач, регрессионным тестированием, составлением тест кейсов и чеклистов. \n' +
                    'Компания положительно относилась к инициативам работников, а из-за особенностей спринтов у меня начало появляться свободное время, и мы с моим тимлидом приняли решение предпринять попытку ' +
                    'автоматизации части регрессов. С университета у меня были навыки программирования на Java и первая версия автоматизации была реализована на BDD фреймворке JBehave, а затем, порефлексировав ' +
                    'над результатами мы решили перейти на JS и WebdriverIO. В итоге мы сократили время регрессионного тестирования обеих платформ мобильного приложения в команде с 1-2 дней до 4-6 часов.',
                skills: 'Jira, BDD, Manual testing, Regression testing, Mobile testing, WDIO, WebdriverIO'},
            development: {header: 'Разработка', mainData: "Привет, я разработчик", skills: 'JS, CSS, React, React-native, Jira'},
        },
    },
};
