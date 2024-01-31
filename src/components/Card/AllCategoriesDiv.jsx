import React from "react";
import { CardActionArea, Grid } from '@mui/material';
import { ImageTopContentBottomImage } from "../Card/CardImage";
import { CardTextDiv } from "../Card/CardTextDiv";
import styles from "@/styles/card.module.css";


function AllCategoriesDiv() {

    return (
        <div className={styles.allCategoriesDiv}>
            <Grid container>
                <Grid item xs={6} sm={6} md={8} lg={4}>
                    <CardActionArea>
                        <ImageTopContentBottomImage
                            altText="Category Image"
                            imagePath="/images/landingPageImages/anonymous.jpeg"
                        />
                        <CardTextDiv
                            category="Anonymous"
                        />
                    </CardActionArea>
                </Grid>
            </Grid>
        </div>
    );

}

export default AllCategoriesDiv;


