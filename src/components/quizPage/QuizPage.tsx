import QuizCard from "./quizCard/QuizCard.tsx";

import styles from "./quizPage.module.css"

const QuizPage = () => {

    return (
        <>
            <section className={styles.quizPage}>
                <div className={styles.quizConatiner}>
                    <QuizCard/>
                </div>
            </section>
        </>
    )
}

export default QuizPage;