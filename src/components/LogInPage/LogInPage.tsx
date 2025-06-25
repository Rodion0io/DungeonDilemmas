import styles from "./loginPage.module.css"

import Registration from "./components/registrationComponent/Registration.tsx";
import Authorization from "./components/authorizationComponent/Authorization.tsx";

import {ROUTES} from "../../utils/routes.ts";

import {useLocation} from "react-router-dom";

const LogInPage = () => {

    const currentLocation: string = useLocation().pathname;

    return (
        <>
            {/*<section className="login-page">*/}
            <section className={styles.loginPage}>
                <div className="container">
                    {currentLocation === ROUTES.AUTHORIZATION ?
                        <Authorization/>
                        :
                        <Registration/>
                    }
                </div>
            </section>
        </>
    )
}

export default LogInPage;