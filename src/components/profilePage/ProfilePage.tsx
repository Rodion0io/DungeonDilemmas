import Profile from "./components/profile/Profile.tsx";
import {useEffect, useState} from "react";
import type {UserModel} from "../../@types/types.ts";
import {ACCESS} from "../../utils/constants.ts";
import {getMyProfileRequest} from "../../utils/API/getMyProfileRequest.ts";

const ProfilePage = () => {

    const [userInformation, setUserInformation] = useState<UserModel>(
        {id: "", email: "", userName: "", totalPoints: 0, bestUsersGame: {name: "", score: 0}});

    useEffect(() => {
        const fetchFunction = async() => {
            const token: string | null = localStorage.getItem(ACCESS);
            if (token){
                try{
                    const response: UserModel = await getMyProfileRequest(token);
                    setUserInformation(response);
                }
                catch (error){
                    console.error(error);
                }
            }
        }
        fetchFunction();
    }, []);

    return (
        <>
            <section className="profile">
                <div className="section-container">
                    <Profile props={userInformation} />
                </div>
            </section>
        </>
    )
};

export default ProfilePage;