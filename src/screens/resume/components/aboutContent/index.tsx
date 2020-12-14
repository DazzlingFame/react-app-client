import '../../resumeScreenStyles.css'
import * as React from "react";
import {ImageTextHeader} from "../imageTextHeader";
import dogeSmiling from "../../../../assets/images/dogeSmiling.jpg"

export type AboutTexts = {
    sectionName: string,
    header: string,
    text: string,
}

type Props = {
    texts: AboutTexts;
}

export const AboutContent: React.FC<Props> = props => {
    return (
        <div>
            <p className={'bold_subheader_text'}>
                {props.texts.sectionName}
            </p>
            <ImageTextHeader header={props.texts.header} text={props.texts.text} imageSource={dogeSmiling}/>
        </div>
    )
};