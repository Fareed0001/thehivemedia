import React from "react";
import styles from '@/styles/homepage.module.css';
import { Grid } from '@mui/material';
import CategoryCard from "../Card/CategoryCard";


function HomePageSecondDiv() {

    return (
        <Grid container className={styles.homePageFirstDiv}>
            <Grid item xs={12} sm={6} md={6} lg={3} className={styles.homePageFirstDivLargeCardDiv}>
                <CategoryCard />
            </Grid>
        </Grid>
    );

}

export default HomePageSecondDiv;


