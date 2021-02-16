import '../resumeScreenStyles.css'
import * as React from "react";
import {ImageTextHeader} from "../../../components/imageTextHeader";
import {ABOUT_ME_IMG, BICYCLE_IMG, SHIVA_IMG, WARHAMMER_IMG} from "../constants";

export type AboutTexts = {
    sectionName: string,
    header: string,
    text: string,
}

type Props = {
    texts: AboutTexts;
}

const photosArray = [BICYCLE_IMG, WARHAMMER_IMG, SHIVA_IMG];

const AboutContent: React.FC<Props> = props => {
    const photos = photosArray.map(photo => (
        <img key={photo.desc} src={photo.source} alt={photo.desc} className="flat_photo__item"/>
    ));
    return (
        <div>
            <p className={'bold_subheader_text'}>
                {props.texts.sectionName}
            </p>
            <ImageTextHeader header={props.texts.header} text={props.texts.text} imageSource={ABOUT_ME_IMG.source}/>
            <div className="flat_photo__container">
                {photos}
            </div>
        </div>
    )
};

export default AboutContent;