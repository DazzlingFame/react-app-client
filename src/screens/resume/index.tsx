import React from "react";
import './resumeScreenStyles.css'
import {WorkContent} from "./components/workContent";
import {AboutContent} from "./components/aboutContent";
import {getLocalisedTexts, LocaleEnum} from "../../utils/localisation";
import {HeaderLinksText, multiLanguageTexts} from "./constants";

type Props = {

}

type State = {
    locale: LocaleEnum;
}

export class Resume extends React.PureComponent<Props, State> {
    workRef: React.RefObject<HTMLDivElement> | null;
    aboutRef: React.RefObject<HTMLDivElement> | null;
    contactsRef: React.RefObject<HTMLDivElement> | null;

    constructor(props: Props) {
        super(props);
        this.workRef = React.createRef<HTMLDivElement>();
        this.aboutRef = React.createRef<HTMLDivElement>();
        this.contactsRef = React.createRef<HTMLDivElement>();

        this.state = {
            locale: LocaleEnum.en,
        }
    }

    getHeaderLinksConfig = ({work, about, contacts}: HeaderLinksText) => ([
        {text: work, onClick: () => {
                this.workRef?.current && this.workRef.current.scrollIntoView({behavior: "smooth", block: "start"});
        }},
        {text: about, onClick: () => {
                this.aboutRef?.current && this.aboutRef.current.scrollIntoView({behavior: "smooth", block: "start"});
            }},
        {text: contacts, onClick: () => {
                this.contactsRef?.current && this.contactsRef.current.scrollIntoView({behavior: "smooth", block: "start"});
            }},
        {text: 'RU', onClick: () => {
                this.setState({
                    locale: LocaleEnum.ru,
                })
            }},
        {text: 'EN', onClick: () => {
                this.setState({
                    locale: LocaleEnum.en,
                })
            }}
    ]);

    render() {
        const headerLinks = this.getHeaderLinksConfig(getLocalisedTexts(multiLanguageTexts.headerLinks, this.state.locale)).map(item => (
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
                        <AboutContent texts={getLocalisedTexts(multiLanguageTexts.aboutTexts, this.state.locale)}/>
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