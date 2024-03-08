import React from "react";
import styles from '@/styles/homepage.module.css';
import GamesDiv from "../Card/FunandPuzzle";


function HomePageForthDiv() {

    return (
        <div className={styles.homeForthDiv}>
            <p className={styles.homeForthHeader}>Fun Facts and puzzles</p>
            <GamesDiv />
        </div>
    );

}

export default HomePageForthDiv;


