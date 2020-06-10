import {YMaps, Map, Placemark, YMapsProps, YMapsApi} from "react-yandex-maps";
import React, {Ref} from "react";
import '../../index.css'
import {DEFAULT_COORDS, getRandomMarkerData, setIntelZoom} from "./utils";
import {Cluster} from "./components/cluster";
import {Pin} from "./components/pin";



export const MapScreen: React.FC = () => {
    let mapRef: Ref<any> = React.createRef();
    const [zoom, setZoom] = React.useState(9);
    const [center, setCenter] = React.useState([DEFAULT_COORDS.x, DEFAULT_COORDS.y]);
    const [template, setTemplate] = React.useState();

    // const fact = (ymaps: YMapsApi) => {
    //     if (ymaps && !template) {
    //         // setTemplate({
    //         //     template: ymaps.templateLayoutFactory.createClass(),
    //         // });
    //     }
    // };

    const mapState = React.useMemo(() => ({ zoom, center }), [
        center,
        zoom,
    ]);

    const onClusterPress = (marker: {x: number, y: number}) => {
        setZoom(zoom => setIntelZoom(zoom));
        setCenter(() => [marker.x, marker.y]);
    };

    const getMarkers = (markersData: Array<{x: number, y: number}>) => (
        markersData.map(marker => (Math.floor(Math.random() * 10) % 2 ?
            <Pin location={marker} onPress={() => {onClusterPress(marker)}} key={marker.x}/> :
                <Cluster location={marker} onClick={() => {onClusterPress(marker)}} key={marker.x}/>
        ))
    );

        return (
                <YMaps>
                    <Map instanceRef={ref => mapRef = ref}
                         state={mapState}
                         style={{height: 1000, width: 1000}}
                         // onLoad={fact}
                         defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                         modules={['control.ZoomControl', 'control.FullscreenControl', 'layout.ImageWithContent']}>
                        {getMarkers(getRandomMarkerData())}
                        <Cluster location={{x: 55.75, y: 34.54}}  onClick={() => onClusterPress({x: 55.75, y: 34.54})}/>
                    </Map>
                </YMaps>
        )
};