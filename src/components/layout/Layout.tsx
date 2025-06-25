import Header from "./header/Header.tsx";

import {type Location, Outlet, useLocation} from "react-router-dom";
import {ROUTES} from "../../utils/routes.ts";

const Layout = () => {

    const location: Location = useLocation();

    return (
        <>
            {location.pathname !== ROUTES.AUTHORIZATION ||
                location.pathname !== ROUTES.REGISTRATION ? <Header/> : null}
            <div className="container">
                <Outlet/>
            </div>
        </>
    )
}

export default Layout;