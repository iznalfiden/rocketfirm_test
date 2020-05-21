import { combineReducers } from "redux"
import photo from './Photo/PhotoReducer'
import searchPhoto from './Search/SearchReducer'
import relatedPhoto from './RelatedPhotos/RelatedPhotosReducer'
import photos from './Photos/PhotosReducer'
import searchHistory from './SearchHistory/SearchHistoryReducer'


export default combineReducers({
    photo,
    searchPhoto,
    relatedPhoto,
    photos,
    searchHistory,
})