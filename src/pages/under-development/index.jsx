import styles from '@/styles/underDevelopment.module.css';
import Image from 'next/image';

function UnderDevelopment() {

    return (
        <div className={styles.underDevelopmentDiv}>
            <p className={styles.underDevelopmentHeader}>This section is under development and would be released on the next update</p>
            <Image
                alt="Under development gif"
                src="/gifs/under development.gif"
                width={500}
                height={500}
                className={styles.underDevelopmentGif}
                priority
            />
        </div>
    );

}

export default UnderDevelopment;