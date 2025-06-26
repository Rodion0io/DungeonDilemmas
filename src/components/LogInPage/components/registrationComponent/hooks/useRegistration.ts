import {useState} from "react";
import type {UserRegisterFormModel, UserRegisterModel} from "../../../../../@types/types.ts";
import {type NavigateFunction, useNavigate} from "react-router-dom";
import {ACCESS, EMAIL_PATTERN, REFRESH} from "../../../../../utils/constants.ts";
import {ROUTES} from "../../../../../utils/routes.ts";
import {registrationRequest} from "../../../../../utils/API/registrationRequest.ts";

export const useRegistration = () => {
    const [userRegist, setUserRegist] = useState<UserRegisterFormModel>({userName: "", email: "", password: "", passwordRepeat: ""});
    const [errorCode, setErrorCode] = useState<number>(0);
    const navigate: NavigateFunction = useNavigate();

    const handleChange =
        (
            value: string,
            input: keyof UserRegisterFormModel
        ): void => {
            setUserRegist((prevState) => ({
                ...prevState,
                [input]: value
            }));
        };

    const handleRegistration = async (): Promise<void> => {
        if (!EMAIL_PATTERN.test(userRegist.email)){
            setErrorCode(1);
        }
        else if (userRegist.userName.length < 4 || userRegist.userName.length > 32){
            setErrorCode(3);
        }
        else if (userRegist.password.length < 8 || userRegist.password.length > 32){
            setErrorCode(4);
        }
        else if (userRegist.password !== userRegist.passwordRepeat){
            setErrorCode(5);
        }
        else{
            setErrorCode(0);
            try{

                const model: UserRegisterModel = {
                    userName: userRegist.userName,
                    email: userRegist.email,
                    password: userRegist.password
                };

                const result = await registrationRequest(model);

                localStorage.setItem(ACCESS, result.accessToken);
                localStorage.setItem(REFRESH, result.refreshToken);

                navigate(ROUTES.MAINPAGE);
            }
            catch {
                setErrorCode(2);
            }
        }
    }

    const checkValues = (): boolean => {
        if (userRegist.email.length <= 0 ||
            userRegist.password.length <= 0 ||
            userRegist.userName.length <= 0 ||
            userRegist.passwordRepeat.length <= 0){
            return true;
        }
        return false;
    }

    return { errorCode, handleChange, handleRegistration, checkValues };
}