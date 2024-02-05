import React from "react";
import styles from "@/styles/auth.module.css";
import { Grid } from "@mui/material";
import { EmailField, PassWordField, TermsAndConditionField } from "@/components/Form/InputFields";
import Divider from '@mui/material/Divider';
import {EnterButton, GoogleButton } from "@/components/Button/Button";
import Link from "next/link";

function SignIn() {
    return (
        <div className={styles.signUpDiv}>
            <p className={styles.signUpHeader}>Login</p>
            <form className={styles.signUpForm}>
                <Grid container>
                    <Grid className={styles.signUpGrid} item xs={12} sm={12} md={12} lg={12}>                                
                        <EmailField />                        
                    </Grid>
                    <Grid className={styles.signUpGrid} item xs={12} sm={12} md={12} lg={12}>                                
                        <PassWordField />       
                        <p className={styles.forgotPassword}><Link href="/auth/ForgotPassword">Forgot password?</Link></p>                                          
                    </Grid>
                </Grid>
                <div className={styles.buttonDiv}>
                    <EnterButton value="Login" />
                    <Divider className={styles.divider}>or</Divider>
                    <GoogleButton />
                </div>
                <p className={styles.alreadyHaveAccount}>I don't have an account? <Link href="/auth/SignUp">Sign up</Link></p>
            </form>
        </div>
    );
}

export default SignIn;
