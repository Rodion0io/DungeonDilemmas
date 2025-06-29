import styles from "./ratingPage.module.css"

import UserCard from "./components/userCard/UserCard.tsx";
import type {UserOtherModel} from "../../@types/types.ts";
import {useEffect, useState} from "react";
import {getUsersListRequest} from "../../utils/API/getUsersListRequest.ts";
import {ACCESS} from "../../utils/constants.ts";

const RatingPage = () => {

    const [usersList, setUsersList] = useState<UserOtherModel[]>([]);

    useEffect(() => {
        const getUsers = async() => {
            const token: string | null = localStorage.getItem(ACCESS);
            if (token){
                try {
                    const response = await getUsersListRequest(token);

                    setUsersList(response);
                }
                catch (error){
                    console.error(error);
                }
            }
        }
        getUsers();
    },[])

    return (
        <>
            <section className="rating">
                <div className="section-container">
                    <div className={styles.cardContainer}>
                        <UserCard index={1}/>
                        <UserCard index={2}/>
                        <UserCard index={3}/>
                        <UserCard index={4}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RatingPage;