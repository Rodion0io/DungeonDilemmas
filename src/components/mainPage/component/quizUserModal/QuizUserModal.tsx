import ModalWindow from "../../../modalWindow/ModalWindow.tsx";
import type {AnswerCreateModel, QuestionCreateModel, QuizDetailModel} from "../../../../@types/types.ts";
import styles from "../../../quizPage/createrQuiz/createrQuiz.module.css";
import QuestionCard from "./answerCard/QuestionCard.tsx";
import Button from "../../../ui/button/Button.tsx";
import {deleteQuiz} from "../../../../utils/API/deleteQuiz.ts";
import {ACCESS} from "../../../../utils/constants.ts";
import {ROUTES} from "../../../../utils/routes.ts";
import {useState} from "react";
import {createQuestion} from "../../../../utils/API/createQuestion.ts";
import Input from "../../../ui/input/Input.tsx";
import {createAnswer} from "../../../../utils/API/createAnswer.ts";
import Select from "../../../ui/select/Select.tsx";



interface QuizCardProps {
    modalActive: boolean;
    setModalActive: () => void;
    details: QuizDetailModel;
}

const QuizUserModal = ({ modalActive, setModalActive, details }: QuizCardProps) => {

    const handleDelete = async() => {
        const token = localStorage.getItem(ACCESS);

        if (token){
            try {
                await deleteQuiz(token, details.id);
                window.location.href = ROUTES.MAINPAGE;
            }
            catch (error) {
                console.error(error);
            }
        }
    }

    const [isCreatedQuestion, setIsCreatedQuestion] = useState(false);
    const [questions, setQuestions] = useState<QuestionCreateModel>({duration: 0, damage: 0, reward: 0, questionType: "choice", questionText: ""});

    const addQuestion = async() => {
        const token = localStorage.getItem(ACCESS);

        if (token){
            try {
                await createQuestion(token, questions, details.id);
                window.location.href = ROUTES.MAINPAGE;
            }
            catch (e) {
                console.error(e);
            }
        }
    }

    const handleChangeQuestion = (value: string, input: keyof QuestionCreateModel) => {
        setQuestions((prev) => ({
            ...prev,
            [input]: ['duration', 'damage', 'reward'].includes(input)
                ? Number(value) || 1
                : value
        }))
    }


    const [isCreatedAnswer, setIsCreatedAnswer] = useState(false);
    const [newAnswer, setNewAnswer] = useState<AnswerCreateModel>({answerType: "", answerType1: "", text: ""});

    const handleChangeAnswer = (value: string, input: keyof AnswerCreateModel) => {
        setNewAnswer((prev) => ({
            ...prev,
            [input]: value
        }))
    }

    const addAnswer = async() => {
        const token = localStorage.getItem(ACCESS);

        if (token){
            try {
                await createAnswer(token, newAnswer, details.id);
                window.location.href = ROUTES.MAINPAGE;
            }
            catch (e) {
                console.error(e);
            }
        }
    }



    return (
        <>
            <ModalWindow modalActive={modalActive} setModalActive={setModalActive}>
                <div className={styles.modalContainer}>
                    {isCreatedQuestion ?
                        <>
                            <Input
                                text="Время"
                                type="text"
                                name="time"
                                inputChange={(value) => handleChangeQuestion(value, "duration")}
                            />
                            <Input
                                text="повреждение"
                                type="text"
                                name="name"
                                inputChange={(value) => handleChangeQuestion(value, "damage")}
                            />
                            <Input
                                text="награда"
                                type="text"
                                name="name"
                                inputChange={(value) => handleChangeQuestion(value, "reward")}
                            />
                            <Input
                                text="Описание"
                                type="text"
                                name="name"
                                inputChange={(value) => handleChangeQuestion(value, "questionText")}
                            />
                            <Button
                                variant='button'
                                text="Добавить"
                                buttonType="default"
                                onClick={addQuestion}
                            />
                            <Button
                                variant='button'
                                text="Назад"
                                buttonType="default"
                                onClick={() => setIsCreatedQuestion(false)}
                            />
                        </>
                        : isCreatedAnswer ?
                            <>
                                <Select
                                    questions={details.questions}
                                    name="difficulty"
                                    // onChanger={(value) => handleChange(value, "quizDifficulty")}
                                />

                                <Input
                                    text="описание"
                                    type="text"
                                    name="answer"
                                    inputChange={(value) => handleChangeAnswer(value, "text")}
                                />

                                <Button
                                    variant='button'
                                    text="Добавить"
                                    buttonType="default"
                                    onClick={addAnswer}
                                />
                                <Button
                                    variant='button'
                                    text="Назад"
                                    buttonType="default"
                                    onClick={() => setIsCreatedAnswer(false)}
                                />
                            </>:
                        <>
                            <h2 className="title">{details.title}</h2>
                            <p className={styles.description}>{details.description}</p>
                            <div className={styles.otherInfa}>
                                {details.difficulty !== "Unknown" ?
                                    <span
                                        className={`${styles.difficulty} ${details.difficulty === "Easy"
                                            ? `${styles.easy}`
                                            : details.difficulty === "Medium" ?
                                                `${styles.medium}` : `${styles.hard}`}`}
                                    >
                                {details.difficulty}
                            </span>:
                                    null
                                }
                                <span
                                    className={styles.author}
                                    // id={details.creator.id}
                                >
                            {`${details.creator?.userName}, Почта: ${details.creator?.email}`}
                        </span>
                            </div>
                            {details.questions ? details.questions.map((item, index) => (
                                <QuestionCard
                                    key={index}
                                    model={item}
                                />
                            )): null}
                            <div className="actions-block">
                                <Button
                                    variant='button'
                                    text="Опубликовать"
                                    buttonType="default"
                                    // onClick={handleClick}
                                />
                                <Button
                                    variant='button'
                                    text="Удалить"
                                    buttonType="default"
                                    onClick={handleDelete}
                                />
                                <Button
                                    variant='button'
                                    text="Добавить вопрос"
                                    buttonType="default"
                                    onClick={() => setIsCreatedQuestion(true)}
                                />
                                <Button
                                    variant='button'
                                    text="Добавить ответ"
                                    buttonType="default"
                                    onClick={() => setIsCreatedAnswer(true)}
                                />
                            </div>
                        </>
                    }

                </div>
            </ModalWindow>
        </>
    )
}

export default QuizUserModal;