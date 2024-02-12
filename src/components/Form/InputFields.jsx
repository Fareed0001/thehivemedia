import React, { useState } from 'react';
import styles from '@/styles/form.module.css';
import Checkbox from '@mui/material/Checkbox';
import Link from "next/link";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { FaEye, FaEyeSlash } from "react-icons/fa";



function FirstNameField() {
    return (
        <div className={styles.inputFieldDiv}>
            <label className={styles.label} htmlFor="nameLastField">Name</label>      
            <OutlinedInput className={styles.inputField} size="small" name="firstLastNameInput" type="text" id="nameLastField" autoFocus required />
        </div>
    );
}

function UserNameField() {
    return (
        <div className={styles.inputFieldDiv}>
            <label className={styles.label} htmlFor="userNameField">Username</label>
            <OutlinedInput className={styles.inputField} size="small" name="userNameInput" type="text" id="userNameField" required /> 
        </div>
    );
}

function EmailField() {
    return (
        <div className={styles.inputFieldDiv}>
            <label className={styles.label} htmlFor="emailField">Email</label>
            <OutlinedInput className={styles.inputField} size="small" name="emailInput" type="email" id="emailField" required />
        </div>
    );
}

function PassWordField() {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className={styles.inputFieldDiv}>
            <label className={styles.label} htmlFor="passwordField">Password</label>
            <OutlinedInput
                className={styles.inputField}
                size="small"
                type={showPassword ? 'text' : 'password'}
                name="passwordInput"
                id="passwordField"
                required
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </div>
    );
}


function TermsAndConditionField() {
    return (
        <div className={styles.inputFieldDiv}>
            <Checkbox className={styles.checkboxInput} size="small" required />
            <label className={styles.checkboxLabel}>I agree with <span className={styles.termSpan}>The Hive Media</span>'s <Link href="">terms of service</Link> and <Link href="">privacy policy</Link></label>
        </div>
    );
}



export { FirstNameField, UserNameField, EmailField, PassWordField, TermsAndConditionField };