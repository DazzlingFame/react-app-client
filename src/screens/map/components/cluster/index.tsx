import {Placemark} from "react-yandex-maps";
import React from "react";

const image = require('../../../../images/Ellipse@2x.png');

type PropsType = {
    location: {x: number, y: number},
    onClick: () => void,
}

export const Cluster: React.FC<PropsType> = ({location, onClick}) =>(
    <Placemark defaultGeometry={[location.x, location.y]}
               onClick={onClick}
               properties={{
                   iconContent: '122',
               }}
               options={{
                   iconLayout: 'default#imageWithContent',
                   iconImageHref: image,
                   iconImageSize: [30, 30],
               }}
    />
)
