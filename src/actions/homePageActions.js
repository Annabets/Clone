import {homePageConstants as _} from '../constants/homePageConstatns';
import {photoService} from "../services/photoService";
import {searchCategoriesService} from "../services/searchCategoriesService";

function setScrollFlag(value) {
    return{
        type: _.SET_SCROLL_FLAG,
        payload: value
    }
}

function getHeroPhoto() {
    return dispatch => {
        dispatch({
            type: _.GET_HERO_PHOTO_REQUEST
        })
        photoService.getRandomPhoto().then(
            photo => {
                dispatch({
                    type: _.GET_HERO_PHOTO_SUCCESS,
                    payload: photo.photos[0]
                })
            },
            errorMessage => {
                dispatch({
                    type: _.GET_HERO_PHOTO_FAILURE,
                    payload: errorMessage
                })
            }
        )
    }
}

function getTags() {
    return{
        type: _.GET_TAGS,
        payload: searchCategoriesService.generateTags()
    }
}

export const homePageActions = {
    setScrollFlag,
    getHeroPhoto,
    getTags
}