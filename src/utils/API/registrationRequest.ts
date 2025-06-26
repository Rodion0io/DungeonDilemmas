import type {TokenResponseModel, UserRegisterModel} from "../../@types/types.ts";
import {notAuthorizedRequestAuth} from "./instances.ts";
import {URL} from "../constants.ts";
import axios from "axios";

export const registrationRequest = async(
    model: UserRegisterModel
): Promise<TokenResponseModel> => {
    try{
        const response = await notAuthorizedRequestAuth.post(`${URL}auth/register`, model);

        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error);
        }
        throw new Error("Не удалось зарегестрироваться!");
    }
}