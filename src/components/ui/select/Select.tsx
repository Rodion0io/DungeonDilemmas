import {DIFFICULTY_TRANSLATE} from "../../../utils/translations.ts";

import styles from "./select.module.css"

interface SelectProps extends React.ComponentProps<'select'>{
    valuesArr: string[]
    name: string;

}

const Select = ({ valuesArr, className, name, ...props }: SelectProps) => {

    return (
        <>
            <select
                className={`${styles.select} ${className}`}
                name={name}
                // value={selected}
                // id={id}
                // onChange={handleSelect}
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