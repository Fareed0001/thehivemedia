import React from "react";
import styles from "@/styles/auth.module.css";
import { Grid } from "@mui/material";
import { FirstNameField, UserNameField, EmailField, PassWordField, TermsAndConditionField } from "@/components/Form/InputFields";
import Divider from '@mui/material/Divider';
import {EnterButton, GoogleButton } from "@/components/Button/Button";
import Link from "next/link";

function SignUp() {
    return (
        <div className={styles.signUpDiv}>
            <p className={styles.signUpHeader}>Sign up</p>
            <form className={styles.signUpForm}>
                <Grid container>
                    <Grid className={styles.signUpGrid} item xs={12} sm={12} md={7} lg={7}>
                        <FirstNameField />
                    </Grid>
                    <Grid className={styles.signUpGrid} item xs={12} sm={12} md={5} lg={5}>                                
                        <UserNameField />
                    </Grid>
                    <Grid className={styles.signUpGrid} item xs={12} sm={12} md={12} lg={12}>                                
                        <EmailField />                        
                    </Grid>
                    <Grid className={styles.signUpGrid} item xs={12} sm={12} md={12} lg={12}>                                
                        <PassWordField />                          
                    </Grid>
                    <Grid className={styles.signUpGrid} item xs={12} sm={12} md={12} lg={12}>
                        <TermsAndConditionField />                        
                    </Grid>
                </Grid>
                <div className={styles.buttonDiv}>
                    <EnterButton value="Create new account" />
                    <Divider className={styles.divider}>or</Divider>
                    <GoogleButton />
                </div>
                <p className={styles.alreadyHaveAccount}>I already have an account? <Link href="/auth/SignIn">Sign In</Link></p>
            </form>
        </div>
    );
}

export default SignUp;
