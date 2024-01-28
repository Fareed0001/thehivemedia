import React from "react";
import styles from '@/styles/footer.module.css';
import Button from '@mui/material/Button';
import { LuLanguages } from "react-icons/lu";


function FooterBottomDiv() {

    return (
       
        <div className={styles.footerBottomDiv}>
            <p className={styles.copyRight}>COPYRIGHT © 2024 THE HIVE MEDIA. ALL RIGHTS RESERVED.</p>
            <Button variant="contained" startIcon={<LuLanguages />} size="small" className={styles.translate}>Language</Button>
        </div>

    );

}

export default FooterBottomDiv;