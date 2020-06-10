import {Placemark} from "react-yandex-maps";
import React from "react";

const image = require('../../../../images/pin@2x.png');

type PropsType = {
    location: {x: number, y: number},
    onPress: () => void,
}

export const Pin: React.FC<PropsType> = ({location, onPress}) =>(
    <Placemark defaultGeometry={[location.x, location.y]}
               onClick={onPress}
               properties={{
               }}
               options={{
                   iconLayout: 'default#image',
                   iconImageHref: image,
                   iconImageSize: [24, 30],
               }}
    />
)
