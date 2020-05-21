import * as React from 'react'
import FavoritesForm from './FavoritesForm'
import PhotoDownload from './PhotoDownload'
import UserInfo from './UserInfo'
import UserAvatar from './UserAvatar'
import { Link } from 'react-router-dom'


function Hover({ photoFromList }) {
    

    return (
        <div className="container">
            <div className="row">
                <div className="col pb-5">
                    <div className="d-flex justify-content-center align-items-center">
                        <UserAvatar userFromList={photoFromList.user} />
                    </div>
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <UserInfo userFromList={photoFromList.user} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col pb-5 d-flex justify-content-center align-items-center">
                    <div>
                        <FavoritesForm photoFromList={photoFromList} />
                    </div>
                    <div>
                        <Link to={`/${photoFromList.id}`}>
                            <img src="maximize.png" alt="maximize"></img>
                        </Link>
                    </div>
                    <div>
                        <PhotoDownload linkFromList={photoFromList.links}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hover