import {homePageConstants as _} from "../constants/homePageConstatns";

const initialState = {
    isOnTop: true,
    heroPhoto: {},
    curatedPhotos:{}
}

export function homePageReducer(state = initialState,action){
    switch (action.type) {
        case _.SET_SCROLL_FLAG:
            return{
                ...state,
                isOnTop: action.payload
            }

        default:
            return state
    }
}