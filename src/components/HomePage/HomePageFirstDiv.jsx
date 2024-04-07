import React from "react";
import ImageTopContentBottom from "../Card/ImageTopContentBottom";
import ImageLeftContentRight from "../Card/ImageLeftContentRight";
import styles from '@/styles/homepage.module.css';
import { Grid } from '@mui/material';
import Link from 'next/link';
import { FaRegArrowAltCircleRight } from "react-icons/fa";


function HomePageFirstDiv() {

    return (
        <Grid container className={styles.homePageFirstDiv}>
            <Grid item xs={12} sm={6} md={6} lg={6} className={styles.homePageFirstDivLargeCardDiv}>
                <ImageTopContentBottom />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} className={styles.homePageFirstDivSmallCardDiv}>
                <ImageLeftContentRight />
            </Grid>
            <Link href=''>
                <p className={styles.viewMore}>View more articles <FaRegArrowAltCircleRight  className={styles.viewMoreIcon}/></p>
            </Link>
        </Grid>
    );

}

export default HomePageFirstDiv;
