import React from "react";
import './resumeScreenStyles.css'
import {WorkContent} from "./components/workContent";
import {AboutContent} from "./components/aboutContent";

type PropsType = {

}

export class Resume extends React.PureComponent<PropsType> {
    workRef: React.RefObject<HTMLDivElement> | null;
    aboutRef: React.RefObject<HTMLDivElement> | null;
    contactsRef: React.RefObject<HTMLDivElement> | null;

    constructor(props: PropsType) {
        super(props);
        this.workRef = React.createRef<HTMLDivElement>();
        this.aboutRef = React.createRef<HTMLDivElement>();
        this.contactsRef = React.createRef<HTMLDivElement>();
    }

    headerLinksConfig: Array<{text: string; onClick: () => void}> = [
        {text: 'Work', onClick: () => {
                this.workRef?.current && this.workRef.current.scrollIntoView({behavior: "smooth", block: "start"});
        }},
        {text: 'About', onClick: () => {
                this.aboutRef?.current && this.aboutRef.current.scrollIntoView({behavior: "smooth", block: "start"});
            }},
        {text: 'Contacts', onClick: () => {
                this.contactsRef?.current && this.contactsRef.current.scrollIntoView({behavior: "smooth", block: "start"});
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
                        Welcome to my resume
                    </p>
                    <div ref={this.workRef}>
                        <WorkContent />
                    </div>
                    <div ref={this.aboutRef}>
                        <AboutContent />
                    </div>
                    <div ref={this.contactsRef}>
                        <p>
                            Contacts
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}