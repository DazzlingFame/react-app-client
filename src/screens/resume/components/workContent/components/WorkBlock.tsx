import React from "react";
import logo from '../../../../../assets/images/doge.jpg';
import dogePillow from '../../../../../assets/images/dogePillow.jpg';
import './WorkBlock.css'
import {DOGE_IMG, DOGE_PILLOW_IMG, DOGE_SMILING_IMG} from "../../../constants";
import {ImageTextHeader} from "../../imageTextHeader";
import {WorkBlockTexts} from "../../../constants";

const photosArray: Array<{source: string, desc: string}> = [
    DOGE_IMG, DOGE_SMILING_IMG, DOGE_PILLOW_IMG, DOGE_SMILING_IMG, DOGE_SMILING_IMG, DOGE_PILLOW_IMG, DOGE_IMG, DOGE_IMG, DOGE_SMILING_IMG, DOGE_SMILING_IMG, DOGE_PILLOW_IMG, DOGE_IMG
];

type Props = {
    texts: WorkBlockTexts;
    imageSource?: string;
}

const WorkBlock: React.FC<Props> = props => {
    const photos = photosArray.map(photo => (
        <img src={photo.source} alt={photo.desc} style={{width: '30%', marginRight: 20, marginTop: 20, objectFit: 'contain'}}/>
    ));

    return (
        <div className={'work_block_container'}>
            <ImageTextHeader imageSource={dogePillow} text={props.texts.mainData}/>
            <div className={'work_block_photos_container'}>
                <img src={logo} alt={'bigDoge'} style={{width: '80%', marginRight: 20, marginTop: 20}}/>
                {photos}
            </div>
        </div>
    )
};

export default WorkBlock;