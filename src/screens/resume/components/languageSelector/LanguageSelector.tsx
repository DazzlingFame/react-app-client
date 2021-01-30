import React, {useState} from "react";
import {CHEVRON_DOWN} from "../../constants";
import './LanguageSelector.css'
import '../../resumeScreenStyles.css'
import {LocaleEnum} from "../../../../utils/localisation";

export type SelectorItem = {
    code: LocaleEnum;
    text: string;
}

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
    const [currentState, setCurrentState] = useState<SelectorItem>(
        props.initialState
            ? languageStates.find(item => item.code === props.initialState) ?? languageStates[0]
            : languageStates[0]
    );
    const [isSelectorVisible, setIsSelectorVisible] = useState<boolean>(false);
    const toggleItems = languageStates.map(toggleState => (
        <div className="dropdown-selector__selected-container"
             onClick={() => {
                setCurrentState(toggleState);
                props.onStateChanged(toggleState);
                setIsSelectorVisible(false);
            }
        }>
            <text className="small_text dropdown-selector__selected-text">
                {toggleState.text}
            </text>
        </div>
    ));

    const changeIsSelectorVisibleState = () => setIsSelectorVisible(!isSelectorVisible);

    return (
        <div className={'dropdown-selector__container'}>
            <div className={'dropdown-selector__current-container'} onClick={changeIsSelectorVisibleState}>
                <text className="regular_text dropdown-selector__current-text">
                    {currentState.text}
                </text>
                <img className={'dropdown-selector__chevron'} alt={CHEVRON_DOWN.desc} src={CHEVRON_DOWN.source}/>
            </div>
            {isSelectorVisible &&
                <div className={'dropdown-selector__selector-container'}>
                    {toggleItems}
                </div>
            }
        </div>
    )
};

export default LanguageSelector;