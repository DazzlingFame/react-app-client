import React from "react";
import logo from '../../../assets/images/doge.jpg';
import './tablioContentStyles.css'
import {DOGE_IMG, TABLIO_TEXT} from "./constants";

const photosArray: Array<{source: string, desc: string}> = [
    DOGE_IMG, DOGE_IMG, DOGE_IMG, DOGE_IMG, DOGE_IMG, DOGE_IMG, DOGE_IMG, DOGE_IMG, DOGE_IMG, DOGE_IMG, DOGE_IMG, DOGE_IMG
];

export const TablioContent: React.FC = () => {
    const photos = photosArray.map(photo => (
        <img src={photo.source} alt={photo.desc} style={{width: '30%', marginRight: 20, marginTop: 20}}/>
    ));

    return (
        <div className={'tablio_content_container'}>
            <div className={'tablio_content_header_container'}>
                <img src={logo} alt={'doge'} className={'tablio_content_logo'}/>
                <p className={'small_text'}>
                    {TABLIO_TEXT}
                </p>
            </div>
            <div className={'tablio_content_photos_container'}>
                <img src={logo} alt={'bigDoge'} style={{width: '80%', marginRight: 20, marginTop: 20}}/>
                {photos}
            </div>
        </div>
    )
};