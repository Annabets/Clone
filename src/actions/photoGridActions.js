import {photoGridConstants as _} from "../constants/photoGridConstants";

const getArr = (arrSize)=>{
    let i=0, temp=[];
    while(i < arrSize) {temp[i] = i++};
    return temp;
}

function setColumns(colNum) {
    return{
        type: _.SET_COLUMNS,
        payload: getArr(colNum)
    }
}

function setModalOpenFlag(flag) {
    return{
        type: _.SET_MODAL_OPEN_FLAG,
        payload: flag
    }
}

function setModalPhoto(photo) {
    return{
        type: _.SET_MODAL_PHOTO,
        payload: photo
    }
}

export const photoGridActions = {
    setColumns,
    setModalOpenFlag,
    setModalPhoto
}