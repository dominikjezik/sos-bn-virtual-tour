import React, { useEffect } from 'react'
import { ImagePanorama, Viewer, Infospot, DataImage } from 'panolens'
import markers from '../markers'
import './PanoramaView.scss'

function PanoramaView({ selectedMarker, onClosePanorama }) {

    useEffect(() => {
        const scenes = {}
        let imagePanoramaInstances = []

        for (const floorI in markers) {
            if (Object.hasOwnProperty.call(markers, floorI)) {
                const floor = markers[floorI];
                
                for (const marker of floor) {
                    const panoramaImageInstance = new ImagePanorama(`img/panorama/${marker.img}`)
                    scenes[marker.img] = panoramaImageInstance
                    imagePanoramaInstances.push(panoramaImageInstance)
                }
            }
        }

        const viewer = new Viewer({container: document.querySelector("#panorama"), cameraFov: 80});

        for (const floorI in markers) {
            if (Object.hasOwnProperty.call(markers, floorI)) {
                const floor = markers[floorI];
                
                for (const marker of floor) {

                    if(marker.infospots === undefined) {
                        continue
                    }

                    for (let i = 0; i < marker.infospots.length; i++) {

                        const infospotData = marker.infospots[i];
                        
                        const infospot = new Infospot( 500, DataImage.Arrow );
                        infospot.position.set(...infospotData.position);
                        infospot.addHoverText(infospotData.title);
                        
                        infospot.addEventListener('click', function() {
                            viewer.setPanorama( scenes[infospotData.target] );
                        });

                        scenes[marker.img].add(infospot)


                    }

                }
            }
        }

        let clickedPanorama = imagePanoramaInstances.filter(i => i.src === `img/panorama/${selectedMarker.img}`)[0]

        viewer.add(clickedPanorama, ...imagePanoramaInstances);
    }, [])


    return (
        <div className="panorama-view">
            <button className="control-btn" onClick={onClosePanorama}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path className="x" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                Zavrieť panorámu
            </button>
            <div id="panorama"></div>
        </div>
    )
}

export default PanoramaView


/*


        const panorama = new ImagePanorama( 'img/izba1.jpg' );
        const panoramaRado = new ImagePanorama( 'img/izba2.jpg' );
        const panoramaChodba = new ImagePanorama( 'img/chodba.jpg' );
        const panoramaPracovna = new ImagePanorama( 'img/pracovna.jpg' );

        const viewer = new Viewer({container: document.querySelector("#panorama")});

        const infospot = new Infospot( 500, DataImage.Arrow );
        infospot.position.set( 5500, -1200, -550);
        infospot.addHoverText( "Chodba" );
        
        infospot.addEventListener('click', function() {
            viewer.setPanorama( panoramaChodba );
        });

        panorama.add( infospot );



        const infospot2 = new Infospot( 500, DataImage.Arrow );
        infospot2.position.set( -2500, -1200, 5500); // 
        infospot2.addHoverText( "Chodba 2" );
        
        infospot2.addEventListener('click', function() {
            viewer.setPanorama( panoramaChodba );
        });

        panoramaRado.add(infospot2)


        const infospotIzba1 = new Infospot( 500, DataImage.Arrow );
        infospotIzba1.position.set( -200, -1200, 5200);
        infospotIzba1.addHoverText( "Izba 1" );
        
        infospotIzba1.addEventListener('click', function() {
            viewer.setPanorama( panorama );
        });

        panoramaChodba.add( infospotIzba1 );


        const infospotIzba2 = new Infospot( 500, DataImage.Arrow );
        infospotIzba2.position.set( 3000, -1000, -5000);
        infospotIzba2.addHoverText( "Izba 2" );
        
        infospotIzba2.addEventListener('click', function() {
            viewer.setPanorama( panoramaRado );
        });

        panoramaChodba.add( infospotIzba2 );

        const infospotPracovna= new Infospot( 500, DataImage.Arrow );
        infospotPracovna.position.set( 5000, -2000, 1500);
        infospotPracovna.addHoverText( "Pracovna" );
        
        infospotPracovna.addEventListener('click', function() {
            viewer.setPanorama( panoramaPracovna );
        });

        panoramaChodba.add( infospotPracovna );


*/









/*

let panorama, panorama2, viewer;

panorama = new PANOLENS.ImagePanorama( 'img/panorama.jpeg' );
panorama2 = new PANOLENS.ImagePanorama( 'img/panorama.jpeg' );

panorama.link( panorama2, new THREE.Vector3( -807.50, 604.88, -5000.00 ) );
panorama2.link( panorama, new THREE.Vector3( -207.50, 604.88, -5000.00 ) );

viewer = new PANOLENS.Viewer();
viewer.add( panorama, panorama2 );

*/