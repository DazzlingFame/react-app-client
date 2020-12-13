import {Divider} from "../../../../components/divider";
import React, {useState} from "react";
import '../../resumeScreenStyles.css'
import {TablioContent} from "./components/tablioContent";

enum ContentType {
    TABLIO = 'Tablio',
    PHOTO_EDITING = 'PhotoEditing'
}

const navigationConfig: Array<{text: string; type: ContentType}> = [
    {text: 'Tablio', type: ContentType.TABLIO},
    {text: 'Photo Editing', type: ContentType.PHOTO_EDITING},
];

export const WorkContent: React.FC = () => {
    const [content, setContent] = useState('Tablio');
    let contentComponent = null;

    const navigationLinks = navigationConfig.map(item => (
        <div className={content === item.type ?  'navigation_link_container navigation_link_container_selected' : 'navigation_link_container'} onClick={() => setContent(item.type)}>
            <p className={'small_text'}>
                {item.text}
            </p>
        </div>
    ));

    switch (content) {
        case ContentType.PHOTO_EDITING: {
            contentComponent = <p>{'weqwe'}</p>;
            break;
        }
        case ContentType.TABLIO: {
            contentComponent = <TablioContent />;
            break;
        }
    }

    return (
         <div>
             <p className={'bold_subheader_text'}>
                 Work
             </p>
             <div className={'navigation_container'}>
                 <div className={'navigation_links_container'}>
                     {navigationLinks}
                 </div>
                 <Divider />
             </div>
             <div className={'content_container'}>
                 {contentComponent}
             </div>
         </div>
    )
};