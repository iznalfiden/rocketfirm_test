import React from 'react'
import { useSelector } from 'react-redux'
import Masonry from 'react-masonry-component'
import { Link } from "react-router-dom"
import PhotoPageHeader from './PhotoPageHeader'



export default function SearchedPhotosList() {
    const list = useSelector(state => state.searchPhoto.items)
    

    let elements = []
    for (let key of list) {

        elements.push(key.results.map(item => (
            <Link to={`/${item.id}`}>
                <ul>
                    <li key={item.id} className="list-unstyled">
                        <img src={item.urls.small} alt={item.description || item.alt_description} />
                    </li>
                </ul >
            </Link >
        )))
    }


    return (
        <>
            <PhotoPageHeader />
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <h1>Результат поиска</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col ml-5">
                        <Masonry>
                            {elements}
                        </Masonry>
                    </div>
                </div>
            </div>

        </>
    )
}