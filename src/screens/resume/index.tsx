import React from "react";
import './resumeScreenStyles.css'
import {DEFAULT_CONTENT, selectedContentLinkStyle} from "./constants";
import {Divider} from "../../components/divider";
import {TablioContent} from "./components/tablioContent";

type ContentType = 'Tablio' | 'PhotoEditing';

type PropsType = {

}

type StateType = {
    content: ContentType,
}

export class Resume extends React.PureComponent<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            content: DEFAULT_CONTENT,
        }
    }

    setContentType = (content: ContentType) => {
        this.setState({
            content: content,
        })
    };

    headerLinksConfig: Array<{text: string; onClick: () => void}> = [
        {text: 'Work', onClick: () => alert('work')}
    ];

    navigationConfig: Array<{text: string; onClick: () => void, type: ContentType}> = [
        {text: 'Tablio', onClick: () => this.setContentType("Tablio"), type: "Tablio"},
        {text: 'Photo Editing', onClick: () => this.setContentType("PhotoEditing"), type: "PhotoEditing"},
    ];

    render() {
        const headerLinks = this.headerLinksConfig.map(item => (
            <div className={'header_link_container'} onClick={item.onClick}>
                <p className={'regular_text'}>
                    {item.text}
                </p>
            </div>
        ));

        const navigationLinks = this.navigationConfig.map(item => (
            <div className={'navigation_link_container'} onClick={item.onClick} style={ this.state.content === item.type ? selectedContentLinkStyle : undefined}>
                <p className={'small_text'}>
                    {item.text}
                </p>
            </div>
        ));

        let content = null;

        switch (this.state.content) {
            case "PhotoEditing": {
                content = <p>{'weqwe'}</p>;
                break;
            }
            case "Tablio": {
                content = <TablioContent />;
                break;
            }
        }

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
                            <div className={'navigation_container'}>
                                <div className={'navigation_links_container'}>
                                    {navigationLinks}
                                </div>
                                <Divider />
                            </div>
                            <div className={'content_container'}>
                                {content}
                            </div>
                        </div>
                    </div>
                )
    }
}