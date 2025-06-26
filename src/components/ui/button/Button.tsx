import styles from "./button.module.css"

import * as React from "react";
import {Link, NavLink} from "react-router-dom";

type ButtonVariant = 'button' | 'link' | 'navLink';
type ButtonType = "default" | "secondary";
type ButtonSize = "normal"| "small" | "smallest";
type ButtonAsLinkTypes = "link" | "navLink"


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
    link?: undefined
}

interface ButtonAsLink extends ButtonProps {
    variant: Extract<ButtonVariant, ButtonAsLinkTypes>
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
                <Link
                    className={`${styles.button} ${styles[buttonType]} ${styles[buttonSize]} ${className}`}
                    to={link}>{text}
                </Link>
                :
                variant === 'navLink' && link ?

                    <NavLink
                        className={`${styles.button} ${styles[buttonType]} ${styles[buttonSize]} ${className}`}
                        to={link}>
                        {text}
                    </NavLink>:

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