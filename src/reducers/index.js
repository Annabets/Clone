import {combineReducers} from "redux";
import {homePageReducer} from "./homePage";
import {searchPageReducer} from "./searchPage";
import {photoGridReducer} from "./photoGrid";

export const rootReducer = combineReducers({
    homePage: homePageReducer,
    searchPage: searchPageReducer,
    photoGrid: photoGridReducer
})