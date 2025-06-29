// import QuizCard from "./quizCard/QuizCard.tsx";

import styles from "./quizPage.module.css"
import Filter from "./filter/Filter.tsx";
import {useState} from "react";
import type {FilterModel} from "../../@types/types.ts";

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

    const handleChange = (value: string, input: keyof FilterModel) => {
        setFilter((prev) => (
            {...prev, [input]: value}
        ))
    }



    return (
        <>
            <section className={styles.quizPage}>
                <div className={styles.quizConatiner}>
                    <Filter/>
                    {/*<QuizCard/>*/}
                </div>
            </section>
        </>
    )
}

export default QuizPage;