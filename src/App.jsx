import { useEffect } from 'react'
import Map from './components/Map'
import PanoramaView from './components/PanoramaView'
import { useState } from 'react'
import floors from './floors'
import { ImageLoader } from 'panolens'
import markers from './markers'
import Loading from './components/Loading'

function App() {
    const [selectedMarker, setSelectedMarker] = useState(null)
    const [selectedFloor, setSelectedFloor] = useState(floors.PRIZEMIE)

    const [allImages, setAllImages] = useState(0)
    const [loadedImages, setLoadedImages] = useState(0)

    useEffect(() => {

        preload()

    }, [])

    const preload = () => {
        for (const floorI in markers) {
            if (Object.hasOwnProperty.call(markers, floorI)) {
                const floor = markers[floorI];
                
                for (const marker of floor) {
                    ImageLoader.load(`/img/panorama/${marker.img}`, () => {
                        // on load
                        setLoadedImages(old => old + 1)
                    }, (loaded, total) => {
                        // on progress
                    }, () => {
                        // on error
                    })

                    setAllImages(old => old + 1)
                }
            }
        }
    }

    return (
        <div className="App">
            <div className="container">
                <div className="frame">
                    <a href="https://spsbn.edupage.org/">
                        <img src="img/logo.png" className="logo" alt=""></img>
                    </a>

                    { allImages === loadedImages ? 
                        (selectedMarker === null ? 
                            <Map currentFloor={selectedFloor} setCurrentFloor={setSelectedFloor} onSelectMarker={ setSelectedMarker } /> :
                            <PanoramaView selectedMarker={selectedMarker} onClosePanorama={ () => setSelectedMarker(null) } />
                        ):
                        <Loading loadedImages={loadedImages} allImages={allImages} />
                    }
                    <a href="https://dominikjezik.sk" className="author-link">Dominik Ježík &copy; { new Date().getFullYear() }</a>
                </div>
            </div>
        </div>
    );
}

export default App;
