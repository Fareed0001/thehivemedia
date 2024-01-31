import React from "react";
import { CardActionArea, Grid } from '@mui/material';
import { PostData } from "@/Data/Post";
import { CategoryCardImage } from "../Card/CardImage";
import { CardTextDiv } from "../Card/CardTextDiv";
import styles from "@/styles/card.module.css";

function CategoryCard() {
    // Check if PostData is defined and not empty
    if (!PostData || PostData.length === 0) {
        return <p>No posts available</p>;
    }

    // Get the first six posts from the array
    const posts = PostData.slice(4, 10);

    // Function to generate card link
    const generateCardLink = (post) => `/${post.category}/${post.title}`;

    return (
        <Grid container className={styles.categoryCardDiv}>
            {posts.map((post, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={post.id} className={styles.categoryCardCol}>
                        <CardActionArea
                            key={index}
                            href={generateCardLink(post)}
                            className={styles.categoryCardActionArea}
                        >
                            <CategoryCardImage
                                altText="Test image"
                                imagePath={post.image}
                            />
                            <CardTextDiv
                                category={post.category}
                                title={post.title}
                                author={post.author}
                                date={post.date}
                                source={post.source}
                            />
                        </CardActionArea>
                </Grid>
            ))}
            </Grid>
    );
}

export default CategoryCard;
