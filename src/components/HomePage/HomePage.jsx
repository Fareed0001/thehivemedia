import React from "react";
import HomePageFirstDiv from "./HomePageFirstDiv";
import styles from "@/styles/homepage.module.css";
import Advert from "../Advert/Advert"


function HomePage() {

    return (
        <div className={styles.homePageDiv}>
            <HomePageFirstDiv />       
            <Advert />
        </div>
    );

}

export default HomePage;