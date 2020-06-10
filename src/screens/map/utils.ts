export const DEFAULT_COORDS = {x: 55.75, y: 37.57};

export const getRandomMarkerData = () => {
    const dataArray = [];
    for (let i = 1; i < 100; i++) {
        dataArray.push({x: DEFAULT_COORDS.x + 0.1 * i *
                Math.sin(30 * Math.PI * i / 180) *
                Math.cos(50 * Math.PI * i / 180) + Math.sin(5 * i / 180), y: DEFAULT_COORDS.y + 0.1 * i *
                Math.cos(70 + 23 * Math.PI * i / 180) *
                Math.cos(50 * Math.PI * i / 180) + Math.sin(5 * i / 180),})
    }
    return dataArray;
};

export const setIntelZoom = (currentZoom: number) => (
     currentZoom < 15 ? currentZoom + 2 : currentZoom + 1
);