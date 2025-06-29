// import QuizCard from "./quizCard/QuizCard.tsx";

import styles from "./quizPage.module.css"
import Filter from "./filter/Filter.tsx";
import {useEffect, useState} from "react";
import type {FilterModel, QuizModel} from "../../@types/types.ts";
import {ACCESS} from "../../utils/constants.ts";
import {getQuizezPage} from "../../utils/API/getQuizezPage.ts";
import {createrUrl} from "../../utils/createrUrl.ts";
import QuizCard from "./quizCard/QuizCard.tsx";
import Button from "../ui/button/Button.tsx";
import {useModal} from "../modalWindow/hooks/useModal.ts";
import CreaterQuiz from "./createrQuiz/CreaterQuiz.tsx";

const QuizPage = () => {

    const [filter, setFilter] = useState<FilterModel>(
        {
            title: undefined,
            description: undefined,
            difficulty: undefined,
            creatorEmail: undefined,
            page: 1,
            pageSize: 5
        });

    const [quizez, setQuizez] = useState<QuizModel[]>([]);
    const { modalActive, handleActive } = useModal();

    const handleChange = (value: string, input: keyof FilterModel) => {
        setFilter((prev) => (
            {...prev, [input]: value}
        ))
    }

    useEffect(() => {
        const request = async() => {
            const token: string | null = localStorage.getItem(ACCESS);
            const partUrl = createrUrl(filter);

            if (token){
                try {
                    const response = await getQuizezPage(token, partUrl);

                    setQuizez(response.quizModels);

                }
                catch (e){
                    console.error(e);
                }
            }
        }
        request();
    }, []);


    const handleClick = async () => {
        const token: string | null = localStorage.getItem(ACCESS);
        const partUrl = createrUrl(filter);

        if (token){
            try {
                const response = await getQuizezPage(token, partUrl);

                setQuizez(response.quizModels);

            }
            catch (e){
                console.error(e);
            }
        }
    }

    return (
        <>
            <section className={styles.quizPage}>
                <div className={styles.quizConatiner}>
                    <Button variant="button" text="Создать квиз" buttonType="default" onClick={handleActive}/>
                    <Filter
                        handleClick={handleClick}
                        handleChange={handleChange}
                    />
                    {quizez.map((item, index) => (
                        <QuizCard props={item} key={index}/>
                    ))}
                    <CreaterQuiz modalActive={modalActive} setModalActive={handleActive}/>
                </div>
            </section>
        </>
    )
}

export default QuizPage;