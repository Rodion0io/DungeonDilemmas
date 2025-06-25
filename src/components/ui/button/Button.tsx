import styles from "./button.module.css"

import * as React from "react";

type ButtonVariant = 'button' | 'link';
type ButtonType = "default" | "secondary";
type ButtonSize = "normal"| "small" | "smallest";


interface ButtonProps extends React.ComponentProps<'button'>{
    variant?: ButtonVariant,
    text: string,
    buttonType: ButtonType,
    buttonSize?: ButtonSize,
    disabled?: boolean
}

const Button = ({
                    variant = 'button',
                    text,
                    buttonType,
                    buttonSize = "normal",
                    disabled = false,
                    ...props}: ButtonProps) => {
    return (

        <>
            {variant === 'button' ?
                <button
                    className={`${styles.button} ${styles[buttonType]} ${styles[buttonSize]}`}
                    type="button"
                    disabled={disabled}
                    {...props}>{text}
                </button>
                : null
            }
        </>

    )
}

export default Button;