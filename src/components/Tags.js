import React from 'react'
import { v4 as uuid } from 'uuid'


function Tags({ tags }) {
    
    const sortedTags = tags ? tags.slice(0, 5) : null

    const listTags = sortedTags ? sortedTags.map(tag => (
        <li style={{
            borderRadius: "8px",
            background: "white"
        }} key={uuid()} className="list-unstyled list-inline-item m-3 p-2">{tag.title}</li>
    )) : null

    return (
        <ul>
            {listTags}
        </ul>
    )
}

export default Tags;