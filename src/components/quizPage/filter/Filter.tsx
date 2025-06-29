import styles from "./filter.module.css"
import {useState} from "react";
import type {FilterModel} from "../../../@types/types.ts";
// import {ERROR_MESSAGES} from "../../../utils/errorMessages.ts";
import Input from "../../ui/input/Input.tsx";
import Select from "../../ui/select/Select.tsx";
import Button from "../../ui/button/Button.tsx";
import {ACCESS} from "../../../utils/constants.ts";
import {createrUrl} from "../../../utils/createrUrl.ts";
import {getQuizezPage} from "../../../utils/API/getQuizezPage.ts";

const Filter = () => {

    const [filter, setFilter] = useState<FilterModel>(
        {
            title: undefined,
            description: undefined,
            difficulty: undefined,
            creatorEmail: undefined,
            page: 1,
            pageSize: 5
        });

    const handleChange = (value: string, input: keyof FilterModel) => {
        setFilter((prev) => (
            {...prev, [input]: value}
        ))
    }

    const handleClick = async () => {
        const token: string | null = localStorage.getItem(ACCESS);
        const urlPart: string = createrUrl(filter);

        if (token){
            try {
                const respose = await getQuizezPage(token, urlPart);

            }
        }
    }


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
                        <Select valuesArr={["", "Easy", "Medium", "Hard"]} name="difficulty"/>
                    </div>
                    <div className="action-block">
                        <Button variant='button' text="Применить" buttonType="default"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Filter;