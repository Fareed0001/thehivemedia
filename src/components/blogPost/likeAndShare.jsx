import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from "@/styles/blogPost.module.css";
import ShareIcon from '@mui/icons-material/Share';
// NPM NEXT SHARE
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'next-share'




// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo
// check how zikoko and tech cabal did their seo





// passed in postTitle prop to get the link properly
function LikeAndShareButton({ postTitle, postHeader }) {
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

      <WhatsappShareButton
        url={`https://thehivemedia.vercel.app/${postTitle}`}
        title={`Check out ${postHeader} on *TheHiveMedia*: `}
        // separator=":: "
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <FacebookShareButton
        url={`https://thehivemedia.vercel.app/${postTitle}`}
        quote={`Check out ${postHeader} on TheHiveMedia: `}
        hashtag={'#thehivemedia'}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={`https://thehivemedia.vercel.app/${postTitle}`}
        title={`Check out ${postHeader} on TheHiveMedia: `}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton  url={`https://thehivemedia.vercel.app/${postTitle}`}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <TelegramShareButton
        url={`https://thehivemedia.vercel.app/${postTitle}`}
        title={`Check out ${postHeader} on TheHiveMedia: `}
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
    </div>
  );
}

export default LikeAndShareButton;