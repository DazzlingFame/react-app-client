import React from "react";
import logo from '../../../../../../assets/images/doge.jpg';
import dogePillow from '../../../../../../assets/images/dogePillow.jpg';
import './tablioContentStyles.css'
import {DOGE_IMG, DOGE_PILLOW_IMG, DOGE_SMILING_IMG, TABLIO_TEXT} from "./constants";
import {ImageTextHeader} from "../../../imageTextHeader";

const photosArray: Array<{source: string, desc: string}> = [
    DOGE_IMG, DOGE_SMILING_IMG, DOGE_PILLOW_IMG, DOGE_SMILING_IMG, DOGE_SMILING_IMG, DOGE_PILLOW_IMG, DOGE_IMG, DOGE_IMG, DOGE_SMILING_IMG, DOGE_SMILING_IMG, DOGE_PILLOW_IMG, DOGE_IMG
];

export const TablioContent: React.FC = () => {
    const photos = photosArray.map(photo => (
        <img src={photo.source} alt={photo.desc} style={{width: '30%', marginRight: 20, marginTop: 20, objectFit: 'contain'}}/>
    ));

    return (
        <div className={'tablio_content_container'}>
            <ImageTextHeader imageSource={dogePillow} text={TABLIO_TEXT}/>
            <div className={'tablio_content_photos_container'}>
                <img src={logo} alt={'bigDoge'} style={{width: '80%', marginRight: 20, marginTop: 20}}/>
                {photos}
            </div>
        </div>
    )
};