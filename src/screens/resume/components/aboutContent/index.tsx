import '../../resumeScreenStyles.css'
import * as React from "react";
import {ImageTextHeader} from "../imageTextHeader";
import dogeSmiling from "../../../../assets/images/dogeSmiling.jpg"
import {ABOUT_HEADER, ABOUT_TEXT} from "./constants";

type PropsType = {
};

export const AboutContent: React.FC<PropsType> = (props: PropsType) => {
    return (
        <div>
            <p className={'bold_subheader_text'}>
                About
            </p>
            <ImageTextHeader header={ABOUT_HEADER} text={ABOUT_TEXT} imageSource={dogeSmiling} roundImage/>
        </div>
    )
}