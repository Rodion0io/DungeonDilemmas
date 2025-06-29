import {BEARER, URL} from "../constants.ts";
import {request} from "./instances.ts";
import axios from "axios";

export const deleteQuiz = async(
    token: string, id: string) => {

    const header = {
        "Content-Type": "application/json",
        "Authorization": `${BEARER} ${token}`
    };

    try{
        const response = await request.delete(`${URL}quizzes/{quizId}?quizId=${id}`, {headers: header});

        return response;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error);
        }
        throw new Error("Неудалось удалить квиз!");
    }
}