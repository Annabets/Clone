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
        photoService.loadRandomPhoto().then(
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

function getCuratedPhotos() {
    return (dispatch, getState) => {
        dispatch({
            type: _.GET_CURATED_PHOTOS_REQUEST
        })
        photoService.loadCuratedPhotos(getState().homePage.curatedPhotos.length + 1).then(
            page => {
                dispatch({
                    type: _.GET_CURATED_PHOTOS_SUCCESS,
                    payload: page
                })
            },
            errorMessage => {
                dispatch({
                    type: _.GET_CURATED_PHOTOS_FAILURE,
                    payload: errorMessage
                })
            }
        )
    }
}

export const homePageActions = {
    setScrollFlag,
    getHeroPhoto,
    getTags,
    getCuratedPhotos
}