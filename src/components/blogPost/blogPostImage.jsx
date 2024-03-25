import Image from "next/image";
import styles from '@/styles/blogPost.module.css';

function HeroImage({ altText, imagePath }) {
    return (
        <Image
            className={styles.blogPostHeroImage}
            alt={altText}
            src={imagePath}
            width={600} // Adjust width as per your design
            height={400} // Adjust height as per your design
            unoptimized 
            priority
        />
    );
}

function BodyImage({ altText, imagePath }) {
    return (
        <Image
            className={styles.blogPostBodyImage}
            alt={altText}
            src={imagePath}
            width={600} // Adjust width as per your design
            height={400} // Adjust height as per your design
            unoptimized 
        />
    );
}



export { HeroImage, BodyImage };
