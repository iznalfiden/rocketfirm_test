import React from 'react'
import { v4 as uuid } from 'uuid'
import PhotoPageHeader from './PhotoPageHeader'

function SearchHistory() {

    let historyValues = []
    let keys = Object.keys(localStorage)
    for (let key of keys) {
        if (key.startsWith('s')) {
            historyValues.push(localStorage.getItem(key))
        }
    }

    console.log(historyValues, 'values')


    return (
        <div>
            <PhotoPageHeader />
            <div className="container">
                <div className="row pt-3">
                    <div className="col d-flex justify-content-center">
                        <h1>Ваши запросы</h1>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col d-flex justify-content-center">
                        <ul>
                            {historyValues.map(item => (
                                <li className="list-unstyled list-inline-item " key={uuid()}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SearchHistory