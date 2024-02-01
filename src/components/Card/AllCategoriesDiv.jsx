import React from "react";
import { CardActionArea, Grid } from '@mui/material';
import styles from "@/styles/card.module.css";
import Image from 'next/image';


function AllCategoriesDiv() {

    return (
        <div className={styles.allCategoriesDiv}>
            <Grid container>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <CardActionArea className={styles.allCategoriesCardActionArea} href="">
                        <Image
                            alt="Category Image"
                            src="/landingPageImages/anonymous.jpg"
                            width={300}
                            height={200}
                            className={styles.allCategoriesImage}
                        />
                        <p>Anonymous</p>
                    </CardActionArea>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <CardActionArea className={styles.allCategoriesCardActionArea} href="">
                        <Image
                            alt="Category Image"
                            src="/landingPageImages/politics.jpg"
                            width={300}
                            height={200}
                            className={styles.allCategoriesImage}
                        />
                        <p>Politics</p>
                    </CardActionArea>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <CardActionArea className={styles.allCategoriesCardActionArea} href="">
                        <Image
                            alt="Category Image"
                            src="/landingPageImages/movies.jpg"
                            width={300}
                            height={200}
                            className={styles.allCategoriesImage}
                        />
                        <p>Movies</p>
                    </CardActionArea>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <CardActionArea className={styles.allCategoriesCardActionArea} href="">
                        <Image
                            alt="Category Image"
                            src="/landingPageImages/news.jpg"
                            width={300}
                            height={200}
                            className={styles.allCategoriesImage}
                        />
                        <p>News</p>
                    </CardActionArea>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <CardActionArea className={styles.allCategoriesCardActionArea} href="">
                        <Image
                            alt="Category Image"
                            src="/landingPageImages/conspiracy.jpg"
                            width={300}
                            height={200}
                            className={styles.allCategoriesImage}
                        />
                        <p>Conspiracy</p>
                    </CardActionArea>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <CardActionArea className={styles.allCategoriesCardActionArea} href="">
                        <Image
                            alt="Category Image"
                            src="/landingPageImages/lifestyle.jpg"
                            width={300}
                            height={200}
                            className={styles.allCategoriesImage}
                        />
                        <p>Lifestyle</p>
                    </CardActionArea>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <CardActionArea className={styles.allCategoriesCardActionArea} href="">
                        <Image
                            alt="Category Image"
                            src="/landingPageImages/podcast.jpg"
                            width={300}
                            height={200}
                            className={styles.allCategoriesImage}
                        />
                        <p>Podcast</p>
                    </CardActionArea>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <CardActionArea className={styles.allCategoriesCardActionArea} href="">
                        <Image
                            alt="Category Image"
                            src="/landingPageImages/sport.jpg"
                            width={300}
                            height={200}
                            className={styles.allCategoriesImage}
                        />
                        <p>Sport</p>
                    </CardActionArea>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <CardActionArea className={styles.allCategoriesCardActionArea} href="">
                        <Image
                            alt="Category Image"
                            src="/landingPageImages/technology.jpg"
                            width={300}
                            height={200}
                            className={styles.allCategoriesImage}
                        />
                        <p>Technology</p>
                    </CardActionArea>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <CardActionArea className={styles.allCategoriesCardActionArea} href="">
                        <Image
                            alt="Category Image"
                            src="/landingPageImages/travel.jpg"
                            width={300}
                            height={200}
                            className={styles.allCategoriesImage}
                        />
                        <p>Travel</p>
                    </CardActionArea>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <CardActionArea className={styles.allCategoriesCardActionArea} href="">
                        <Image
                            alt="Category Image"
                            src="/landingPageImages/weather.jpg"
                            width={300}
                            height={200}
                            className={styles.allCategoriesImage}
                        />
                        <p>Weather</p>
                    </CardActionArea>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <CardActionArea className={styles.allCategoriesCardActionArea} href="">
                        <Image
                            alt="Category Image"
                            src="/landingPageImages/music.jpg"
                            width={300}
                            height={200}
                            className={styles.allCategoriesImage}
                        />
                        <p>Music</p>
                    </CardActionArea>
                </Grid>
            </Grid>
        </div>
    );

}

export default AllCategoriesDiv;


