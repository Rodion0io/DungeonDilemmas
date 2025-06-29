import styles from "./filter.module.css"
import type {FilterModel} from "../../../@types/types.ts";
import Input from "../../ui/input/Input.tsx";
import Select from "../../ui/select/Select.tsx";
import Button from "../../ui/button/Button.tsx";

interface FilterProps {
    handleClick:() => void;
    handleChange: (value: string, input: keyof FilterModel) => void;
}

const Filter = ({ handleClick, handleChange }: FilterProps) => {


    return (
        <>
            <section className={styles.filter}>
                <div className={styles.filterContainer}>
                    <h2 className="title">Фильтрация</h2>
                    <Input
                        text="Название"
                        type="text"
                        name="title"
                        // errorText={errorCode > 0 ? ERROR_MESSAGES[errorCode] : undefined}
                        inputChange={(value) => handleChange(value, "title")}
                    />
                    <Input
                        text="Описание"
                        type="text"
                        name="description"
                        // errorText={errorCode > 0 ? ERROR_MESSAGES[errorCode] : undefined}
                        inputChange={(value) => handleChange(value, "description")}
                    />

                    <Input
                        text="Почта создателя"
                        type="email"
                        name="emailCreater"
                        // errorText={errorCode > 0 ? ERROR_MESSAGES[errorCode] : undefined}
                        inputChange={(value) => handleChange(value, "creatorEmail")}
                    />
                    <div className="select-block">
                        <p className="text">Сложность</p>
                        <Select
                            valuesArr={["", "Easy", "Medium", "Hard"]}
                            name="difficulty"
                            onChanger={(value) => handleChange(value, "difficulty")}
                        />
                    </div>
                    <div className="action-block">
                        <Button
                            variant='button'
                            text="Применить"
                            buttonType="default"
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Filter;