import React from "react";
import Link from "next/link";
import styles from '@/styles/footer.module.css';
// List
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';


function FooterSecondDiv() {

    return (
        
        <div className={styles.footerLinkDiv}>
            <List>
                <p className={styles.footerColHeader}>INFORMATION</p>
                <ListItem>
                    <Link href="">About Us</Link>
                </ListItem>
                <ListItem>
                    <Link href="">Contact Us</Link>
                </ListItem>
                <ListItem>
                    <Link href="">Advertise With Us</Link>
                </ListItem>
                <ListItem>
                    <Link href="">Jobs</Link>
                </ListItem>
            </List>
        </div>

    );

}

export default FooterSecondDiv;