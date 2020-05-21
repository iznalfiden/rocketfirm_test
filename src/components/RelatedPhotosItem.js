import React from 'react'
import Masonry from 'react-masonry-component'
import { Link } from 'react-router-dom'

export default function RelatedPhotosItem({ relatedPhotos }) {


    let elements = []
    for (let i = 0; i < relatedPhotos.length; i++) {
        elements.push(relatedPhotos[i].map(item => (
            <div key={item.id} style={{ border: "none" }} className="card p-4">
                <ul>
                    <Link to={`/${item.id}`}>
                        <li className="list-unstyled">
                            <img className="card-img rounded" src={item.urls.small} alt={item.descripton || item.alt_description}></img>
                        </li>
                    </Link>
                </ul>
            </div>
        )))
    }

    return (
        <Masonry elementType="div">
            {elements}
        </Masonry>
    )
}