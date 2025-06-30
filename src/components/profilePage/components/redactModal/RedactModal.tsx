import styles from "./redactModal.module.css"

import ModalWindow from "../../../modalWindow/ModalWindow.tsx";

import {useEffect, useState} from "react";
import Input from "../../../ui/input/Input.tsx";
import Button from "../../../ui/button/Button.tsx";
import type {EditDatas, UserEditModel, UserEditPasswordModel} from "../../../../@types/types.ts";
import {ACCESS, EMAIL_PATTERN} from "../../../../utils/constants.ts";
import {editProfileRequest} from "../../../../utils/API/editProfileRequest.ts";
import {editPasswordProfile} from "../../../../utils/API/editPasswordProfile.ts";
import {ROUTES} from "../../../../utils/routes.ts";
import {ERROR_MESSAGES} from "../../../../utils/errorMessages.ts";

interface Props {
    modalActive: boolean;
    setModalActive: (modalActive: boolean) => void;
    newUserName: string;
    newEmail: string;

}

const RedactModal = (
    { modalActive, setModalActive, newUserName, newEmail }: Props) => {

    const [isPassword, setIsPassword] = useState<boolean>(false);
    const [datas, setDatas] = useState<EditDatas>({newUserName: "", newEmail: "", oldPassword: "", newPassword: ""});
    const [errorCode, setErrorCode] = useState<number>(0);

    useEffect(() => {
        setDatas((prev) => (
            {...prev, newUserName: newUserName, newEmail: newEmail}));
    }, [newUserName, newEmail]);


    const handleChange = (value: string, input: keyof EditDatas): void => {
        setDatas((prev) => (
            {
                ...prev,
                [input]: value
            }
        ))
    }


    // Заглушка, чтобы ошибки не было
    console.log(errorCode);

    const changePersonalDatas = async () => {
        if (!EMAIL_PATTERN.test(datas.newEmail)){
            setErrorCode(1);
        }
        else if (datas.newUserName.length < 4 || datas.newUserName.length > 32){
            setErrorCode(3);
        }
        else{
            setErrorCode(0);
            const token: string | null = localStorage.getItem(ACCESS);
            if (token){
                try {

                    const model: UserEditModel = {newUserName: datas.newUserName, newEmail: datas.newEmail};

                    const response = await editProfileRequest(token, model);
                    window.location.href = ROUTES.PROFILE;
                    return response.data
                }
                catch(err){
                    setErrorCode(6)
                    console.error(err);
                }
            }
        }
    }


    const changePassword = async () => {
        if (datas.newPassword.length < 8 || datas.newPassword.length > 32){
            console.log('shdgbkdsjf')
            setErrorCode(4);
        }
        else{
            setErrorCode(0);
            const token: string | null = localStorage.getItem(ACCESS);

            if (token){
                try{

                    const model:  UserEditPasswordModel = {oldPassword: datas.oldPassword, newPassword: datas.newPassword};

                    const response = await editPasswordProfile(token, model);
                    window.location.href = ROUTES.PROFILE;
                    return response.data;
                }
                catch (e) {
                    setErrorCode(6)
                    console.error(e);
                }
            }
        }
    }


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
                                    initValue={datas.newUserName}
                                    inputChange={(value) => handleChange(value, "newUserName")}
                                />
                            </div>
                            <div className={styles.formBlock}>
                                <span className="label">Email</span>
                                <Input
                                    text="Email"
                                    type="text"
                                    name="email"
                                    initValue={datas.newEmail}
                                    inputChange={(value) => handleChange(value, "newEmail")}
                                />
                            </div>
                            {errorCode !== 0 ?
                                <p className="error-message">{ERROR_MESSAGES[errorCode]}</p>:
                                null
                            }
                            <div className={styles.updateBlock}>
                                <Button
                                    variant="button"
                                    text="Обновить"
                                    buttonType="default"
                                    onClick={changePersonalDatas}
                                />
                            </div>
                        </>:
                        <>
                            <div className={styles.formBlock}>
                                <span className="label">Старый пароль</span>
                                <Input
                                    text="Старый пароль"
                                    type="password"
                                    name="password"
                                    inputChange={(value) => handleChange(value, "oldPassword")}
                                />
                            </div>
                            <div className={styles.formBlock}>
                                <span className="label">Новый пароль</span>
                                <Input
                                    text="Новый пароль"
                                    type="password"
                                    name="newPassword"
                                    inputChange={(value) => handleChange(value, "newPassword")}
                                />
                                {errorCode !== 0 ?
                                    <p className="error-message">{ERROR_MESSAGES[errorCode]}</p>:
                                    null
                                }
                            </div>
                            <div className={styles.updateBlock}>
                                <Button
                                    variant="button"
                                    text="Обновить"
                                    buttonType="default"
                                    onClick={changePassword}
                                />
                            </div>
                        </>
                    }
                </div>
            </ModalWindow>
        </>
    )
};

export default RedactModal;