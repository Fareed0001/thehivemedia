import React from 'react';
import styles from "@/styles/blogPost.module.css";

function BlogPostHeaderContent({ post }) {
    return (
        <div className={styles.blogPostHeaderDiv}>
            <p className={styles.postCategory}>{post.postCategory}</p>
            <p className={styles.postTitle}>{post.postTitle}</p>
            <p className={styles.postAuthor}>{post.postAuthor} | {post.postDate}</p>
        </div>
    );
}

function BlogPostBodyContent({ post }) {
    return (
        <div className={styles.blogPostBodyDiv}>
            <p className={styles.postDescription}>{post.postDescription}</p>
        </div>
    );
}

export { BlogPostHeaderContent, BlogPostBodyContent };
