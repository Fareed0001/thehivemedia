import React from "react";
import styles from '@/styles/homepage.module.css';
import AllCategoriesDiv from "../Card/AllCategoriesDiv";


function HomePageThirdDiv() {

    return (
        <div className={styles.homeThirdDiv}>
            <p className={styles.homeThirdHeader}>Categories</p>
            <AllCategoriesDiv />
        </div>
    );

}

export default HomePageThirdDiv;


