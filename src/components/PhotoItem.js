import * as React from 'react'

function PhotoItem({ photoUrl }) {
    
    return (
        <>
            <img className="img-fluid" style={{ borderRadius: "8px" }} src={photoUrl ? photoUrl.regular : null} alt={photoUrl ? photoUrl.description || photoUrl.alt_description : null} />
        </>
    )
}

export default PhotoItem