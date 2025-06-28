import styles from "./ratingPage.module.css"

import UserCard from "./components/userCard/UserCard.tsx";

const RatingPage = () => {

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