import type {QuestionAnswer} from "../../../../../@types/types.ts";

import "./answerCard.css"
import {deleteAnswer} from "../../../../../utils/API/deleteAnswer.ts";
import {ACCESS} from "../../../../../utils/constants.ts";
import {ROUTES} from "../../../../../utils/routes.ts";
import CheckIcon from "../../../../../assets/check-mark-button-svgrepo-com.svg"
import {request} from "../../../../../utils/API/instances.ts";

interface Props{
    props: QuestionAnswer;
}

const AnswerCard = ({ props }: Props) => {

    const handleDelete = async() => {
        const token: string | null = localStorage.getItem(ACCESS);


        if (token){
            try {
                await deleteAnswer(token, props.id);
                window.location.href = ROUTES.MAINPAGE;
            }
            catch (error) {
                console.error(error);
            }
        }
    }

    const handleCheck = async() => {
        const token: string | null = localStorage.getItem(ACCESS);

        if (token){
            try {
                const response = await request.put(`http://62.68.131.75:8686/api/v1/quizzes/questions/${props.questionId}/answers/${props.id}`)
                if (response.status === 200) {
                    alert("Ответ выбран как правильный")
                }
            }
            catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <>
            <article className="answer-card">
                <div className="answer-card__container">
                    <p className="name">{props.text}</p>
                    <div style={{display: "flex", justifyContent: "space-between", gap: "5px"}}>
                        <p onClick={handleCheck}><img className="answer-card__container-check" src={CheckIcon}/> </p>
                        <p className="delete" onClick={handleDelete}>X</p>
                    </div>
                </div>
            </article>
        </>
    )
}
export default AnswerCard;