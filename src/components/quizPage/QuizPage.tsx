// import QuizCard from "./quizCard/QuizCard.tsx";

import styles from "./quizPage.module.css"
import Filter from "./filter/Filter.tsx";

const QuizPage = () => {

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