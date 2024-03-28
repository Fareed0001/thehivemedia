import React from "react";
import styles from "@/styles/card.module.css";
import { CardActionArea, Grid } from '@mui/material';
import { PostData } from "@/Data/Post";
import { ImageLeftContentRightImage } from "./CardImage";
import { SmallCardTextDiv } from "./CardTextDiv";

function ImageLeftContentRight() {
  // Check if PostData is defined and not empty
  if (!PostData || PostData.length === 0) {
    return <p>No posts available</p>;
  }

  // Get the first three posts from the array
  const [firstPost, secondPost, thirdPost] = PostData.slice(1, 4);

  // Function to generate card link
  const generateCardLink = (post) => `/${post.category}/${encodeURIComponent(post.title.toLowerCase().replace(/\s+/g, '-'))}`;


  return (
    <div className={styles.imageLeftContentRightDiv}>
      {/* First Post */}
      <div className={styles.firstDiv}>
        <CardActionArea href={generateCardLink(firstPost)} className={styles.imageLeftContentRightCardActionArea}>
          <Grid container>
            <Grid item xs={4} sm={5} md={4} lg={4}>
              <ImageLeftContentRightImage
                altText="Test image"
                imagePath={firstPost.image}
              />
            </Grid>
            <Grid item xs={8} sm={7} md={8} lg={8}>
              <SmallCardTextDiv
                className={styles.imageLeftContentRightSmallCardTextDiv}
                category={firstPost.category}
                title={firstPost.title}
                author={firstPost.author}
                date={firstPost.date}
                source={firstPost.source}
              />
            </Grid>
          </Grid>
        </CardActionArea>
      </div>

      {/* Second Post */}
      <div className={styles.secondDiv}>
        <CardActionArea href={generateCardLink(secondPost)} className={styles.imageLeftContentRightCardActionArea}>
          <Grid container>
            <Grid item xs={4} sm={5} md={4} lg={4}>
              <ImageLeftContentRightImage
                altText="Test image"
                imagePath={secondPost.image}
              />
            </Grid>
            <Grid item xs={8} sm={7} md={8} lg={8}>
              <SmallCardTextDiv
                className={styles.imageLeftContentRightSmallCardTextDiv}
                category={secondPost.category}
                title={secondPost.title}
                author={secondPost.author}
                date={secondPost.date}
                source={secondPost.source}
              />
            </Grid>
          </Grid>
        </CardActionArea>
      </div>

      {/* Third Post */}
      <div className={styles.thirdDiv}>
        <CardActionArea href={generateCardLink(thirdPost)} className={styles.imageLeftContentRightCardActionArea}>
          <Grid container>
            <Grid item xs={4} sm={5} md={4} lg={4}>
              <ImageLeftContentRightImage
                altText="Test image"
                imagePath={thirdPost.image}
              />
            </Grid>
            <Grid item xs={8} sm={7} md={8} lg={8}>
              <SmallCardTextDiv
                className={styles.imageLeftContentRightSmallCardTextDiv}
                category={thirdPost.category}
                title={thirdPost.title}
                author={thirdPost.author}
                date={thirdPost.date}
                source={thirdPost.source}
              />
            </Grid>
          </Grid>
        </CardActionArea>
      </div>
    </div>
  );
}

export default ImageLeftContentRight;
