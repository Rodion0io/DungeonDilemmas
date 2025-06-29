import {useEffect, useState} from "react";
import type {QuizModel} from "../../@types/types.ts";
import {getUsersQuizezRequest} from "../../utils/API/getUsersQuizezRequest.ts";
import {ACCESS} from "../../utils/constants.ts";
import QuizCard from "../quizPage/quizCard/QuizCard.tsx";
import styles from "./mainPage.module.css"

const MainPage = () => {

    const [myQuizez, setMyQuizez] = useState<QuizModel[]>([]);

    useEffect(() => {
        const request = async() => {
            const token: string | null = localStorage.getItem(ACCESS);

            if (token){
                try {
                    const response: QuizModel[] = await getUsersQuizezRequest(token);

                    setMyQuizez(response);
                }
                catch (e) {
                    console.error(e);
                }
            }
        }

        request();
    }, []);

    return (
        <>
            <section className="mainPage">
                <div className="section-container">
                    <div className={styles.cardContainer}>
                        {myQuizez.map((item, index) => (
                            <QuizCard props={item} key={index} titleClass={styles.hoverd} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
};

export default MainPage;