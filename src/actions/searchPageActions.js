import {searchPageConstants as _} from "../constants/searchPageConstants";
import {photoService} from "../services/photoService";

function getSearchPhotos(query) {
    return (dispatch, getState) => {
        dispatch({
            type: _.GET_SEARCH_PHOTOS_REQUEST
        })
        photoService.loadSearchPhotos(query, getState().searchPage.searchPhotos.length + 1).then(
            page => {
                dispatch({
                    type: _.GET_SEARCH_PHOTOS_SUCCESS,
                    payload: page
                })
            },
            errorMessage => {
                dispatch({
                    type: _.GET_SEARCH_PHOTOS_FAILURE,
                    payload: errorMessage
                })
            }
        )
    }
}

export const searchPageActions = {
    getSearchPhotos
}