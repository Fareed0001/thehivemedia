import Image from "next/image";
import styles from '@/styles/image.module.css';

function LogoImage({ altText, imagePath }) {
    return (
        <Image
            className={styles.logoImage}
            alt={altText}
            src={imagePath}
            width={100}
            height={100}
            priority
        />
    );
}

function FooterLogoImage({ altText, imagePath }) {
    return (
        <Image
            className={styles.footerLogoImage}
            alt={altText}
            src={imagePath}
            width={100}
            height={100}
            priority
        />
    );
}

export { LogoImage, FooterLogoImage };
