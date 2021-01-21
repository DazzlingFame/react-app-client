import React from "react";
import './imageTextHeaderStyles.css'

type PropsType = {
    imageSource: string;
    header?: string;
    text: string;
}

export const ImageTextHeader: React.FC<PropsType> = (props: PropsType) => {
    const textBlocks = props.text.split('\n').map(textBlock => (
        <p className={'small_text image_header_text'}>
            {textBlock}
        </p>
    ));
    return (
        <div className={'header_container'}>
            <img src={props.imageSource} alt={'doge'} className={'logo'}/>
            <div style={{flexDirection: 'column'}}>
                {props.header && (
                    <text className={'small_text image_header_text'}> {props.header} <br/></text>
                )}
                {textBlocks}
            </div>
        </div>
    )
};