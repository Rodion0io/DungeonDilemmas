import ModalWindow from "../../modalWindow/ModalWindow.tsx";
import {useState} from "react";
import type {QuizCreateModel} from "../../../@types/types.ts";

import styles from "./createrQuiz.module.css"
import Input from "../../ui/input/Input.tsx";
import Select from "../../ui/select/Select.tsx";
import Button from "../../ui/button/Button.tsx";

interface CreaterQuizProps {
    modalActive: boolean;
    setModalActive: ()=> void;
}

const CreaterQuiz = ({ modalActive, setModalActive }: CreaterQuizProps) => {

    const [quiz, setQuiz] = useState<QuizCreateModel>({title: "", description: "", quizDifficulty: "Unknown"});

    const handleChange = (value: string, input: keyof QuizCreateModel) => {
        setQuiz((prev) => (
            {...prev, [input]: value}
        ))
    };

    const handleClick = () => {

    }

    return (
        <>
            <ModalWindow
                modalActive={modalActive}
                setModalActive={setModalActive}
            >
                <div className={styles.modalContainer}>
                    <h2 className="title">Редактирование аккаунта</h2>
                    <Input
                        text="Название квиза"
                        type="text"
                        name="name"
                        // initValue={datas.newUserName}
                        inputChange={(value) => handleChange(value, "title")}
                    />
                    <Input
                        text="Описание квиза"
                        type="text"
                        name="description"
                        // initValue={datas.newUserName}
                        inputChange={(value) => handleChange(value, "description")}
                    />
                    <Select
                        valuesArr={["", "Easy", "Medium", "Hard"]}
                        name="difficulty"
                        onChanger={(value) => handleChange(value, "quizDifficulty")}
                    />
                    <Button
                        variant='button'
                        text="Применить"
                        buttonType="default"
                        // onClick={handleClick}
                    />
                </div>
            </ModalWindow>
        </>
    )
}

export default CreaterQuiz;