import { useState } from "react"
import { Link } from "react-router-dom"
import ArtworkThumbnail from "./ArtworkThumbnail"
import MoreButton from "./MoreButton"

function Home( { paintings }) {
    const [paintingIndex, setPaintingIndex] = useState(0)

    const paintingPreview = paintings
            .slice(paintingIndex, paintingIndex + 4)
            .map((painting) => (
                <Link 
                    key={painting.id}
                    to={{pathname: `/painting/${painting.id}`}}
                    style={{textDecoration: "none", color: "black" }}
                >        
                    <ArtworkThumbnail painting={painting} />
                </Link>
            ))

    function handleClickMore() {
        setPaintingIndex((paintingIndex) => (paintingIndex + 4) % paintings.length)
    }        

    return (
        <div className="home"> 
            <h2>Hello there, welcome to the Bob Ross Art Gallery </h2>
            <p>Featuring the paintings Bob created across the many series of <em>"The Joy of Painting"</em>.</p>
            <p>If you want a closer look, just click the painting and take a look.</p>
            <p>Here is a preview of what's in the gallery, if you would like to see it in its entirety, please visit the main gallery.</p>
            <div className="gallery-preview">
                <div className="artwork-preview">
                    {paintingPreview}
                </div>
                    <MoreButton onClickMore={handleClickMore} />
            </div>    
        </div>
    )
}

export default Home