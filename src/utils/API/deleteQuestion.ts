import {BEARER, URL} from "../constants.ts";
import {request} from "./instances.ts";
import axios from "axios";

export const deleteQuestion = async(
    token: string, id: string) => {

    const header = {
        "Content-Type": "application/json",
        "Authorization": `${BEARER} ${token}`
    };

    try{
        const response = await request.delete(`${URL}quizzes/questions/${id}`, {headers: header});

        return response;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error);
        }
        throw new Error("Неудалось удалить квиз!");
    }
}