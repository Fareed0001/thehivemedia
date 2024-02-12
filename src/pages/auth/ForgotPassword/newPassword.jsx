import React from "react";
import styles from "@/styles/auth.module.css";
import { Grid } from "@mui/material";
import { PassWordField } from "@/components/Form/InputFields";
import Divider from '@mui/material/Divider';
import {EnterButton, GoogleButton } from "@/components/Button/Button";
import Link from "next/link";

function NewPassword() {
    return (
        <div className={styles.signUpDiv}>
            <p className={styles.signUpHeader}>Create new password</p>
            <form className={styles.signUpForm}>
                <Grid container>
                    <Grid className={styles.signUpGrid} item xs={12} sm={12} md={12} lg={12}>                                
                        <PassWordField />                        
                    </Grid>
                </Grid>
                <div className={styles.buttonDiv}>
                    <EnterButton value="Reset password" />
                    <Divider className={styles.divider}>or</Divider>
                    <GoogleButton />
                </div>
                <p className={styles.alreadyHaveAccount}>I don't have an account? <Link href="/auth/SignUp">Sign up</Link></p>
            </form>
        </div>
    );
}

export default NewPassword;
