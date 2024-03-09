import React from "react";
import styles from '@/styles/homepage.module.css';
import FunandPuzzle from "../Card/FunandPuzzle";


function HomePageForthDiv() {

    return (
        <div className={styles.homeForthDiv}>
            <p className={styles.homeForthHeader}>Fun Facts and puzzles</p>
            <FunandPuzzle />
        </div>
    );

}

export default HomePageForthDiv;


