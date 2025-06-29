import styles from "./userCard.module.css"

import type {UserOtherModel} from "../../../../@types/types.ts";

import goldCrown from "../../../../assets/gold-crown.svg"
import silverCrown from "../../../../assets/silver-crown.svg"
import bronzeCrown from "../../../../assets/bronze-crown.svg"
import {useModal} from "../../../modalWindow/hooks/useModal.ts";
import ConcreteUserModal from "../conreteUserModal/ConcreteUserModal.tsx";

interface UserCardProps {
    props: UserOtherModel;
    index: number;
}

const UserCard = ({ props, index }: UserCardProps) => {

    const { modalActive, handleActive } = useModal();

    return (
        <>
            <article className={styles.userCard}>
                <div className="card-container">
                    <div className={styles.mainInfa}>
                        <div className={styles.numberBlock}>{index + 1}</div>
                        <div className={styles.textInfa}>
                            <h3
                                className={`${styles.text} ${styles.name}`}
                                id={props.id}
                                onClick={() => handleActive()}
                            >
                                {props.userName}
                            </h3>
                            <span
                                className={`${styles.text} ${styles.game}`}
                            >
                            {`Баллы: ${props.totalPoints}`}
                        </span>
                            <span
                                className={`${styles.text} ${styles.game}`}
                            >
                            {
                                `Лучшая игра: ${props.bestUsersGame === null ? "-"
                                    : `${props.bestUsersGame.name}: ${props.bestUsersGame.score} баллов`}`
                            }
                        </span>
                        </div>
                    </div>
                    {index + 1 <= 3 ?
                        <div className="greate-block">
                            <img
                                src={index + 1 === 1 ? `${goldCrown}` : index + 1 === 2 ? `${silverCrown}` : `${bronzeCrown}`}
                                alt=""
                            />
                        </div>
                        :
                        null
                    }
                </div>
                <ConcreteUserModal
                    modalActive={modalActive}
                    setModalActive={handleActive}
                />
            </article>
        </>
    )
}

export default UserCard;