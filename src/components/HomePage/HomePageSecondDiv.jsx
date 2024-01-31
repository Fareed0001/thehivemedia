import React from "react";
import styles from '@/styles/homepage.module.css';
import { Grid } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { PostData } from "@/Data/Post";
import { ImageTopContentButtomImage } from "../Card/CardImage";
import { CardTextDiv } from "../Card/CardTextDiv";


function HomePageSecondDiv() {

    // Get the category post from the array
    const categoryFirstPost = PostData[4];
    // const categorySecondPost = PostData[0];

    // Function to generate card link
    const generateCardLink = (post) => `/${post.category}/${post.title}`;


    return (
        <Grid container className={styles.homePageFirstDiv}>
            <Grid item xs={12} sm={6} md={6} lg={3} className={styles.homePageFirstDivLargeCardDiv}>
                <CardActionArea href={generateCardLink(categoryFirstPost)}>
                    <ImageTopContentButtomImage
                        altText="Test image"
                        imagePath={categoryFirstPost.image}
                    />
                    <CardTextDiv
                        category={categoryFirstPost.category}
                        title={categoryFirstPost.title}
                        author={categoryFirstPost.author}
                        date={categoryFirstPost.date}
                        source={categoryFirstPost.source}
                    />
                </CardActionArea>
            </Grid>
        </Grid>
    );

}

export default HomePageSecondDiv;


