import type {FC} from "react";

import {NavLink} from "react-router-dom";

import logo from "../../../assets/logo.svg"
import home from "../../../assets/home.svg"
import selectedHome from "../../../assets/homeSelected.svg"
import profile from "../../../assets/profile.svg"
import profileSelected from "../../../assets/profileSelected.svg"
import raiting from "../../../assets/rating.svg"
import raitingSelected from "../../../assets/raitingSelected.svg"

import styles from "./header.module.css"
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
                                        isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`
                                    }
                                    to={ROUTES.MAINPAGE}
                                    end>
                                    {({ isActive }) =>
                                        <>
                                            <img className="navlick-icon" src={`${isActive ? selectedHome : home}`} alt=""/>
                                            Главная
                                        </>
                                    }
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? `${styles.link} ${styles.active}` : `${styles.navLink}`
                                    }
                                    to={ROUTES.RATING}
                                    end>
                                    {({ isActive }) =>
                                        <>
                                            <img className="navlick-icon" src={`${isActive ? raitingSelected : raiting}`} alt=""/>
                                            Рейтинг
                                        </>
                                    }
                                </NavLink>
                            </ul>
                            <ul className={styles.list}>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? `${styles.link} ${styles.active}` : `${styles.navLink}`
                                    }
                                    to={ROUTES.QUIZZES}
                                    end>
                                    {({ isActive }) =>
                                        <>
                                            <img className="navlick-icon" src={`${isActive ? selectedHome : home}`} alt=""/>
                                            Квизы
                                        </>
                                    }
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? `${styles.link} ${styles.active}` : `${styles.navLink}`
                                    }
                                    to={ROUTES.PROFILE}
                                    end>
                                    {({ isActive }) =>
                                        <>
                                            <img className="navlick-icon" src={`${isActive ? profileSelected : profile}`} alt=""/>
                                            Профиль
                                        </>
                                    }
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