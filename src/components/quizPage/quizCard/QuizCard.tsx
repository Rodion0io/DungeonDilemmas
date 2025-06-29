import styles from "./quizCard.module.css"
import type {QuizModel} from "../../../@types/types.ts";

interface QuizCardProps {
    props: QuizModel;
}

const QuizCard = ({ props }: QuizCardProps) => {

    return (
        <>
            <article className={styles.quizCard}>
                <div className={styles.cardСontainer}>
                    <h2 className={styles.quizTitle}>{props.title}</h2>
                    <p className={styles.description}>{props.description}</p>
                    <div className={styles.otherInfa}>
                        {props.difficulty !== "Unknown" ?
                            <span className={styles.difficulty}>{props.difficulty}</span>:
                            null
                        }
                        <span
                            className={styles.author}
                            id={props.userShortModel.id}
                        >
                            {`${props.userShortModel.userName}, Почта: ${props.userShortModel.email}`}
                        </span>
                    </div>
                </div>
            </article>
        </>
    )
}

export default QuizCard;