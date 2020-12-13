import React from "react";
import './imageTextHeaderStyles.css'
import '../../resumeScreenStyles.css'

type PropsType = {
    imageSource: string;
    header?: string;
    text: string;
}

export const ImageTextHeader: React.FC<PropsType> = (props: PropsType) => (
    <div className={'header_container'}>
        <img src={props.imageSource} alt={'doge'} className={'logo'}/>
        <div style={{flexDirection: 'column'}}>
            {props.header && (
                <text className={'small_text image_header_text'}> {props.header} <br/> </text>
            )}
            <text className={'small_text image_header_text'}>
                {props.text}
            </text>
        </div>
    </div>
);