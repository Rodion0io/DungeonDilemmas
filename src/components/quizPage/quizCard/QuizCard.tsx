import styles from "./quizCard.module.css"
import type {QuizDetailModel, QuizModel} from "../../../@types/types.ts";
import {useModal} from "../../modalWindow/hooks/useModal.ts";
import QuizUserModal from "../../mainPage/component/quizUserModal/QuizUserModal.tsx";
import {getDetailQuizRequest} from "../../../utils/API/getDetailQuizRequest.ts";
import {useEffect, useState} from "react";
import {ACCESS} from "../../../utils/constants.ts";

interface QuizCardProps {
    props: QuizModel;
    titleClass?: string;
}

const QuizCard = ({ props, titleClass }: QuizCardProps) => {

    const { modalActive, handleActive } = useModal();
    const [detailQuiz, setDetailQuiz] = useState<QuizDetailModel>(
        {id: "", title: "", description: "", difficulty: "Unknown", status: "Draft",
            creator: {id: "", email: "", userName: ""}, questions: []}
    );

    const handleClick = async () => {
        const token: string | null = localStorage.getItem(ACCESS);


        if (token){
            try {
                const response: QuizDetailModel = await getDetailQuizRequest(token, props.id);

                console.log(response);

                setDetailQuiz(response);


            }
            catch (e) {
                console.error(e);
            }
        }

        handleActive();
    }


    return (
        <>
            <article className={styles.quizCard}>
                <div className={styles.cardСontainer}>
                    <h2
                        className={`${styles.quizTitle} ${titleClass ? `${styles.quizTitle}` : ""}`}
                        onClick={handleClick}
                    >
                        {props.title}
                    </h2>
                    <p className={styles.description}>{props.description}</p>
                    <div className={styles.otherInfa}>
                        {props.difficulty !== "Unknown" ?
                            <span
                                className={`${styles.difficulty} ${props.difficulty === "Easy" 
                                    ? `${styles.easy}` 
                                    : props.difficulty === "Medium" ?
                                        `${styles.medium}` : `${styles.hard}`}`}
                            >
                                {props.difficulty}
                            </span>:
                            null
                        }
                        <span
                            className={styles.author}
                            id={props.userShortModel.id}
                        >
                            {`${props.userShortModel.userName}, Почта: ${props.userShortModel.email}`}
                        </span>
                    </div>
                    {detailQuiz ?
                        <QuizUserModal
                            modalActive={modalActive}
                            setModalActive={handleActive}
                            details={detailQuiz}
                        />:
                        null
                    }

                </div>
            </article>
        </>
    )
}

export default QuizCard;