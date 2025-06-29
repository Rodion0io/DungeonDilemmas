import {BEARER, URL} from "../constants.ts";
import {request} from "./instances.ts";
import axios from "axios";
import type {UserEditModel} from "../../@types/types.ts";

export const editProfileRequest = async(
    token: string, model:UserEditModel) => {

    const header = {
        "Content-Type": "application/json",
        "Authorization": `${BEARER} ${token}`
    };

    try{
        const response = await request.put(`${URL}users/profile/edit-password`, model, {headers: header});

        return response;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error);
        }
        throw new Error("Неудалось обновить персональные данные!");
    }
}