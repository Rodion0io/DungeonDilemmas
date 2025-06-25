import styles from "./input.module.css"

import visibilityIcon from "../../../assets/visibility.svg"
import invisibilityIcon from "../../../assets/invisibility.svg"

import {useEffect, useState} from "react";


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
    const [errorFlag, setErrorFlag] = useState<boolean>(false);

    //заглушка
    useEffect(() => {
        setErrorFlag((prev: boolean) => prev ? false : true);
    },[]);


    return(
        <>
            <div className={styles.inputContainer}>
                <input
                    className={`${styles.input} ${errorFlag ? styles.inputError : null}`}
                    type={!visibility ? type : "text"}
                    disabled={disabled}
                    placeholder={text}
                    {...props}/>
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