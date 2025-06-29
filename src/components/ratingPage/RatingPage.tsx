import styles from "./ratingPage.module.css"

import UserCard from "./components/userCard/UserCard.tsx";
import type {UserOtherModel, UserOtherModelList} from "../../@types/types.ts";
import {useEffect, useState} from "react";
import {getUsersListRequest} from "../../utils/API/getUsersListRequest.ts";
import {ACCESS} from "../../utils/constants.ts";
import Input from "../ui/input/Input.tsx";

const RatingPage = () => {

    const [usersList, setUsersList] = useState<UserOtherModelList>({users: []});
    const [text, setText] = useState<string | null>(null);

    useEffect(() => {
        const getUsers = async() => {
            const token: string | null = localStorage.getItem(ACCESS);
            if (token){
                try {
                    const response = await getUsersListRequest(token, text);

                    setUsersList((prev: UserOtherModelList) => ({...prev, ...response}));
                }
                catch (error){
                    console.error(error);
                }
            }
        }
        getUsers();
    },[text]);

    const handleChange = (value: string): void => {
        setText(value);
    }

    return (
        <>
            <section className="rating">
                <div className="section-container">
                    <div className="filter-container">

                    </div>
                    <div className={styles.cardContainer}>
                        <Input
                            text="Имя"
                            type="text"
                            name="name"
                            clas={styles.filter}
                            inputChange={(value) => handleChange(value)}
                        />
                        {usersList.users.map((user: UserOtherModel, index: number) => (
                            <UserCard
                                props={user}
                                index={index}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default RatingPage;