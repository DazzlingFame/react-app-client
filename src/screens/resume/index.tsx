import React from "react";
import './resumeScreenStyles.css'
import {WorkContent} from "./components/workContent";


type PropsType = {

}

type StateType = {
}

export class Resume extends React.PureComponent<PropsType, StateType> {
    headerLinksConfig: Array<{text: string; onClick: () => void}> = [
        {text: 'Work', onClick: () => alert('work')}
    ];

    render() {
        const headerLinks = this.headerLinksConfig.map(item => (
            <div className={'header_link_container'} onClick={item.onClick}>
                <p className={'regular_text'}>
                    {item.text}
                </p>
            </div>
        ));

        return (
            <div className={'root_container'}>
                <div className={'container'}>
                    <div className={'nav_header_container'}>
                        <p className={'nav_header_text'}>
                            Slava K.
                        </p>
                        {headerLinks}
                    </div>
                    <p className={'bold_header_text'}>
                        Welcome to my portfoolio
                    </p>
                    <WorkContent />
                </div>
            </div>
        )
    }
}