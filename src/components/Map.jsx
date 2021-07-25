import React, { useState, useEffect } from 'react'
import { MapContainer, ImageOverlay, Marker, Tooltip } from 'react-leaflet'
import { Control } from "leaflet";
import leaflet from 'leaflet'
import markers from '../markers'
import floors from '../floors'
import './Map.scss'

import 'leaflet/dist/leaflet.css';

import { WatermarkControl } from './WatermarkControl';

function Map({ onSelectMarker, currentFloor, setCurrentFloor }) {

    const [constrollButtons, setConstrollButtons] = useState({
        prizemie: leaflet.DomUtil.create('button'),
        pos1: leaflet.DomUtil.create('button'),
        pos2: leaflet.DomUtil.create('button')
    })

    const changeFloor = (floorName) => {

        setCurrentFloor(floorName)

        switch (floorName) {
            case floors.PRIZEMIE:
                constrollButtons.prizemie.disabled = true;
                constrollButtons.pos1.disabled = false;
                constrollButtons.pos2.disabled = false;
                break;
        
            case floors.POS1:
                constrollButtons.prizemie.disabled = false;
                constrollButtons.pos1.disabled = true;
                constrollButtons.pos2.disabled = false;
                break;
            case floors.POS2:
                constrollButtons.prizemie.disabled = false;
                constrollButtons.pos1.disabled = false;
                constrollButtons.pos2.disabled = true;
                break;
        }
    }

    useEffect(() => {
        Control.Watermark = Control.extend({
            onAdd: function (map) {
                let controlPanel = leaflet.DomUtil.create('div');
                controlPanel.classList.add("control-list");
                
        
                constrollButtons.prizemie.classList.add("control-item")
                constrollButtons.prizemie.innerHTML = "Prízemie"
                constrollButtons.prizemie.disabled = currentFloor === floors.PRIZEMIE
                constrollButtons.prizemie.onclick = () => changeFloor(floors.PRIZEMIE)
        
                constrollButtons.pos1.classList.add("control-item")
                constrollButtons.pos1.innerHTML = "1. Poschodie"
                constrollButtons.pos1.disabled = currentFloor === floors.POS1
                constrollButtons.pos1.onclick = () => changeFloor(floors.POS1)
        
                constrollButtons.pos2.classList.add("control-item")
                constrollButtons.pos2.innerHTML = "2. Poschodie"
                constrollButtons.pos2.disabled = currentFloor === floors.POS2
                constrollButtons.pos2.onclick = () => changeFloor(floors.POS2)
        
                controlPanel.appendChild(constrollButtons.prizemie);
                controlPanel.appendChild(constrollButtons.pos1);
                controlPanel.appendChild(constrollButtons.pos2);
        
                return controlPanel;
            },
        
            onRemove: function (map) {},
        });
    }, [])
 

    return (
        <MapContainer 
            center={{lat: 1200, lng: 1500}}
            zoom={-1.5}
            crs={leaflet.CRS.Simple} 
            minZoom={-2} 
            maxZoom={1.5} 
            zoomControl={false}
            imageOverlay=""
            maxBounds={[[-1000,-2000], [4000,5000]]}
            maxBoundsViscosity={0.1}>

                <ImageOverlay bounds={[[0,0], [3000,3000]]} url={FLOOR_PLANS[currentFloor]} zIndex={10} />
                <WatermarkControl />

                { markers[currentFloor].map(marker => (
                    <Marker 
                        key={marker.position}
                        position={marker.position} 
                        icon={ICON} 
                        eventHandlers={{
                            click: () => {
                                onSelectMarker(marker)
                            },
                            mouseover: (e) => {
                                e.target.openPopup()
                            },
                            onMouseOut: (e) => {
                                e.target.closePopup();
                            }
                        }} 
                    >
                        <Tooltip className="tooltip">
                            { marker.title }
                        </Tooltip>
                    </Marker>
                )) }

        </MapContainer>
    )
}

const FLOOR_PLANS = {
    PRIZEMIE: "img/maps/prizemie.png",
    POS1: "img/maps/pos1.png",
    POS2: "img/maps/pos2.png"
}

const ICON = leaflet.icon({
    iconUrl: 'img/mark.png',
    iconSize:     [25, 25], // size of the icon
    iconAnchor:   [12.5, 12.5], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

export default Map
