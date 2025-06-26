import styles from "../styles.module.css"

import type {FC} from "react";

import logo from "../../../../assets/logo.svg"

import Input from "../../../ui/input/Input.tsx";
import Button from "../../../ui/button/Button.tsx";
import {ROUTES} from "../../../../utils/routes.ts";

const Authorization: FC = () => {



    return (
        <>
            <form action="" className={styles.formBlock}>
                <div className={styles.formContainer}>
                    <header className={styles.formHeader}>
                        <img className={styles.logos} src={logo}/>
                        <h2 className={styles.formTitle}>Авторизация</h2>
                    </header>
                    <Input
                        text="Email"
                        type="email"
                    />
                    <Input
                        text="Password"
                        type="password"
                    />
                    <div className={styles.buttonContainer}>
                        <Button
                            className={styles.actionButton}
                            text="Войти"
                            buttonType="default"
                            variant="button"
                        />
                        <Button
                            className={styles.actionButton}
                            text="Зарегестрироваться"
                            buttonType="default"
                            variant="link"
                            link={ROUTES.REGISTRATION}
                        />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Authorization;