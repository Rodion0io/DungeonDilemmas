import styles from "./userCard.module.css"

// import type {UserOtherModel} from "../../../../@types/types.ts";

import goldCrown from "../../../../assets/gold-crown.svg"
import silverCrown from "../../../../assets/silver-crown.svg"
import bronzeCrown from "../../../../assets/bronze-crown.svg"
import {useModal} from "../../../modalWindow/hooks/useModal.ts";
import ConcreteUserModal from "../conreteUserModal/ConcreteUserModal.tsx";

interface UserCardProps {
    // props: UserOtherModel;
    index: number;
}

// { props }: UserCardProps

const UserCard = ({ index }: UserCardProps) => {

    const { modalActive, handleActive } = useModal();

    return (
        <>
            <article className={styles.userCard}>
                <div className="card-container">
                    <div className={styles.mainInfa}>
                        <div className={styles.numberBlock}>{index}</div>
                        <div className={styles.textInfa}>
                            <h3
                                className={`${styles.text} ${styles.name}`}
                                id={index.toString()}
                                onClick={() => handleActive()}
                            >
                                влад долболоб
                            </h3>
                            <span
                                className={`${styles.text} ${styles.game}`}
                            >
                            777 баллов
                        </span>
                            <span
                                className={`${styles.text} ${styles.game}`}
                            >
                            такая-то игра, 777 баллов
                        </span>
                        </div>
                    </div>
                    {index <= 3 ?
                        <div className="greate-block">
                            <img
                                src={index === 1 ? `${goldCrown}` : index === 2 ? `${silverCrown}` : `${bronzeCrown}`}
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