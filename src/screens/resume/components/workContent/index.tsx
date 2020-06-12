import {Divider} from "../../../../components/divider";
import React, {useState} from "react";
import {selectedContentLinkStyle} from "../../constants";
import '../../resumeScreenStyles.css'
import {TablioContent} from "./components/tablioContent";

type ContentType = 'Tablio' | 'PhotoEditing';

const navigationConfig: Array<{text: string; type: ContentType}> = [
    {text: 'Tablio', type: "Tablio"},
    {text: 'Photo Editing', type: "PhotoEditing"},
];

export const WorkContent: React.FC = () => {
    const [content, setContent] = useState('Tablio');
    let contentComponent = null;

    const navigationLinks = navigationConfig.map(item => (
        <div className={'navigation_link_container'} onClick={() => setContent(item.type)} style={ content === item.type ? selectedContentLinkStyle : undefined}>
            <p className={'small_text'}>
                {item.text}
            </p>
        </div>
    ));

    switch (content) {
        case "PhotoEditing": {
            contentComponent = <p>{'weqwe'}</p>;
            break;
        }
        case "Tablio": {
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
}