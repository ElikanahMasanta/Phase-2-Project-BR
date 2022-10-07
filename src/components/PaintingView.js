import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArtworkDetails from "./ArtworkDetails";
import ErrorPage from "./ErrorPage";

function PaintingView() {
    const { id } = useParams();
    const [painting, setPainting] = useState([])
    const [error, setError] = useState("")
       
    function fetchPainting(){
        fetch(`https://br-gallery-project.herokuapp.com/paintings/${id}`)
          .then(response => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
              } else {
                throw Error(response.statusText);
              }
            })
          .then(painting => setPainting(painting))
          .catch(error => setError("404: We couldn't find your requested painting.", error))
    }

    useEffect( () => {
        fetchPainting()
        // eslint-disable-next-line
        }, [])
        
    if (error.length > 1) {
        return <ErrorPage error={error} />
    }

    return (
        <ArtworkDetails painting={painting} />
    )
}

export default PaintingView