import ModalWindow from "../../modalWindow/ModalWindow.tsx";
import {useState} from "react";
import type {QuizCreateModel} from "../../../@types/types.ts";

import styles from "./createrQuiz.module.css"
import Input from "../../ui/input/Input.tsx";
import Select from "../../ui/select/Select.tsx";
import Button from "../../ui/button/Button.tsx";
import {ACCESS} from "../../../utils/constants.ts";
import {createQuizRequest} from "../../../utils/API/createQuizRequest.ts";
import {type NavigateFunction, useNavigate} from "react-router-dom";
import {ROUTES} from "../../../utils/routes.ts";
import {ERROR_MESSAGES} from "../../../utils/errorMessages.ts";

interface CreaterQuizProps {
    modalActive: boolean;
    setModalActive: ()=> void;
}

const CreaterQuiz = ({ modalActive, setModalActive }: CreaterQuizProps) => {

    const [quiz, setQuiz] = useState<QuizCreateModel>({title: "", description: "", quizDifficulty: "Unknown"});
    const navigate: NavigateFunction = useNavigate();
    const [errorCode, setErrorCode] = useState(0);

    const handleChange = (value: string, input: keyof QuizCreateModel) => {
        setQuiz((prev) => (
            {...prev, [input]: value}
        ))
    };

    const handleClick = async () => {
        const token: string | null = localStorage.getItem(ACCESS);

        if (quiz.title.length < 1 || quiz.title.length > 64){
            setErrorCode(12)
        }

        if (token){

            try {
                setErrorCode(0);
                await createQuizRequest(token, quiz);

                navigate(ROUTES.MAINPAGE);
            }
            catch (e) {
              console.error(e);
            }
        }
    }

    return (
        <>
            <ModalWindow
                modalActive={modalActive}
                setModalActive={setModalActive}
            >
                <div className={styles.modalContainer}>
                    <h2 className="title">Создание квиза</h2>
                    <Input
                        text="Название квиза"
                        type="text"
                        name="name"
                        inputChange={(value) => handleChange(value, "title")}
                    />
                    <Input
                        text="Описание квиза"
                        type="text"
                        name="description"
                        inputChange={(value) => handleChange(value, "description")}
                    />
                    <Select
                        valuesArr={["", "Easy", "Medium", "Hard"]}
                        name="difficulty"
                        onChanger={(value) => handleChange(value, "quizDifficulty")}
                    />
                    {errorCode !== 0 ?
                        <p className="error-message">{ERROR_MESSAGES[errorCode]}</p>:
                        null
                    }
                    <Button
                        variant='button'
                        text="Применить"
                        buttonType="default"
                        onClick={handleClick}
                    />
                </div>
            </ModalWindow>
        </>
    )
}

export default CreaterQuiz;