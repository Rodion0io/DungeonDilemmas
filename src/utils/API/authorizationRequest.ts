import {URL} from "../constants.ts";

import axios from "axios";
import type {TokenResponseModel, UserLoginModel} from "../../@types/types.ts";
import {request} from "./instances.ts";

export const authorizationRequest = async(
    model: UserLoginModel
): Promise<TokenResponseModel> => {

    const header = {
        "Content-Type": "application/json",
    };

    try{
        const response = await request.post(`${URL}auth/login`, model, {headers: header});

        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error);
        }
        throw new Error("Не удалось авторизоваться!");
    }
}