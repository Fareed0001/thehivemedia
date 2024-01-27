import React from "react";
import ImageTopContentButtom from "../Card/ImageTopContentBottom";
import ImageLeftContentRight from "../Card/ImageLeftContentRight";
import styles from '@/styles/homepage.module.css';
import { Grid } from '@mui/material';

function HomePageFirstDiv() {

    return (
        <Grid container className={styles.homePageFirstDiv}>
            <Grid item xs={12} sm={6} md={6} lg={6} className={styles.homePageFirstDivLargeCardDiv}>
                <ImageTopContentButtom />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} className={styles.homePageFirstDivSmallCardDiv}>
                <ImageLeftContentRight />
            </Grid>
        </Grid>
    );

}

export default HomePageFirstDiv;
