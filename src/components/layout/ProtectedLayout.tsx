import {ACCESS, REFRESH} from "../../utils/constants.ts";
import {decoderToken} from "../../utils/decoder.ts";
import {type NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import {ROUTES} from "../../utils/routes.ts";
import {useEffect} from "react";

const ProtectedLayout = ({ children }: {children : React.ReactNode}) => {

    const token: string | null = localStorage.getItem(ACCESS);
    const refreshToken: string | null = localStorage.getItem(REFRESH);
    const navigate: NavigateFunction = useNavigate();
    const location = useLocation();

    if (token && refreshToken){
        console.log(decoderToken(refreshToken, "exp") < Date.now() && decoderToken(token, "exp") < Date.now());
    }

    useEffect(() => {
        if (
            (
                (token && refreshToken && decoderToken(refreshToken, "exp") < Date.now() && decoderToken(token, "exp") < Date.now()) ||
                (!token && !refreshToken) ||
                (!token && refreshToken && decoderToken(refreshToken, "exp") < Date.now()) ||
                (token && !refreshToken && decoderToken(token, "exp") < Date.now())
            )
            && (location.pathname !== ROUTES.AUTHORIZATION && location.pathname !== ROUTES.REGISTRATION)
        ) {

            navigate(ROUTES.AUTHORIZATION);
        }
    }, [navigate, location.pathname, token, refreshToken]);


    return (
        <>
            {children}
        </>
    )
};

export default ProtectedLayout;