import {URL} from "../constants.ts";

import axios from "axios";
import type {TokenResponseModel, UserLoginModel} from "../../@types/types.ts";
import {notAuthorizedRequestAuth} from "./instances.ts";

export const authorizationRequest = async(
    model: UserLoginModel
): Promise<TokenResponseModel> => {
    try{
        const response = await notAuthorizedRequestAuth.post(`${URL}auth/login`, model);

        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error);
        }
        throw new Error("Не удалось авторизоваться!");
    }
}