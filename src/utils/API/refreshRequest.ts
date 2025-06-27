import type {RefreshTokenRequestModel, TokenResponseModel} from "../../@types/types.ts";
import {request} from "./instances.ts";
import {URL} from "../constants.ts";
import axios from "axios";

export const refreshRequest =
    async(model: RefreshTokenRequestModel): Promise<TokenResponseModel> => {

    const header = {
        "Content-Type": "application/json",
    };

    try{
        const response = await request.post(`${URL}users/refresh-token`, model, {headers: header});

        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error);
        }
        throw new Error("Не удалось обновить токен!");
    }
}