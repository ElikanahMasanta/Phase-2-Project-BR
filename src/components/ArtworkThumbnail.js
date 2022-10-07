function ArtworkThumbnail( { painting }){
    const {img_src, painting_title} = painting

    return (
        <div className="artwork-thumbnail">
            <div>
                <img className="thumbnail" src={img_src} alt={painting_title} />
            </div>
            <div className="thumb-title">
                <h5>{painting_title}</h5>
            </div>
        </div>
        
    )
}

export default ArtworkThumbnail