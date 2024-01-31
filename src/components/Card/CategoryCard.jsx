
import React from "react";
import { CardActionArea } from '@mui/material';
import { PostData } from "@/Data/Post";
import { CategoryCardImage } from "../Card/CardImage";
import { CardTextDiv } from "../Card/CardTextDiv";
import styles from "@/styles/card.module.css";
import { Grid } from '@mui/material';


function CategoryCard() {
    // Check if PostData is defined and not empty
    if (!PostData || PostData.length === 0) {
        return <p>No posts available</p>;
    }

    // Get the first post from the array
    const categoryFirstPost = PostData[0];

    // Function to generate card link
    const generateCardLink = (post) => `/${post.category}/${post.title}`;

    return (
        <Grid item xs={12} sm={6} md={6} lg={3} className={styles.homePageFirstDivLargeCardDiv}>
            <div className={styles.categoryCardDiv}>
                <CardActionArea href={generateCardLink(categoryFirstPost)}>
                    <CategoryCardImage
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
            </div>
        </Grid>
    );
}

export default CategoryCard;
