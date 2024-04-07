import React from 'react';
import styles from "@/styles/blogPost.module.css";
import { PostData } from "@/Data/Post";
// card
import { CardActionArea } from '@mui/material';
import { MoreNewsImage } from "../Card/CardImage";
import { CardTextDiv } from "../Card/CardTextDiv";
// slider
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


function MoreNews({post}) {

    // getting the post category and blogPost from the prop passed from the post
    const { category, blogPost } = post;

    // checks if category is null or hasn't been provided or fetched yet.
    if (!category) {
        return <p>Loading...</p>; // Add a loading state while waiting for data
    }

    // Ensure blogPost is a string and remove hyphen
    const blogPostUrl = String(blogPost).replace(/-/g, ' ');

    // Ensure category is a string and remove hyphen
    const blogCategory = String(category);

    // Find all posts with the same category in the PostData array
    const newsPosts = PostData.filter(newsPost => {
        // Exclude the post with the same category as blogPost
        return newsPost.category.includes(blogCategory) && newsPost.title.toLowerCase() !== blogPostUrl;
    });

    // console.log('newsPost blogPostUrl: ', blogPostUrl);
    // console.log('newsPost blogCategory: ', blogCategory);
    // console.log('newsPost all: ', newsPosts);

    // Check if newsPosts is an empty array, null, or undefined
    if (!newsPosts || newsPosts.length === 0) {
        return null; // Return nothing if newsPosts is empty
    }

    // Slider carousel 
    const [sliderRef] = useKeenSlider({
        breakpoints: {
          "(min-width: 400px)": {
            slides: { perView: 2, spacing: 5 },
          },
          "(min-width: 1000px)": {
            slides: { perView: 3, spacing: 10 },
          },
        },
        slides: { perView: 1 },
      })

    // Function to generate card link
    const generateCardLink = (newsPost) => `/${newsPost.category}/${(newsPost.title.toLowerCase().replace(/\s+/g, '-'))}`;


      return (
        <div className={styles.moreNewsDiv}>
            <p className={styles.moreNewsHeader}>Read related articles</p>
            <div className={styles.similarNewsDiv}>
                <div ref={sliderRef} className="keen-slider">
                    {newsPosts.map((newsPost, index) => (
                        <div key={newsPost.id} className={`keen-slider__slide number-slide${index + 1}`}>
                            <CardActionArea
                                href={generateCardLink(newsPost)}
                                className={styles.carouselCardActionArea}
                            >
                                <MoreNewsImage
                                    altText="Test image"
                                    imagePath={'.' + newsPost.image}
                                />
                                <CardTextDiv
                                    carousel={newsPost.carousel}
                                    title={newsPost.title}
                                    author={newsPost.author}
                                    date={newsPost.date}
                                    source={newsPost.source}
                                />
                            </CardActionArea>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


function MoreFromAuthor({ post }) {

    // Find all posts with the same author in the PostData array, excluding the current post
    const authorPosts = PostData.filter(authorPost => {
        // Ensure both titles and authors are in lowercase for case-insensitive comparison
        const postTitleLower = post.postTitle.toLowerCase();
        const authorPostTitleLower = authorPost.title.toLowerCase();
        const postAuthorLower = post.postAuthor.toLowerCase();
        const authorPostAuthorLower = authorPost.author.toLowerCase();

        // Exclude the post with the same title and author as the current post
        return (
            authorPostAuthorLower.includes(postAuthorLower) && 
            authorPostTitleLower !== postTitleLower
        );
    });
    // console.log('post author: ', post.postAuthor);
    // console.log('authorPost all: ', authorPosts);

    // Check if authorPosts is an empty array, null, or undefined
    if (!authorPosts || authorPosts.length === 0) {
        return null; // Return nothing if authorPosts is empty
    }
    
    // Slider carousel 
    const [sliderRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 400px)": {
            slides: { perView: 2, spacing: 5 },
            },
            "(min-width: 1000px)": {
            slides: { perView: 3, spacing: 10 },
            },
        },
    slides: { perView: 1 },
    })
    
    // Function to generate card link
    const generateCardLink = (authorPost) => `/${authorPost.category}/${(authorPost.title.toLowerCase().replace(/\s+/g, '-'))}`;


    return (
        <div className={styles.moreFromAuthorDiv}>
            <p className={styles.moreNewsHeader}>More from {post.postAuthor}</p>
            <div className={styles.similarNewsDiv}>
                <div ref={sliderRef} className="keen-slider">
                    {authorPosts.map((authorPost, index) => (
                        <div key={authorPost.id} className={`keen-slider__slide number-slide${index + 1}`}>
                            <CardActionArea
                                href={generateCardLink(authorPost)}
                                className={styles.carouselCardActionArea}
                            >
                                <MoreNewsImage
                                    altText="Test image"
                                    imagePath={'.' + authorPost.image}
                                />
                                <CardTextDiv
                                    carousel={authorPost.carousel}
                                    title={authorPost.title}
                                    author={authorPost.author}
                                    date={authorPost.date}
                                    source={authorPost.source}
                                />
                            </CardActionArea>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}



export { MoreNews, MoreFromAuthor };
