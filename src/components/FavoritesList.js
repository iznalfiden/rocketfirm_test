import * as React from 'react'
import { Link } from 'react-router-dom'
import Masonry from 'react-masonry-component'
import PhotoPageHeader from './PhotoPageHeader'


function Favorites() {

    let favorites = []
    let test = Object.entries(localStorage)
    for (let key of test) {
        if (!key[0].startsWith('s')) {
            favorites.push(key)
        }
    }

    const styles = {
        padding: "40px"
    }


    const elements = favorites.map(item => (
        <li key={item[0]} className="list-unstyled d-flex justify-content-center">
            <Link to={`/${item[0]}`} >
                <img style={styles} src={item[1]} alt="favorites" />
            </Link>
        </li>
    ))

    return (
        <div>
            <PhotoPageHeader />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col d-flex justify-content-center pt-5">
                        <h1>Избранное</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Masonry elementType={"ul"}>{elements}</Masonry>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Favorites