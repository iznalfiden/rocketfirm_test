import * as React from 'react'


function FavoritesForm({ photoFromList, photoFromSingle }) {
    const addFavorites = () => photoFromList ? localStorage.setItem(photoFromList.id, photoFromList.urls.small) : localStorage.setItem(photoFromSingle.id, photoFromSingle.urls.small)
    
    const styles = {
        background: "#FFFFFF",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "8px",
        height: "49.24px"
    }
    return (
        
            <button style={photoFromSingle ? styles : null}  type="button" className="btn" onClick={addFavorites}>
                <img src={photoFromSingle ? "addFavoriteButton.png" : "favoriteHover.png"} alt="addFavoriteButton" />
            </button>
        
    )
}

export default FavoritesForm