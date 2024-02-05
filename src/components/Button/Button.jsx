
import Button from '@mui/material/Button';
import styles from '@/styles/button.module.css';
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function EnterButton({value}) {
    return (
        <div className={styles.buttonDiv}>
            <Button variant="contained" className={styles.enterButton} size="large">
                {value}
            </Button>
        </div>
    );
}

function GoogleButton() {
    return (
        <div className={styles.buttonDiv}>
            <Button variant="contained" size="large">
                <FaGoogle className={styles.buttonIcon}/> Google
            </Button>
        </div>
    );
}





export {EnterButton, GoogleButton};

