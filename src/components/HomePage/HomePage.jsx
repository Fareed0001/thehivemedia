import React from "react";
import HomePageFirstDiv from "./HomePageFirstDiv";
import HomePageSecondDiv from "./HomePageSecondDiv";
import HomePageThirdDiv from "./HomePageThirdDiv";
import HomePageForthDiv from "./HomePageForthDiv";
import styles from "@/styles/homepage.module.css";
import Advert from "../Advert/Advert"


function HomePage() {

    return (
        <div className={styles.homePageDiv}>
            <HomePageFirstDiv />
            <Advert />
            <HomePageSecondDiv />
            <Advert />
            <HomePageThirdDiv />
            <Advert />
            <HomePageForthDiv />
            <Advert />
        </div>
    );

}

export default HomePage;