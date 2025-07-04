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
    clas?: string;
    initValue?: string;
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
        clas = undefined,
        initValue,
        ...props
    } : InputProps) => {

    const [visibility, setVisibility] = useState<boolean>(false);
    const {currentText, handleChange} = useInput(initValue ? initValue : "", inputChange);

    return(
        <>
            <div className={styles.inputContainer}>
                <div className={styles.inputBLock}>
                    <input
                        className={`${styles.input} 
                        ${errorText ? styles.inputError : null} ${clas ? clas : ""}`}
                        type={!visibility ? type : "text"}
                        disabled={disabled}
                        placeholder={text}
                        value={currentText}
                        name={name}
                        onChange={handleChange}
                        {...props}
                    />
                    {type === "password" ?
                        <img
                            onClick={() => setVisibility((prevState) => prevState ? false : true)}
                            src={!visibility ? visibilityIcon : invisibilityIcon}
                            alt=""
                            className={`${styles.inputButton} ${styles.visibilityPassword}`}/>: null
                    }
                </div>
                <p className={styles.errorMessage}>{errorText}</p>
            </div>
        </>
    )
}

export default Input;