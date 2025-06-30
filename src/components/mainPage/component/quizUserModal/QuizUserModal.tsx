import { useState } from "react";
import ModalWindow from "../../../modalWindow/ModalWindow.tsx";
import Input from "../../../ui/input/Input.tsx";
import Select from "../../../ui/select/Select.tsx";
import Button from "../../../ui/button/Button.tsx";
import QuestionCard from "./questionCard/QuestionCard.tsx";

import { deleteQuiz } from "../../../../utils/API/deleteQuiz.ts";
import { createQuestion } from "../../../../utils/API/createQuestion.ts";
import { createAnswer } from "../../../../utils/API/createAnswer.ts";

import { ACCESS } from "../../../../utils/constants.ts";
import { ROUTES } from "../../../../utils/routes.ts";

import type { AnswerCreateModel, QuestionCreateModel, QuizDetailModel, AnswerModel } from "../../../../@types/types.ts";

import styles from "../../../quizPage/createrQuiz/createrQuiz.module.css";
import AnswerCard from "./answerCard/AnswerCard.tsx";

interface QuizCardProps {
    modalActive: boolean;
    setModalActive: () => void;
    details: QuizDetailModel;
}

const QuizUserModal = ({ modalActive, setModalActive, details }: QuizCardProps) => {
    const [isCreatedQuestion, setIsCreatedQuestion] = useState(false);
    const [isCreatedAnswer, setIsCreatedAnswer] = useState(false);
    const [isOpend, setIsOpend] = useState(false);

    const [questions, setQuestions] = useState<QuestionCreateModel>({
        duration: 0,
        damage: 0,
        reward: 0,
        questionType: "choice",
        questionText: ""
    });

    const [newAnswer, setNewAnswer] = useState<AnswerCreateModel>({
        answerType: "text",
        answerType1: "text",
        text: ""
    });

    const [selectedQuestion, setSelectedQuestion] = useState<string>("");
    const [selectedAnswers, setSelectedAnswers] = useState<AnswerModel[]>([]);

    const handleDelete = async () => {
        const token = localStorage.getItem(ACCESS);
        if (token) {
            try {
                await deleteQuiz(token, details.id);
                window.location.href = ROUTES.MAINPAGE;
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleChangeQuestion = (value: string, input: keyof QuestionCreateModel) => {
        setQuestions(prev => ({
            ...prev,
            [input]: ['duration', 'damage', 'reward'].includes(input) ? Number(value) || 1 : value
        }));
    };

    const addQuestion = async () => {
        const token = localStorage.getItem(ACCESS);
        if (token) {
            try {
                await createQuestion(token, questions, details.id);
                window.location.href = ROUTES.MAINPAGE;
            } catch (e) {
                console.error(e);
            }
        }
    };

    const handleChangeAnswer = (value: string, input: keyof AnswerCreateModel) => {
        setNewAnswer(prev => ({
            ...prev,
            [input]: value
        }));
    };

    const addAnswer = async () => {
        const token = localStorage.getItem(ACCESS);
        const question = details.questions.find((q) => q.id === selectedQuestion);
        if (question && question.answers.length !== 4) {
            if (token) {
                try {
                    await createAnswer(token, newAnswer, selectedQuestion);
                    window.location.href = ROUTES.MAINPAGE;
                } catch (e) {
                    console.error(e);
                }
            }
        } else {
            console.log("Максимум 4 ответа");
        }
    };

    return (
        <ModalWindow modalActive={modalActive} setModalActive={setModalActive}>
            <div className={styles.modalContainer}>

                {isCreatedQuestion ? (
                    <>
                        <Input text="Время" type="text" name="time" inputChange={(val) => handleChangeQuestion(val, "duration")} />
                        <Input text="Повреждение" type="text" name="damage" inputChange={(val) => handleChangeQuestion(val, "damage")} />
                        <Input text="Награда" type="text" name="reward" inputChange={(val) => handleChangeQuestion(val, "reward")} />
                        <Input text="Описание вопроса" type="text" name="questionText" inputChange={(val) => handleChangeQuestion(val, "questionText")} />
                        <Button text="Добавить" variant="button" buttonType="default" onClick={addQuestion} />
                        <Button text="Назад" variant="button" buttonType="default" onClick={() => setIsCreatedQuestion(false)} />
                    </>
                ) : isCreatedAnswer ? (
                    <>
                        <Select
                            questions={["", ...details.questions]}
                            name="Выбор вопроса"
                            onChanger={(val) => setSelectedQuestion(val)}
                        />
                        <Input text="Ответ" type="text" name="text" inputChange={(val) => handleChangeAnswer(val, "text")} />
                        <Button text="Добавить" variant="button" buttonType="default" onClick={addAnswer} />
                        <Button text="Назад" variant="button" buttonType="default" onClick={() => setIsCreatedAnswer(false)} />
                    </>
                ) : isOpend ? (
                    <>
                        <h3 className="subtitle">Ответы к выбранному вопросу:</h3>
                        {selectedAnswers.length > 0 ? (
                            <ul className='acnswers-block'>
                                {selectedAnswers.map((ans, index) => (
                                    <AnswerCard props={ans} key={index} />
                                ))}
                            </ul>
                        ) : (
                            <p>Ответы отсутствуют</p>
                        )}
                        <Button
                            text="Назад"
                            variant="button"
                            buttonType="default"
                            onClick={() => {
                                setIsOpend(false);
                                setSelectedAnswers([]);
                            }}
                        />
                    </>
                ) : (
                    <>
                        <h2 className="title">{details.title}</h2>
                        <p className={styles.description}>{details.description}</p>

                        <div className={styles.otherInfa}>
                            {details.difficulty !== "Unknown" && (
                                <span
                                    className={`${styles.difficulty} ${details.difficulty === "Easy"
                                        ? styles.easy
                                        : details.difficulty === "Medium"
                                            ? styles.medium
                                            : styles.hard}`}
                                >
                                    {details.difficulty}
                                </span>
                            )}
                            <span className={styles.author}>
                                {`${details.creator?.userName}, Почта: ${details.creator?.email}`}
                            </span>
                        </div>

                        {details.questions?.map((item, index) => (
                            <QuestionCard
                                key={index}
                                model={item}
                                onClick={(answers) => {
                                    setSelectedAnswers(answers);
                                    setIsOpend(true);
                                }}
                            />
                        ))}

                        <div className="actions-block">
                            <Button text="Опубликовать" variant="button" buttonType="default" />
                            <Button text="Удалить" variant="button" buttonType="default" onClick={handleDelete} />
                            <Button text="Добавить вопрос" variant="button" buttonType="default" onClick={() => setIsCreatedQuestion(true)} />
                            <Button text="Добавить ответ" variant="button" buttonType="default" onClick={() => setIsCreatedAnswer(true)} />
                        </div>
                    </>
                )}
            </div>
        </ModalWindow>
    );
};

export default QuizUserModal;
