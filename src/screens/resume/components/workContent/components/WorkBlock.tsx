import React from "react";
import dogePillow from '../../../../../assets/images/dogePillow.jpg';
import './WorkBlock.css'
import {DOGE_IMG, DOGE_PILLOW_IMG, DOGE_SMILING_IMG} from "../../../constants";
import {WorkBlockTexts} from "../../../constants";
import {ImageTextHeader} from "../../../../../components/imageTextHeader";

const photosArray: Array<{source: string, desc: string}> = [
    DOGE_IMG, DOGE_SMILING_IMG, DOGE_PILLOW_IMG
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
            <ImageTextHeader imageSource={dogePillow} text={props.texts.mainData} />
            <div className={'work_block_photos_container'}>
                {photos}
            </div>
        </div>
    )
};

export default WorkBlock;