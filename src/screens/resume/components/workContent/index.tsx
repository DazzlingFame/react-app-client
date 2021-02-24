import {Divider} from "../../../../components/divider";
import React, {useState} from "react";
import '../../resumeScreenStyles.css'
import WorkBlock from "./components";
import {ALLURE_IMG, DOGE_PILLOW_IMG, WorkTexts} from "../../constants";

enum ContentType {
    TABLIO = 'Tablio',
    PHOTO_EDITING = 'PhotoEditing'
}

type Props = {
    texts: WorkTexts;
}

export const WorkContent: React.FC<Props> = props => {
    const [content, setContent] = useState('Tablio');
    let contentTexts = props.texts.testing;
    let photosArray: Array<{source: string, desc: string}> = [];

    const navigationConfig: Array<{text: string; type: ContentType}> = [
        {text: props.texts.testing.header, type: ContentType.TABLIO},
        {text: props.texts.development.header, type: ContentType.PHOTO_EDITING},
    ];

    const navigationLinks = navigationConfig.map(item => (
        <div className={content === item.type ?  'navigation_link_container navigation_link_container_selected' : 'navigation_link_container'} onClick={() => setContent(item.type)}>
            <p className={'small_text'}>
                {item.text}
            </p>
        </div>
    ));

    switch (content) {
        case ContentType.PHOTO_EDITING: {
            contentTexts = props.texts.development;
            photosArray = [
                DOGE_PILLOW_IMG
            ];
            break;
        }
        case ContentType.TABLIO: {
            contentTexts = props.texts.testing;
            photosArray = [ALLURE_IMG];
            break;
        }
    }

    return (
         <div>
             <p className={'bold_subheader_text'}>
                 {props.texts.header}
             </p>
             <div className={'navigation_container'}>
                 <div className={'navigation_links_container'}>
                     {navigationLinks}
                 </div>
                 <Divider />
             </div>
             <div className={'content_container'}>
                 <WorkBlock texts={contentTexts} photos={photosArray} />
             </div>
         </div>
    )
};
