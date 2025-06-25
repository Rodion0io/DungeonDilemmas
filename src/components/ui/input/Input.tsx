import styles from "./input.module.css"

import visibilityIcon from "../../../assets/visibility.svg"
import invisibilityIcon from "../../../assets/invisibility.svg"

import {useState} from "react";


type TypeInput = "text" | "password" | "email";

type visibilityText = "visible" | "invisible";

interface InputProps extends React.ComponentProps<'input'>{
    text: string;
    disabled?: boolean;
    type?: TypeInput;
    visibilityText?: visibilityText;
    errorText?: string;
}

const Input = (
    {
        text,
        disabled = false,
        type = "text",
        visibilityText = "visible",
        errorText = undefined,
        ...props
    } : InputProps) => {

    const [visibility, setVisibility] = useState<boolean>(false);

    return(
        <>
            <div className={styles.inputContainer}>
                <div className={styles.inputBlock}>
                    <input
                        className={`${styles.input} 
                        ${errorText ? styles.inputError : null}`}
                        type={!visibility ? type : "text"}
                        disabled={disabled}
                        placeholder={text}
                        {...props}/>
                    <p className={styles.errorMessage}>{errorText}</p>
                </div>
                {type !== "password" ?
                    <button
                        className={`${styles.inputButton} ${styles.inputCrossButton}`}
                        type="button">
                        ✕
                    </button>
                    :
                    <img
                        onClick={() => setVisibility((prevState) => prevState ? false : true)}
                        src={!visibility ? visibilityIcon : invisibilityIcon}
                        alt=""
                        className={`${styles.inputButton} ${styles.visibilityPassword}`}/>
                }
            </div>
        </>
    )
}

export default Input;