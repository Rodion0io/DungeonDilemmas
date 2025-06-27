import {useNavigate} from "react-router-dom";
import {ACCESS} from "../../utils/constants.ts";
import {ROUTES} from "../../utils/routes.ts";

const ProtectedLayout = () => {

    const navigate = useNavigate();
    const token: string | null = localStorage.getItem(ACCESS);

    return (
        <>
            {!token ?
                navigate(ROUTES.AUTHORIZATION): null
            }
            <h1>ProtectedLayput</h1>
        </>
    )
};

export default ProtectedLayout;