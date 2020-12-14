import {AboutTexts} from "./components/aboutContent";
import {TextWithTranslation} from "../../utils/localisation";

export const DEFAULT_CONTENT = 'Tablio';

type MultiLanguageTexts = {
    aboutTexts: TextWithTranslation<AboutTexts>
}

export const multiLanguageTexts: MultiLanguageTexts = {
    aboutTexts: {
        en: {
            sectionName: 'About',
            header: 'qwe',
            text: 'qwe',
        },
        ru: {
            sectionName: 'Обо мне',
            header: 'Привет, я Вячеслав Колесников',
            text: 'Просто хороший человек',
        },
    },
};
