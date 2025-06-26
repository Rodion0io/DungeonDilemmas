import {useState} from "react";
import type {UserRegisterModel} from "../../../../../@types/types.ts";
import {type NavigateFunction, useNavigate} from "react-router-dom";
import {ACCESS, EMAIL_PATTERN, REFRESH} from "../../../../../utils/constants.ts";
import {ROUTES} from "../../../../../utils/routes.ts";

export const useRegistration = () => {
    const [userRegist, setUserRegist] = useState<UserRegisterModel>({userName: "", email: "", password: ""});
    const [errorCode, setErrorCode] = useState<number>(0);
    const navigate: NavigateFunction = useNavigate();

    const handleChange =
        (
            value: string,
            input: keyof UserRegisterModel
        ): void => {
            setUserRegist((prevState) => ({
                ...prevState,
                [input]: value
            }));
        }

    const handleAuth = async (): Promise<void> => {
        if (!EMAIL_PATTERN.test(userRegist.email)){
            setErrorCode(1);
        }
        else if (userRegist.userName.length < 4 || userRegist.userName.length > 32){
            setErrorCode(3);
        }
        else if (userRegist.password.length < 8 || userRegist.password.length > 32){
            setErrorCode(4);
        }
        else{
            setErrorCode(0);
            try{
                // const result = await authorizationRequest(userLogin);

                // localStorage.setItem(ACCESS, result.accessToken);
                // localStorage.setItem(REFRESH, result.refreshToken);

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
            userRegist.userName.length <= 0){
            return true;
        }
        return false;
    }

    return { errorCode, handleChange, handleAuth, checkValues };
}