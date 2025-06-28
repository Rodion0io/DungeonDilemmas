import styles from "../styles.module.css"

import {type FC} from "react";

import logo from "../../../../assets/logo.svg"

import Input from "../../../ui/input/Input.tsx";
import Button from "../../../ui/button/Button.tsx";

import {ROUTES} from "../../../../utils/routes.ts";
import {ERROR_MESSAGES} from "../../../../utils/errorMessages.ts";

import {useAuth} from "./hooks/useAuth.ts";

const Authorization: FC = () => {

    const { errorCode, handleChange, handleAuth, checkValues } = useAuth();

    return (
        <>
            <form action="" className={styles.formBlock}>
                <div className="form-container">
                    <header className={styles.formHeader}>
                        <img className={styles.logos} src={logo}/>
                        <h2 className={styles.formTitle}>Авторизация</h2>
                    </header>
                    <Input
                        text="Email"
                        type="email"
                        name="email"
                        errorText={errorCode > 0 ? ERROR_MESSAGES[errorCode] : undefined}
                        inputChange={(value) => handleChange(value, "email")}
                    />
                    <Input
                        text="Пароль"
                        type="password"
                        name="password"
                        inputChange={(value) => handleChange(value, "password")}
                    />
                    <div className={styles.buttonContainer}>
                        <Button
                            className={styles.actionButton}
                            text="Войти"
                            buttonType="default"
                            variant="button"
                            onClick={handleAuth}
                            disabled={checkValues()}
                        />
                        <Button
                            className={styles.actionButton}
                            text="Зарегистрироваться"
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