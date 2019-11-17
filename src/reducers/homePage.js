import {homePageConstants as _} from "../constants/homePageConstatns";

const initialState = {
    isOnTop: true,
    tags:[],
    heroPhoto: {},
    curatedPhotos:[],
    isLoadingPhotos: false
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

        default:
            return state
    }
}