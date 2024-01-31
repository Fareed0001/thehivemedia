import React from "react";
import styles from '@/styles/homepage.module.css';
import { Grid } from '@mui/material';
import CategoryCard from "../Card/CategoryCard";


function HomePageSecondDiv() {

    return (
        <Grid container className={styles.homePageFirstDiv}>
            <CategoryCard />
        </Grid>
    );

}

export default HomePageSecondDiv;


