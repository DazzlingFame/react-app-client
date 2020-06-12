import React, {RefObject} from "react";
import './resumeScreenStyles.css'
import {WorkContent} from "./components/workContent";
import {AboutContent} from "./components/aboutContent";


type PropsType = {

}

type StateType = {
}

export class Resume extends React.PureComponent<PropsType, StateType> {
    aboutRef: React.RefObject<HTMLDivElement> | null;
    constructor(props: PropsType) {
        super(props);
        this.aboutRef = React.createRef<HTMLDivElement>();
    }

    headerLinksConfig: Array<{text: string; onClick: () => void}> = [
        {text: 'Work', onClick: () => alert('work')},
        {text: 'About', onClick: () => {
            console.log('!', this.aboutRef, this.aboutRef?.current?.offsetTop);
            this.aboutRef?.current && window.scrollTo({top: this.aboutRef.current.offsetTop});
            }}
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
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            {headerLinks}
                        </div>
                    </div>
                    <p className={'bold_header_text'}>
                        Welcome to my portfoolio
                    </p>
                    <WorkContent />
                    <div ref={this.aboutRef} style={{backgroundColor: "red"}}>
                        <AboutContent />
                    </div>
                </div>
            </div>
        )
    }
}