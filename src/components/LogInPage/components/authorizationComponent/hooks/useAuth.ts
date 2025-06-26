import {useState} from "react";
import type {UserLoginModel} from "../../../../../@types/types.ts";
import {ACCESS, EMAIL_PATTERN, REFRESH} from "../../../../../utils/constants.ts";
import {authorizationRequest} from "../../../../../utils/API/authorizationRequest.ts";
import {ROUTES} from "../../../../../utils/routes.ts";
import {type NavigateFunction, useNavigate} from "react-router-dom";

export const useAuth = () => {
    const [userLogin, setUserLogin] = useState<UserLoginModel>({email: "", password: ""});
    const [errorCode, setErrorCode] = useState<number>(0);
    const navigate: NavigateFunction = useNavigate();

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

                navigate(ROUTES.MAINPAGE);
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

    return { errorCode, handleChange, handleAuth, checkValues };
}