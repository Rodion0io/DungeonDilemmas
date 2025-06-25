import styles from "./input.module.css"

import visibilityIcon from "../../../assets/password_visibility_icon.svg"
import invisibilityIcon from "../../../assets/password_invisibility_icon.svg"

import {useState} from "react";


type TypeInput = "text" | "password" | "email";

type visibilityText = "visible" | "invisible";

interface InputProps extends React.ComponentProps<'input'>{
    text: string;
    disabled?: boolean;
    type?: TypeInput;
    visibilityText?: visibilityText;
}

const Input = (
    {
        text,
        disabled = false,
        type = "text",
        visibilityText = "visible",
        ...props
    } : InputProps) => {

    const [visibility, setVisibility] = useState<boolean>(false);

    return(
        <>
            <div className={styles.inputContainer}>
                <input className={styles.input} type={!visibility ? type : "text"} disabled={disabled} placeholder={text} {...props}/>
                {type !== "password" ?
                    <button
                        className={`${styles.inputButton} ${styles.inputCrossButton}`}
                        type="button">✕</button>
                    : <button
                            className={styles.inputButton}
                            type="button"
                            onClick={() => setVisibility((prevState) => prevState ? false : true)}>
                        <img src={!visibility ? visibilityIcon : invisibilityIcon} alt="" />
                    </button>
                }
            </div>
        </>
    )
}

export default Input;