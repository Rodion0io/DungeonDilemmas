import styles from "../styles.module.css"

import {type FC, useState} from "react";

import logo from "../../../../assets/logo.svg"

import Input from "../../../ui/input/Input.tsx";
import Button from "../../../ui/button/Button.tsx";

import {ROUTES} from "../../../../utils/routes.ts";
import type {UserLoginModel} from "../../../../@types/types.ts";
import {ACCESS, EMAIL_PATTERN, REFRESH} from "../../../../utils/constants.ts";
import {authorizationRequest} from "../../../../utils/API/authorizationRequest.ts";
import {ERROR_MESSAGES} from "../../../../utils/errorMessages.ts";

const Authorization: FC = () => {

    const [userLogin, setUserLogin] = useState<UserLoginModel>({email: "", password: ""});
    const [errorCode, setErrorCode] = useState<number>(0);

    const handleChange =
        (
            value: string,
            input: keyof UserLoginModel
        ): void => {
        setUserLogin((prevState) => ({
            ...prevState,
            [input]: value
        }));
    }

    const handleAuth = async (): Promise<void> => {
        if (!EMAIL_PATTERN.test(userLogin.email)){
            setErrorCode(1);
        }
        else{
            setErrorCode(0);
            try{
                const result = await authorizationRequest(userLogin);

                localStorage.setItem(ACCESS, result.accessToken);
                localStorage.setItem(REFRESH, result.refreshToken);
            }
            catch {
                setErrorCode(2);
            }
        }
    }

    const checkValues = (): boolean => {
        if (userLogin.email.length <= 0 || userLogin.password.length <= 0){
            return true;
        }
        return false;
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