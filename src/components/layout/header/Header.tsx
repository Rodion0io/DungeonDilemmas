import type {FC} from "react";

import logo from "../../../assets/logo.svg"

import styles from "./header.module.css"

import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../utils/routes.ts";

const Header : FC = () => {

    return (
        <>
            <header className={styles.hero}>
                <div className="container">
                    <div className={styles.navbarContainer}>
                        <img src={logo} alt="" className={styles.logo}/>
                        <nav className={styles.navbar}>
                            <ul className={styles.list}>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? `${styles.link} ${styles.active}` : `${styles.navLink}`
                                    }
                                    to={ROUTES.MAINPAGE}>
                                    Главная
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? `${styles.link} ${styles.active}` : `${styles.navLink}`
                                    }
                                    to={ROUTES.AUTHORIZATION}>
                                    Рейтинг
                                </NavLink>
                            </ul>
                            <ul className={styles.list}>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? `${styles.link} ${styles.active}` : `${styles.navLink}`
                                    }
                                    to={ROUTES.AUTHORIZATION}>
                                    Квизы
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? `${styles.link} ${styles.active}` : `${styles.navLink}`
                                    }
                                    to={ROUTES.REGISTRATION}>
                                    Профиль
                                </NavLink>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;