import React from "react";
import dogePillow from '../../../../../assets/images/dogePillow.jpg';
import '../../../resumeScreenStyles.css';
import './WorkBlock.css'
import {WorkBlockTexts} from "../../../constants";
import {ImageTextHeader} from "../../../../../components/imageTextHeader";



type Props = {
    texts: WorkBlockTexts;
    imageSource?: string;
    photos: {source: string, desc: string}[];
}

const WorkBlock: React.FC<Props> = props => {
    const photos = props.photos.map(photo => (
        <img src={photo.source} alt={photo.desc} style={{width: '30%', marginRight: 20, marginTop: 20, objectFit: 'contain', userSelect: 'none'}}/>
    ));

    return (
        <div className={'work_block_container'}>
            <ImageTextHeader imageSource={dogePillow} text={props.texts.mainData + '\n' + props.texts.skills} />
            <div className={'work_block_photos_container'}>
                {photos}
            </div>
        </div>
    )
};

export default WorkBlock;
