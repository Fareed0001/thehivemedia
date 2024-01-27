import React from "react";
import FooterFirstDiv from './FooterFirstDiv';
import FooterSecondDiv from './FooterSecondDiv';
import FooterThirdDiv from './FooterThirdDiv';
import FooterSocialDiv from './FooterSocialDiv';
import FooterBottomDiv from './FooterBottomDiv';
import Divider from '@mui/material/Divider';
import styles from '@/styles/footer.module.css';
import { Grid } from '@mui/material';



function Footer() {

    return (
        <div className={styles.footerContainer}>
            <Divider className={styles.footerDivider} />
            <div className={styles.footerTopDiv}>
                <Grid container>
                    <Grid item xs={12} sm={4} md={4} lg={3}>
                        <FooterFirstDiv />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={3}>
                        <FooterSecondDiv />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={3}>
                        <FooterThirdDiv />
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={3}>
                        <FooterSocialDiv />
                    </Grid>
                </Grid>
            </div>
            <Divider className={styles.footerDivider} />
            <FooterBottomDiv />
        </div>
    );

}

export default Footer;