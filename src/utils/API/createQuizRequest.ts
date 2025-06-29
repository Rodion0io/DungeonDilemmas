import type {QuizCreateModel} from "../../@types/types.ts";
import {BEARER, URL} from "../constants.ts";
import {request} from "./instances.ts";
import axios from "axios";

export const createQuizRequest = async(
    token: string, model: QuizCreateModel) => {

    const header = {
        "Content-Type": "application/json",
        "Authorization": `${BEARER} ${token}`
    };

    try{
        const response = await request.post(`${URL}users/quizzes/`, model, {headers: header});

        return response;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error);
        }
        throw new Error("Неудалось создать квиз!");
    }
}