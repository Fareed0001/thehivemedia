import Image from "next/image";
import styles from '@/styles/card.module.css';

function ImageTopContentBottomImage({ altText, imagePath }) {
    return (
        <Image
            className={styles.imageTopContentBottomImage}
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
            className={styles.imageLeftContentRightImage}
            alt={altText}
            src={imagePath}
            width={100}
            height={100}
            unoptimized
        />
    );
}

function CategoryCardImage({ altText, imagePath }) {
    return (
        <Image
            className={styles.categoryCardImage}
            alt={altText}
            src={imagePath}
            width={100}
            height={100}
            unoptimized
        />
    );
}

function MoreNewsImage({ altText, imagePath }) {
    return (
        <Image
            className={styles.moreNewsImage}
            alt={altText}
            src={imagePath}
            width={100}
            height={100}
            unoptimized
        />
    );
}

export { ImageTopContentBottomImage, ImageLeftContentRightImage, CategoryCardImage, MoreNewsImage };
