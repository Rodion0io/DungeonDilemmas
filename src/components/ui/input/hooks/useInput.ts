import {useState} from "react";
import * as React from "react";

export const useInput = (
    initialState: string,
    inputChange?:(value: string) => void
) => {

    const [currentText, setCurrentText] = useState<string>(initialState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value;

        setCurrentText(value);

        if (inputChange){
            // console.log('success');
            inputChange(value);
        }
    }

    return {currentText, handleChange};

}