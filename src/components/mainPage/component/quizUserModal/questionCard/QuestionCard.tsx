import type {QuestionsModel} from "../../../../../@types/types.ts";

import "./questionCard.css"
import {ACCESS} from "../../../../../utils/constants.ts";
import {deleteQuestion} from "../../../../../utils/API/deleteQuestion.ts";
import {ROUTES} from "../../../../../utils/routes.ts";

interface QuestionProps {
    model: QuestionsModel;
    onClick?: (answers: QuestionsModel["answers"]) => void;
}

const QuestionCard = ({ model, onClick }: QuestionProps) => {

    const deleteQuestions = async () => {
        const token = localStorage.getItem(ACCESS);

        if (token) {
            try {
                await deleteQuestion(token, model.id);
                window.location.href = ROUTES.MAINPAGE;
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <article className="answerCard" onClick={() => onClick?.(model.answers)}>
            <div className="card-container">
                <div className="infa-block">
                    <h2 className="title-question">{`${model.questionNumber}) ${model.questionText}`}</h2>
                    <p className="time">{`Время: ${model.duration}сек.`}</p>
                </div>
                <p
                    className="delete"
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteQuestions();
                    }}
                >
                    X
                </p>
            </div>
        </article>
    );
};

export default QuestionCard;

