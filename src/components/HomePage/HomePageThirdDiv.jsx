import React from "react";
import styles from '@/styles/homepage.module.css';
import AllCategoriesDiv from "../Card/AllCategoriesDiv";


function HomePageThirdDiv() {

    return (
        <div className={styles.homeThirdDiv}>
            <AllCategoriesDiv />
        </div>
    );

}

export default HomePageThirdDiv;


