import React from "react";
import '../../resumeScreenStyles.css'
import {LocaleEnum} from "../../../../utils/localisation";
import Selector from "../../../../components/selector";
import {SelectorItem} from "../../../../components/selector/Selector";

type Props = {
    initialState?: LocaleEnum;
    onStateChanged: (pickedState: SelectorItem) => void;
}

export const languageStates: SelectorItem[] = [
    {
        code: LocaleEnum.en,
        text: 'English'
    },
    {
        code: LocaleEnum.ru,
        text: 'Русский'
    }
];

const LanguageSelector: React.FC<Props> = (props: Props) => {
    return (
        <Selector
            initialStateCode={
                props.initialState
                    ? languageStates.find(item => item.code === props.initialState)?.code ?? languageStates[0].code
                    : languageStates[0].code
            }
            items={languageStates}
            onStateChanged={props.onStateChanged}
            />
    )
};

export default LanguageSelector;