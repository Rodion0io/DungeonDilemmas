import styles from "../styles.module.css"

import {type FC, useState} from "react";

import logo from "../../../../assets/logo.svg"

import Input from "../../../ui/input/Input.tsx";
import Button from "../../../ui/button/Button.tsx";

import {ROUTES} from "../../../../utils/routes.ts";
import type {UserLoginModel} from "../../../../@types/types.ts";

const Authorization: FC = () => {

    const [userLogin, setUserLogin] = useState<UserLoginModel>({email: "", password: ""});

    const handleChange = (value: string, input: keyof UserLoginModel) => {
        setUserLogin((prevState) => ({
            ...prevState,
            [input]: value
        }));
    }



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
                        name="email"
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
                            disabled={true}
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