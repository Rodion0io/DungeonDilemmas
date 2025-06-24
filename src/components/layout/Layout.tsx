import Header from "./header/Header.tsx";

import {type Location, Outlet, useLocation} from "react-router-dom";
import {ROUTES} from "../../utils/routes.ts";

const Layout = () => {

    const location: Location = useLocation();

    console.log(location.pathname);

    return (
        <>
            {location.pathname !== ROUTES.MAINPAGE ? <Header/> : null}
            <Outlet/>
        </>
    )
}

export default Layout;