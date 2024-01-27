import React from "react";
import styles from "@/styles/card.module.css";
import { CardActionArea } from '@mui/material';
import { PostData } from "@/Data/Post";
import { ImageTopContentButtomImage } from "./CardImage";
import { CardTextDiv } from "./CardTextDiv";

function ImageTopContentButtom() {

  // Check if PostData is defined and not empty
  if (!PostData || PostData.length === 0) {
    return <p>No posts available</p>;
  }

  // Get the first post from the array
  const firstPost = PostData[0];

  // Function to generate card link
  const generateCardLink = (post) => `/${post.category}/${post.id}`;

  return (
    <div className={styles.imageTopContentButtomDiv}>
      <div className={styles.imageTopContentButtomCard}>
        <CardActionArea href={generateCardLink(firstPost)}>
          <ImageTopContentButtomImage
            altText="Test image"
            imagePath={firstPost.image}
          />
          <CardTextDiv
            category={firstPost.category}
            title={firstPost.title}
            author={firstPost.author}
            date={firstPost.date}
            source={firstPost.source}
          />
        </CardActionArea>
      </div>
    </div>
  );
}

export default ImageTopContentButtom;
