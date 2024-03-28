import React from 'react';
import styles from "@/styles/blogPost.module.css";
import CategoryCard from "../Card/CategoryCard";
// import Link from 'next/link';
import { CardActionArea, Grid } from '@mui/material';
import { PostData } from "@/Data/Post";
import { CategoryCardImage } from "../Card/CardImage";
import { CardTextDiv } from "../Card/CardTextDiv";



function MoreNews() {


    // Find the post with similar category in the PostData array
    const post = PostData.find(post => post.category === blogPostUrl);


    console.log('this is the post category from news ' + blogPostUrl);

    // Check if PostData is defined and not empty
    if (!PostData || PostData.length === 0) {
        return <p>No posts available</p>;
    }

    // Get the first six posts from the array
    const posts = PostData.slice(4, 10);

    // Function to generate card link
    const generateCardLink = (post) => `/${post.category}/${encodeURIComponent(post.title.toLowerCase().replace(/\s+/g, '-'))}`;


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













    // return (
    //     <div className={styles.moreNewsDiv}>
    //         <p className={styles.moreNewsHeader}>Read more</p>
    //         <div className={styles.similarNewsDiv}>
    //             <CategoryCard />
    //         </div>
    //     </div>
    // )
}

function MoreFromAuthor() {
    return (
        <div className={styles.moreFromAuthorDiv}>
            <p className={styles.moreNewsHeader}>More from this author</p>
            <div className={styles.similarNewsDiv}>

            </div>
        </div>
    )
}

export { MoreNews, MoreFromAuthor };

