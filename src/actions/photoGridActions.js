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

export const photoGridActions = {
    setColumns
}