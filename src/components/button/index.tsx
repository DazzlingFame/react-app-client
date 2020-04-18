import React from "react";
import './buttonStyles.css'

type PropsType = {
    text: string;
    onClick: () => void;
}

export const Button = ({text, onClick}: PropsType) => {
    return (
        <div className={'buttonContainer'} onClick={onClick}>
            <p className={'buttonText'}>
                {text}
            </p>
        </div>
    )
};