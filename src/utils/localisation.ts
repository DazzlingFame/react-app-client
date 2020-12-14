export type TextWithTranslation<T> = {en: T; ru: T}
export enum LocaleEnum {
    ru,
    en,
}

type LocalisedTextGetter = <T>(text: TextWithTranslation<T>, locale: LocaleEnum) => T;
export const getLocalisedTexts: LocalisedTextGetter = (text, locale) =>  {
    switch (locale) {
        case LocaleEnum.en:
            return text.en;
        case LocaleEnum.ru:
            return text.ru;
        default:
            return text.en;
    }
};
