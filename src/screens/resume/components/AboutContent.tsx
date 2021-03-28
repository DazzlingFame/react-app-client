import '../resumeScreenStyles.css'
import * as React from "react";
import {ImageTextHeader} from "../../../components/imageTextHeader";
import {Images} from "../constants";

export type AboutTexts = {
    sectionName: string,
    header: string,
    text: string,
}

type Props = {
    texts: AboutTexts;
}

const photosArray = [Images.BICYCLE_IMG, Images.WARHAMMER_IMG, Images.SHIVA_IMG];

const AboutContent: React.FC<Props> = props => {
    const photos = photosArray.map(photo => (
        <img key={photo.desc} src={photo.source} alt={photo.desc} className="flat_photo__item"/>
    ));
    return (
        <div>
            <p className={'bold_subheader_text'}>
                {props.texts.sectionName}
            </p>
            <ImageTextHeader header={props.texts.header} text={props.texts.text} imageSource={Images.ABOUT_ME_IMG}/>
            <div className="flat_photo__container">
                {photos}
            </div>
        </div>
    )
};

export default AboutContent;
