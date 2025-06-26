import styles from "../styles.module.css"
import logo from "../../../../assets/logo.svg";

import type {FC} from "react";

import Button from "../../../ui/button/Button.tsx";
import Input from "../../../ui/input/Input.tsx";

import {ROUTES} from "../../../../utils/routes.ts";


const Registration: FC = () => {

    return(
        <>
            <form action="" className={styles.formBlock}>
                <div className={styles.formContainer}>
                    <header className={styles.formHeader}>
                        <img className={styles.logos} src={logo}/>
                        <h2 className={styles.formTitle}>Регистрация</h2>
                    </header>
                    <Input
                        text="Email"
                        type="email"
                        name="email"
                    />
                    <Input
                        text="Имя"
                        type="text"
                        name="name"
                    />
                    <Input
                        text="Пароль"
                        type="password"
                        name="password"
                    />
                    <Input
                        text="Повторите пароль"
                        type="password"
                        name="repeatPassword"
                    />
                    <div className={styles.buttonContainer}>
                        <Button
                            className={styles.actionButton}
                            text="Зарегестрироваться"
                            buttonType="default"
                            variant="button"
                            disabled={true}
                        />
                        <Button
                            className={styles.actionButton}
                            text="Назад"
                            buttonType="default"
                            variant="link"
                            link={ROUTES.AUTHORIZATION}
                        />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Registration;