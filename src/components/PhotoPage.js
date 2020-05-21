import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getSinglePhoto } from '../store/Photo/PhotoAction'
import PhotoItem from './PhotoItem';
import Tags from './Tags'
import FavoritesForm from './FavoritesForm';
import PhotoDownload from './PhotoDownload';
import RelatedPhotos from './RelatedPhotos';
import PhotoPageHeader from './PhotoPageHeader';
import UserInfo from './UserInfo'
import UserAvatar from './UserAvatar'


function PhotoPage(props) {
    const dispatch = useDispatch()
    const singlePhoto = useSelector(state => state.photo.items)

    useEffect(() => {
        const { params } = props.match
        dispatch(getSinglePhoto(params.id))
    }, [props.match, dispatch])

    const { urls, user, tags, related_collections, links } = singlePhoto
 

    const styles = {
        backgroundImage: `url(${urls ? urls.full : null})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    return (
        <div>
            <PhotoPageHeader />
            <div style={styles} className="container-fluid">
                <div className="container">
                    <div className="row pt-4">
                        <div className="col d-flex justify-content-start align-items-center-start">
                            <div className="pl-3">
                                <UserAvatar userFromSingle={user} />
                            </div>
                            <div className="d-flex align-items-center justify-content-center flex-column pl-2">
                                <UserInfo userFromSingle={user} />
                            </div>
                        </div>
                        <div className="col d-flex justify-content-end align-items-center">
                            <div className="row">
                                <div className="col-5 d-flex justify-content align-items-center">
                                    <FavoritesForm photoFromSingle={singlePhoto} />
                                </div>
                                <div className="col-auto d-flex justify-content-end align-items-center">
                                    <PhotoDownload linksFromSingle={links} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <div className="d-flex justify-content-center">
                                <PhotoItem photoUrl={urls} />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <div className="d-flex align-items-center justify-content-center">
                                <h4 className="text-white">Похожие теги</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center justify-content-center mb-3">
                                <Tags tags={tags} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col mt-5 justify-content-center align-items-center">
                        <h3 className=" d-flex justify-content-center">Похожие фотографии</h3>
                        <RelatedPhotos collectionId={related_collections} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoPage