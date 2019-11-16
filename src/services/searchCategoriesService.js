import {items} from '../assets/categories';

function generateTags() {
    let i, tags=[];
    while(tags.length<7){
        i = Math.floor(Math.random() * 39);
        if(!tags.some((value)=>{return value===items[i]})){
            tags.push(items[i]);
        }
    }
    return tags;
}

export const searchCategoriesService = {
    generateTags
}