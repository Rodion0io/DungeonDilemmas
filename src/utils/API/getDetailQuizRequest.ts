import type {QuizDetailModel} from "../../@types/types.ts";
import {BEARER, URL} from "../constants.ts";
import {request} from "./instances.ts";
import axios from "axios";



export const getDetailQuizRequest = async(token: string, id: string): Promise<QuizDetailModel> => {

    const header = {
        "Content-Type": "application/json",
        "Authorization": `${BEARER} ${token}`
    };

    try{
        const response = await request.get(`${URL}quizzes/${id}/detail`, {headers: header});

        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error);
        }
        throw new Error("Не удалось получить инфу о квизе!");
    }
}