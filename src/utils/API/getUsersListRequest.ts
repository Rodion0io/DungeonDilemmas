import type {UserOtherModelList} from "../../@types/types.ts";
import {BEARER, URL} from "../constants.ts";
import {request} from "./instances.ts";
import axios from "axios";

export const getUsersListRequest =
    async(token: string, params: string | null): Promise<UserOtherModelList> => {

    const header = {
        "Content-Type": "application/json",
        "Authorization": `${BEARER} ${token}`
    };

    try{
        const response = await request.get(
            `${URL}users/list${params ? `?name=${params}` : ""}`,
            {headers: header}
        );

        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error);
        }
        throw new Error("Не удалось получить список пользователей!");
    }
}