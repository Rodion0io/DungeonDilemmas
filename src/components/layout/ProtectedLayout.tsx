import {ACCESS, REFRESH} from "../../utils/constants.ts";
import {decoderToken} from "../../utils/decoder.ts";
import {type NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import {ROUTES} from "../../utils/routes.ts";
import {useEffect} from "react";

const ProtectedLayout = ({ children }: {children : React.ReactNode}) => {
    const navigate: NavigateFunction = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token: string | null = localStorage.getItem(ACCESS);
        const refreshToken: string | null = localStorage.getItem(REFRESH);
        if (((token
                && refreshToken
                && decoderToken(refreshToken, "exp") < Date.now() / 1000
                && decoderToken(token, "exp") < Date.now() / 1000)||

            (!token && !refreshToken)||

            (!token && refreshToken && decoderToken(refreshToken, "exp") < Date.now() / 1000)||

            (token && !refreshToken && decoderToken(token, "exp") < Date.now() / 1000)) &&
            (location.pathname !== ROUTES.AUTHORIZATION && location.pathname !== ROUTES.REGISTRATION)) {
            navigate(ROUTES.AUTHORIZATION);
        }
        else if (((token && refreshToken
            && decoderToken(refreshToken, "exp") > Date.now() / 1000
            && decoderToken(token, "exp") > Date.now() / 1000)||
            (token && !refreshToken && decoderToken(token, "exp") > Date.now() / 1000)) &&
            (location.pathname === ROUTES.AUTHORIZATION || location.pathname === ROUTES.REGISTRATION)){
            navigate(ROUTES.MAINPAGE);
        }
    },[location]);

    return (
        <>
            {children}
        </>
    )
};

export default ProtectedLayout;