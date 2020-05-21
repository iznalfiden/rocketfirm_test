import React, { useState } from 'react'
import Masonry from 'react-masonry-component'
import Hover from './Hover'


function ListPhotos({ photos }) {
    const [hoveredId, setHoveredId] = useState("")

    let elements = []

    for (let key of photos) {
        elements.push(key.map(photo => (
            <div style={{ border: "none" }} className="card p-4 mt-5"
                onMouseOver={() => setHoveredId(photo.id)}
                onMouseLeave={() => setHoveredId("")}
                key={photo.id}
            >
                <ul>
                    <li className="list-unstyled">
                      <img src={photo.urls.small}
                            className="card-img rounded"
                            alt={photo.description}
                            style={hoveredId === photo.id ? { filter: 'blur(4px)', width: "100%" } : null}
                            />
                    </li>
                </ul>
                    <div className="card-img-overlay d-flex justify-content-center align-items-center">
                        <div className="container">
                            <div className="row mt-5">
                                <div className="col">
                                    <div className="d-flex justify-content-center align-items-start">
                                        <div className="d-flex pl-5">
                                            {hoveredId === photo.id ? <Hover photoFromList={photo} /> : null}
                                        </div>
                                    </div>
                                </div>
                            </div>       
                        </div>
                    </div>
            </div>
        )))
    }


    return (

                <Masonry elementType={"div"}>
                    {elements}
                </Masonry>
    )
}

export default ListPhotos