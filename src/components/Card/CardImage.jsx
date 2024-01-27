import Image from "next/image";
import styles from '@/styles/card.module.css';

function ImageTopContentButtomImage({ altText, imagePath }) {
    return (
        <Image
            className={styles.imageTopContentButtomImage}
            alt={altText}
            src={imagePath}
            width={100}
            height={100}
            unoptimized 
            priority
        />
    );
}

function ImageLeftContentRightImage({ altText, imagePath }) {
    return (
        <Image
            className={styles.ImageLeftContentRightImage}
            alt={altText}
            src={imagePath}
            width={100}
            height={100}
            unoptimized 
        />
    );
}

export { ImageTopContentButtomImage, ImageLeftContentRightImage };
