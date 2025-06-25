import styles from "./button.module.css"

import * as React from "react";
import {Link} from "react-router-dom";

type ButtonVariant = 'button' | 'link';
type ButtonType = "default" | "secondary";
type ButtonSize = "normal"| "small" | "smallest";


type ButtonAsButton = ButtonProps & {
    variant?: 'button';
    href?: never;
};



interface ButtonProps extends React.ComponentProps<'button'>{
    variant?: ButtonVariant,
    text: string,
    buttonType: ButtonType,
    buttonSize?: ButtonSize,
    disabled?: boolean,
    className?: string
}

const Button = ({
                    variant = 'button',
                    text,
                    buttonType,
                    buttonSize = "normal",
                    disabled = false,
                    className = undefined,
                    ...props}: ButtonProps) => {
    return (
        <>
            {variant === 'button' ?
                <button
                    className={`${styles.button} ${styles[buttonType]} ${styles[buttonSize]} ${className}`}
                    type="button"
                    disabled={disabled}
                    {...props}>{text}
                </button>
                : 
                <Link to={}
            }
        </>

    )
}

export default Button;