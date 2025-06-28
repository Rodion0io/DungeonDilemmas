import styles from "../styles.module.css"
import logo from "../../../../assets/logo.svg";

import type {FC} from "react";

import Button from "../../../ui/button/Button.tsx";
import Input from "../../../ui/input/Input.tsx";

import {ROUTES} from "../../../../utils/routes.ts";
import {useRegistration} from "./hooks/useRegistration.ts";
import {ERROR_MESSAGES} from "../../../../utils/errorMessages.ts";


const Registration: FC = () => {

    const { errorCode, handleChange, handleRegistration, checkValues } = useRegistration();

    return(
        <>
            <form action="" className={styles.formBlock}>
                <div className="form-container">
                    <header className={styles.formHeader}>
                        <img className={styles.logos} src={logo}/>
                        <h2 className={styles.formTitle}>Регистрация</h2>
                    </header>
                    <Input
                        text="Email"
                        type="email"
                        name="email"
                        errorText={errorCode > 0 ? ERROR_MESSAGES[errorCode] : undefined}
                        inputChange={(value) => handleChange(value, "email")}
                    />
                    <Input
                        text="Имя"
                        type="text"
                        name="name"
                        inputChange={(value) => handleChange(value, "userName")}
                    />
                    <Input
                        text="Пароль"
                        type="password"
                        name="password"
                        inputChange={(value) => handleChange(value, "password")}
                    />
                    <Input
                        text="Повторите пароль"
                        type="password"
                        name="repeatPassword"
                        inputChange={(value) => handleChange(value, "passwordRepeat")}
                    />
                    <div className={styles.buttonContainer}>
                        <Button
                            className={styles.actionButton}
                            text="Зарегестрироваться"
                            buttonType="default"
                            variant="button"
                            disabled={checkValues()}
                            onClick={handleRegistration}
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