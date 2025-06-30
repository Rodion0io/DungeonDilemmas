import type {QuestionAnswer} from "../../../../../@types/types.ts";

import "./answerCard.css"
import {deleteAnswer} from "../../../../../utils/API/deleteAnswer.ts";
import {ACCESS} from "../../../../../utils/constants.ts";
import {ROUTES} from "../../../../../utils/routes.ts";

interface Props{
    props: QuestionAnswer
}

const AnswerCard = ({ props }: Props) => {
    // deleteAnswer

    const handleDelete = async() => {
        const token = localStorage.getItem(ACCESS);

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

    return (
        <>
            <article className="answer-card">
                <div className="answer-card__container">
                    <p className="name">{props.text}</p>
                    <p className="delete" onClick={handleDelete}>X</p>
                </div>
            </article>
        </>
    )
}
export default AnswerCard;