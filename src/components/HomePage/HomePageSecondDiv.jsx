import React from "react";
import styles from '@/styles/homepage.module.css';
import CategoryCard from "../Card/CategoryCard";
import Link from 'next/link';
import { FaRegArrowAltCircleRight } from "react-icons/fa";


function HomePageSecondDiv() {

    return (
        <div className={styles.homePageSecondDiv}>
            <CategoryCard />
            <Link href=''>
                <p className={styles.viewMore}>View more news content <FaRegArrowAltCircleRight  className={styles.viewMoreIcon}/></p>
            </Link>
        </div>
    );

}

export default HomePageSecondDiv;


