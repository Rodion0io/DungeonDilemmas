import type {FilterModel} from "../@types/types.ts";

export const createrUrl = (model: FilterModel) => {
    let url: string = "";

    if (model.title){
        url += `title=${model.title}&`;
    }
    if (model.description){
        url += `description=${model.description}&`;
    }
    if (model.difficulty){
        url += `difficulty=${model.difficulty}&`;
    }
    if (model.creatorEmail){
        url += `creatorEmail=${model.creatorEmail}&`;
    }
    url += `page=${model.page}&pageSize=5`;

    return url;
}