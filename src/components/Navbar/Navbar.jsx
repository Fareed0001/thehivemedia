import React from "react";
import { LogoImage } from "../Image/LogoImage";
import Link from "next/link";
import LightDarkMode from "./LightDarkMode";
import NavSearchbar from "./Search";
import Sidebar from "./SideMenu";
import styles from '@/styles/navbar.module.css';
import Divider from '@mui/material/Divider';


function Navbar() {

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoDiv}>
        <Link href="/">
          <LogoImage
            altText="The Hive Media Logo"
            imagePath="/images/logo.png"
          />
        </Link>
      </div>

      <div className={styles.navbarLinkDiv}>
        <span>Quick Links</span>
      <Divider className={styles.divider} orientation="vertical" flexItem />
          <Link href="">Home</Link>
          <Link href="">Podcast</Link>
          <Link href="">Trends</Link>
          <Link href="">News</Link>
      <Divider className={styles.divider} orientation="vertical" flexItem />
      </div>

      <div className={styles.navbarIconDiv}>
        <LightDarkMode />
        <NavSearchbar />
        <Sidebar />
      </div>
    </div>
  );

}

export default Navbar;