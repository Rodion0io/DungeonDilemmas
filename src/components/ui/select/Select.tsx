import {DIFFICULTY_TRANSLATE} from "../../../utils/translations.ts";

interface SelectProps extends React.ComponentProps<'select'>{
    valuesArr: string[]
    name: string;

}

const Select = ({ valuesArr, className, name, ...props }: SelectProps) => {

    return (
        <>
            <select
                className={`select ${className}`}
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