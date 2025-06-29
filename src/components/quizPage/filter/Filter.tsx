import styles from "./filter.module.css"
import {useState} from "react";
import type {FilterModel} from "../../../@types/types.ts";
import {ERROR_MESSAGES} from "../../../utils/errorMessages.ts";
import Input from "../../ui/input/Input.tsx";

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

    return (
        <>
            <section className={styles.filter}>
                <div className={styles.filterContainer}>
                    <h2 className="title">Фильтрация</h2>
                    <Input
                        text="Email"
                        type="email"
                        name="email"
                        // errorText={errorCode > 0 ? ERROR_MESSAGES[errorCode] : undefined}
                        // inputChange={(value) => handleChange(value, "email")}
                    />
                    <Input
                        text="Email"
                        type="email"
                        name="email"
                        // errorText={errorCode > 0 ? ERROR_MESSAGES[errorCode] : undefined}
                        // inputChange={(value) => handleChange(value, "email")}
                    />

                    <Input
                        text="Email"
                        type="email"
                        name="email"
                        // errorText={errorCode > 0 ? ERROR_MESSAGES[errorCode] : undefined}
                        // inputChange={(value) => handleChange(value, "email")}
                    />
                </div>
            </section>
        </>
    )
}

export default Filter;