import type {UserEditPasswordModel} from "../../@types/types.ts";
import {BEARER, URL} from "../constants.ts";
import {request} from "./instances.ts";
import axios from "axios";

export const editPasswordProfile = async(
    token: string, model: UserEditPasswordModel) => {

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
        throw new Error("Неудалось обновить пароль!");
    }
}