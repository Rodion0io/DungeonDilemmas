import styles from "./redactModal.module.css"

import ModalWindow from "../../../modalWindow/ModalWindow.tsx";

import {useState} from "react";
import Input from "../../../ui/input/Input.tsx";
import Button from "../../../ui/button/Button.tsx";

interface Props {
    modalActive: boolean;
    setModalActive: (modalActive: boolean) => void;

}

const RedactModal = ({ modalActive, setModalActive }: Props) => {

    const [isPassword, setIsPassword] = useState<boolean>(false);

// .activeVariant
    return (
        <>
            <ModalWindow modalActive={modalActive} setModalActive={setModalActive}>
                <div className={styles.modalContainer}>
                    <div className={styles.headerPart}>
                        <h2 className="title">Редактирование аккаунта</h2>
                        <div className={styles.bar}>
                            <p
                                className={`${styles.variant} ${!isPassword ? styles.activeFirstVariant : null}`}
                                onClick={() => setIsPassword(false)}
                            >
                                Персональные
                            </p>
                            <div className={styles.line}></div>
                            <p
                                className={`${styles.variant} ${isPassword ? styles.activeSecondVariant : null}`}
                                onClick={() => setIsPassword(true)}
                            >
                                Пароль
                            </p>
                        </div>
                    </div>
                    {!isPassword ?
                        <>
                            <div className={styles.formBlock}>
                                <span className="label">Имя пользователя</span>
                                <Input
                                    text="Имя пользоватея"
                                    type="text"
                                    name="name"
                                    // inputChange={(value) => handleChange(value, "password")}
                                />
                            </div>
                            <div className={styles.formBlock}>
                                <span className="label">Email</span>
                                <Input
                                    text="Email"
                                    type="text"
                                    name="email"
                                    // inputChange={(value) => handleChange(value, "password")}
                                />
                            </div>
                            <div className={styles.updateBlock}>
                                <Button variant="button" text="Обновить" buttonType="default"/>
                            </div>
                        </>:
                        <>
                            <div className={styles.formBlock}>
                                <span className="label">Старый пароль</span>
                                <Input
                                    text="Старый пароль"
                                    type="password"
                                    name="password"
                                    // inputChange={(value) => handleChange(value, "password")}
                                />
                            </div>
                            <div className={styles.formBlock}>
                                <span className="label">Новый пароль</span>
                                <Input
                                    text="Новый пароль"
                                    type="password"
                                    name="newPassword"
                                    // inputChange={(value) => handleChange(value, "password")}
                                />
                            </div>
                            <div className={styles.updateBlock}>
                                <Button variant="button" text="Обновить" buttonType="default"/>
                            </div>
                        </>
                    }
                </div>
            </ModalWindow>
        </>
    )
};

export default RedactModal;