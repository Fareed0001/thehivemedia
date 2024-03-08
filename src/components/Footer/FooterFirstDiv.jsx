import React from "react";
import { FooterLogoImage } from "../Image/LogoImage";
import Link from "next/link";
import styles from '@/styles/footer.module.css';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';


function FooterFirstDiv() {

    return (
        <div className={styles.footerLogoDiv}>
            <Link href="/">
                <FooterLogoImage
                    altText="The Hive Media Logo"
                    imagePath="/images/logo.png"
                />
            </Link>
            <p>The Hive Media is a dynamic blog site exploring diverse topics with a focus on knowledge, creativity, and engaging narratives.</p>
        </div>
    );

}

export default FooterFirstDiv;