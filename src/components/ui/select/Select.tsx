import {DIFFICULTY_TRANSLATE} from "../../../utils/translations.ts";

import styles from "./select.module.css"
import {useState} from "react";

interface SelectProps extends React.ComponentProps<'select'>{
    valuesArr: string[]
    name: string;
    onChanger?: (value: string)=> void;

}

const Select = ({ valuesArr, className, name, onChanger, ...props }: SelectProps) => {

    const [selectedDifficult, setSelectedDifficult] = useState<string>("");

    const handleChooseValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;

        setSelectedDifficult(value);

        if (onChanger){
            onChanger(value);
        }
    }

    return (
        <>
            <select
                className={`${styles.select} ${className}`}
                name={name}
                value={selectedDifficult}
                // id={id}
                onChange={handleChooseValue}
                {...props}
            >
                {valuesArr.map((item, index) => (
                    <option key={index} value={item}>{DIFFICULTY_TRANSLATE[item]}</option>
                ))}
            </select>
        </>
    )
}

export default Select;