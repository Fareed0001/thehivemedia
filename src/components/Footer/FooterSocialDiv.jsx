import React from "react";
import Link from "next/link";
import styles from '@/styles/footer.module.css';
import Button from '@mui/material/Button';
// icons
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";


function FooterSocialDiv() {

    return (
   
   <div className={styles.socialMediaDiv}>
        <p className={styles.footerColHeader}>SOCIAL MEDIA</p>
        <div className={styles.socialMediaIcon}>
            <Link href=""><FaFacebook className={styles.socialIcon} /></Link>
            <Link href=""><FaXTwitter className={styles.socialIcon} /></Link>
            <Link href=""><AiFillInstagram className={styles.socialIcon} /></Link>
            <Link href=""><IoLogoWhatsapp className={styles.socialIcon} /></Link>
        </div>
        <Button className={styles.footerSignIn} variant="contained" size="small" href="/auth/SignUp">
          Sign Up
        </Button>
    </div>
            
    );

}

export default FooterSocialDiv;