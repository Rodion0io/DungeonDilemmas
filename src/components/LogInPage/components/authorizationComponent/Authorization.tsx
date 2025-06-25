import styles from "../styles.module.css"

import type {FC} from "react";
import Input from "../../../ui/input/Input.tsx";

const Authorization: FC = () => {

    return (
        <>
            <form action="" className={styles.formBlock}>
                <div className="form-container">
                    <Input text="Email" type="email"/>
                </div>
            </form>
        </>
    )
}

export default Authorization;