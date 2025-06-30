import {DIFFICULTY_TRANSLATE} from "../../../utils/translations.ts";

import styles from "./select.module.css"
import {useState} from "react";
import type {QuestionsModel} from "../../../@types/types.ts";

interface SelectProps extends React.ComponentProps<'select'>{
    valuesArr?: string[];
    name: string;
    onChanger?: (value: string)=> void;
    questions?:  QuestionsModel[];
}

const Select = ({ valuesArr, className, name, onChanger, questions, ...props }: SelectProps) => {

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
                {valuesArr ?
                    valuesArr.map((item, index) => (
                    <option key={index} value={item}>{DIFFICULTY_TRANSLATE[item]}</option>
                )): questions ?
                    questions.map((item) => (
                        <option id={item.id} key={item.id} value={item.id}>{item.questionText}</option>
                    )):null
                }
            </select>
        </>
    )
}

export default Select;