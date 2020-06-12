import React from "react";
import './imageTextHeaderStyles.css'
import '../../resumeScreenStyles.css'

type PropsType = {
    imageSource: string;
    header?: string;
    text: string;
    roundImage?: boolean;
}

export const ImageTextHeader: React.FC<PropsType> = (props: PropsType) => (
    <div className={'header_container'}>
        <img src={props.imageSource} alt={'doge'} className={'logo'} style={props.roundImage ? {borderRadius: '50%'} : undefined}/>
        <div style={{flexDirection: 'column'}}>
            {props.header && (
                <p className={'small_text'}> {props.header} </p>
            )}
            <p className={'small_text'}>
                {props.text}
            </p>
        </div>
    </div>
);