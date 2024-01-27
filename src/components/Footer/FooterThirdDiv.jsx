import React from "react";
import Link from "next/link";
import styles from '@/styles/footer.module.css';
// List
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';



function FooterThirdDiv() {

    return (
    
        <div className={styles.supportFooterDiv}>
            <List>
                <p className={styles.footerColHeader}>LEGAL</p>
                <ListItem>
                    <Link href="">Terms of use</Link>
                </ListItem>
                <ListItem>
                    <Link href="">License agreement</Link>
                </ListItem>
                <ListItem>
                    <Link href="">Privacy policy</Link>
                </ListItem>
                <ListItem>
                    <Link href="">Copyright information</Link>
                </ListItem>
            </List>
        </div>

    );

}

export default FooterThirdDiv;