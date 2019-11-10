import {homePageConstants as _} from '../constants/homePageConstatns';

function setScrollFlag(value) {
    return{
        type: _.SET_SCROLL_FLAG,
        payload: value
    }
}

export const homePageActions = {
    setScrollFlag
}