import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from "@/styles/blogPost.module.css";
import ShareIcon from '@mui/icons-material/Share';

function LikeAndShareButton() {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(prevLiked => !prevLiked);
  };

  return (
    <div className={styles.likeButtonDiv}>
      <IconButton onClick={handleLikeClick} aria-label="like">
        {liked ? <FavoriteIcon className={styles.likeButton} /> : <FavoriteBorderIcon className={styles.likeSkeletonButton} />}
      </IconButton>
      <IconButton>
        <ShareIcon className={styles.shareButton} />
      </IconButton>
    </div>
  );
}

export default LikeAndShareButton;
