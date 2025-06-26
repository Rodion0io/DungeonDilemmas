import styles from "./input.module.css"

import visibilityIcon from "../../../assets/visibility.svg"
import invisibilityIcon from "../../../assets/invisibility.svg"

import {useState} from "react";
import {useInput} from "./hooks/useInput.ts";


type TypeInput = "text" | "password" | "email";

type visibilityText = "visible" | "invisible";

interface InputProps extends React.ComponentProps<'input'>{
    text: string;
    disabled?: boolean;
    type?: TypeInput;
    visibilityText?: visibilityText;
    errorText?: string;
    inputChange?:(value: string) => void;
}

const Input = (
    {
        text,
        disabled = false,
        type = "text",
        visibilityText = "visible",
        errorText = undefined,
        inputChange,
        name,
        ...props
    } : InputProps) => {

    const [visibility, setVisibility] = useState<boolean>(false);
    const {currentText, handleChange} = useInput("", inputChange);

    return(
        <>
            <div className={styles.inputContainer}>
                <input
                    className={`${styles.input} 
                    ${errorText ? styles.inputError : null}`}
                    type={!visibility ? type : "text"}
                    disabled={disabled}
                    placeholder={text}
                    value={currentText}
                    name={name}
                    onChange={handleChange}
                    {...props}
                />
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
                <p className={styles.errorMessage}>{errorText}</p>
            </div>
        </>
    )
}

export default Input;