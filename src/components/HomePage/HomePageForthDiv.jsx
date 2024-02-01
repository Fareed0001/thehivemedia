import React from "react";
import styles from '@/styles/homepage.module.css';
import GamesDiv from "../Card/GamesDiv";


function HomePageForthDiv() {

    return (
        <div className={styles.homeForthDiv}>
            <p className={styles.homeForthHeader}>Free to play Games</p>
            <GamesDiv />
        </div>
    );

}

export default HomePageForthDiv;


