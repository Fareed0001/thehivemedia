import React, { useEffect } from 'react'; // Import useEffect hook
import { useRouter } from 'next/router';
  import { BlogPostHeaderContent, BlogPostBodyContent } from "@/components/blogPost/blogPostContent";
  import { HeroImage } from "@/components/blogPost/blogPostImage";
  import styles from '@/styles/postPage.module.css';
import { PostData } from "@/Data/Post";

function PostPage() {
  const router = useRouter();

  // category represents the url category and the blogPost represent the url blogPost title
  const { category, blogPost } = router.query;

  // Check if PostData is defined and not empty
  if (!PostData || PostData.length === 0) {
    return <p>No posts available</p>;
  }

  // checks if category or blogPost is null or hasn't been provided or fetched yet.
  if (!category || !blogPost) {
    return <p>Loading...</p>; // Add a loading state while waiting for data
  }

  // Ensure blogPost is a string and remove hyphen
  const blogPostUrl = String(blogPost).replace(/-/g, ' ');

  // Find the post in the PostData array
  const post = PostData.find(post => post.title.toLowerCase() === blogPostUrl);


  // Check if post is not found
  if (!post) {
    // Redirect to the 404 page
    router.push('/404');
    return null;
  }

  console.log('this is the blogpost ' + blogPost);
  console.log('this is the category ' + category);
  console.log('this is the blogPostUrl ' + blogPostUrl);
  console.log('this is the image ' + post.image);
  console.log('this is the post ' + JSON.stringify(post)); // Use JSON.stringify to log the object
  console.log('this is the post category ' + JSON.stringify(post.category)); // Use JSON.stringify to log the object

  return (
    <div className={styles.postPageDiv}>
      
      <BlogPostHeaderContent
        post={{
          postCategory: post.category,
          postTitle: post.title,
          postAuthor: post.author,
          postDate: post.date
        }}
      />

      <HeroImage
        altText = 'Hero Image'
        imagePath = {'.' + post.image} // Pass the image path directly
      />
      
      <BlogPostBodyContent
      post={{
        postDescription: post.description
      }}
/>

    </div>
  );
}

export default PostPage;
