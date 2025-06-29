import type {QuestionCreateModel} from "../../@types/types.ts";
import {BEARER} from "../constants.ts";
import {request} from "./instances.ts";
import axios from "axios";

export const createQuestion = async(
    token: string, model: QuestionCreateModel, id: string): Promise<string> => {

    const header = {
        "Content-Type": "application/json",
        "Authorization": `${BEARER} ${token}`
    };

    try{
        const response = await request.post(`http://62.68.131.75:8686/api/v1/quizzes/${id}/questions`, model, {headers: header});

        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error);
        }
        throw new Error("Неудалось создать вопрос!");
    }
}