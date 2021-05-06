import React from 'react'
import './Loading.scss'

function Loading({loadedImages, allImages}) {
    return (
        <div className="loading-screen">
            <div className="text">
                Sťahujem panoramatické obrázky ({ loadedImages } / {allImages}), počkajte prosím. 
            </div>
            <div className="progress-bar">
                <div className="bar" style={{ flex: loadedImages/allImages }}></div>
            </div>
        </div>
    )
}

export default Loading
