// import { useState } from 'react'
import { Link } from "react-router-dom"
import ArtworkThumbnail from "./ArtworkThumbnail"

function Gallery({ paintings }) {

    const renderPaintings = paintings.map( (painting) => {
        return (
            <Link 
                key={painting.id}
                to={{pathname: `/painting/${painting.id}`}}
                style={{textDecoration: "none", color: "black" }}
                >        
                <ArtworkThumbnail painting={painting} />
            </Link>
        )
        }
    )

    return (
        <div className="gallery">
            {renderPaintings}
        </div>
    )
}

export default Gallery