import styles from "./button.module.css"

import * as React from "react";

type ButtonVariant = 'button' | 'link';
type ButtonType = 'primary' | 'secondary' | 'danger' | 'danger-outline';
type ButtonSize = 'default' | 'small' | 'very-small';

interface ButtonProps extends React.ComponentProps<'button'>{
    variant: ButtonVariant,
    text: string,
    buttonType: ButtonType,
    buttonSize: ButtonSize
}

const Button = ({
                    variant = 'button',
                    text,
                    buttonType,
                    buttonSize = 'default',
                    ...props}: ButtonProps) => {
    return (

        <>
            {variant === 'button' ?
                <button className={`${styles.button}`} type="button" {...props}>{text}</button>
                : null
            }
        </>

    )
}

export default Button;