import type {FC} from "react";

import logo from "../../../assets/logo.svg"

import styles from "./header.module.css"

const Header : FC = () => {

    return (
        <>
            <header className="hero">
                <div className="container">
                    <img src={logo} alt="" className={styles.logo}/>
                </div>
            </header>
        </>
    )
}

export default Header;