import styles from "../styles.module.css"

import type {FC} from "react";
import Input from "../../../ui/input/Input.tsx";

const Authorization: FC = () => {

    return (
        <>
            <form action="" className={styles.formBlock}>
                <div className={styles.formContainer}>
                    <Input text="Email" type="email"/>
                    <Input text="Email" type="email"/>
                    <Input text="Email" type="email"/>
                </div>
            </form>
        </>
    )
}

export default Authorization;