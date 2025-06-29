import type {QuizPagedListModel} from "../../@types/types.ts";
import {BEARER, URL} from "../constants.ts";
import {request} from "./instances.ts";
import axios from "axios";

export const getQuizezPage = async(token: string, partUrl: string): Promise<QuizPagedListModel> => {

    const header = {
        "Content-Type": "application/json",
        "Authorization": `${BEARER} ${token}`
    };

    try{
        const response = await request.get(`${URL}quizzes?${partUrl}`, {headers: header});

        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error);
        }
        throw new Error("Не удалось получить профиль!");
    }
}