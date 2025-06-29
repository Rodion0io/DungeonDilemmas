import type {QuestionsModel} from "../../../../../@types/types.ts";

interface QuestionProps{
    model: QuestionsModel;
}

const QuestionCard = ({ model }: QuestionProps) => {

    return (
        <>
            <article className="answerCard">
                <div className="card-container">
                    <h2 className="title">{`${model.questionNumber}) ${model.questionText}`}</h2>
                    <p className="time">{`Время: ${model.duration}сек.`}</p>
                </div>
            </article>
        </>
    )
}

export default QuestionCard;