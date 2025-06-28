import type {FC} from "react";

import styles from "./profile.module.css"

import star from "../../../../assets/star.svg"
import medal from "../../../../assets/Medal.svg"
import user from "../../../../assets/User.svg"
import mail from "../../../../assets/Email.svg"

import Button from "../../../ui/button/Button.tsx";

const Profile: FC = () => {

    return (
        <>
            <article className={styles.profileCard}>
                <div className={styles.informationContainer}>
                    <h2 className="title">Профиль</h2>
                    <div className={styles.information}>
                        <h3 className={styles.subtitle}>Игровая статистика</h3>
                        <div className={styles.infaBlock}>
                            <img src={star} alt=""/>
                            <p className={styles.statistic}>Баллы: 10</p>
                        </div>
                        <div className={styles.infaBlock}>
                            <img src={medal} alt=""/>
                            <p className={styles.statistic}>Лучшая игра: -</p>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.information}>
                            <h3 className={styles.subtitle}>Персональные данные</h3>
                            <div className={styles.infaBlock}>
                                <img src={user} alt=""/>
                                <p className={styles.statistic}>Имя: Влад Долболоб</p>
                            </div>
                            <div className={styles.infaBlock}>
                                <img src={mail} alt=""/>
                                <p className={styles.statistic}>Email: dolbolob@mail.ru</p>
                            </div>
                        </div>
                        <div className={styles.actionsBlock}>
                            <Button variant="button" text="Редактировать" buttonType="default"/>
                            <Button variant="button" text="Выйти" buttonType="default"/>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
};

export default Profile;