import {homePageConstants as _} from "../constants/homePageConstatns";

const initialState = {
    isOnTop: true,
    tags:[],
    heroPhoto: {},
    curatedPhotos:[],
    isLoadingPhotos: false,
    isUploadFailed: false
}

export function homePageReducer(state = initialState,action){
    switch (action.type) {
        case _.SET_SCROLL_FLAG:
            return{
                ...state,
                isOnTop: action.payload
            }
        case _.GET_HERO_PHOTO_SUCCESS:
            return {
                ...state,
                heroPhoto: action.payload
            }
        case _.GET_TAGS:
            return {
                ...state,
                tags: action.payload
            }
        case _.GET_CURATED_PHOTOS_REQUEST:
            return {
                ...state,
                isLoadingPhotos: true
            }
        case _.GET_CURATED_PHOTOS_SUCCESS:
            return {
                ...state,
                curatedPhotos: state.curatedPhotos.concat(action.payload),
                isLoadingPhotos: false
            }
        case _.GET_CURATED_PHOTOS_FAILURE:
            return {
                ...state,
                isLoadingPhotos: false,
                isUploadFailed: true
            }
        case _.TOGGLE_LIKE:
            return {
                ...state,
                curatedPhotos: state.curatedPhotos.map((page) => {
                    return {
                        ...page,
                        photos: page.photos.map((photo) => {
                            return (photo.id === Number(action.payload)) ? {...photo, liked: !photo.liked} : photo
                        })
                    }
                })
            }

        default:
            return state
    }
}