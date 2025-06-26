import styles from "./button.module.css"

import * as React from "react";
import {Link} from "react-router-dom";

type ButtonVariant = 'button' | 'link';
type ButtonType = "default" | "secondary";
type ButtonSize = "normal"| "small" | "smallest";


interface ButtonProps extends React.ComponentProps<'button'>{
    // variant?: ButtonVariant,
    text: string,
    buttonType: ButtonType,
    buttonSize?: ButtonSize,
    disabled?: boolean,
    className?: string
}

interface ButtonAsButton extends ButtonProps{
    variant: Extract<ButtonVariant, 'button'>
    link: never
}

interface ButtonAsLink extends ButtonProps {
    variant: Extract<ButtonVariant, 'link'>
    link: string
}

type ButtonProp = ButtonAsButton | ButtonAsLink

const Button = ({
                    variant,
                    text,
                    buttonType,
                    buttonSize = "normal",
                    disabled = false,
                    className = undefined,
                    link,
                    ...props}: ButtonProp) => {
    return (
        <>
            {variant === 'link' && link ?
                <Link to={link}/>
                :
                <button
                    className={`${styles.button} ${styles[buttonType]} ${styles[buttonSize]} ${className}`}
                    type="button"
                    disabled={disabled}
                    {...props}>{text}
                </button>
            }
        </>

    )
}

export default Button;