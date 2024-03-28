import styles from '@/styles/underDevelopment.module.css';
import Image from 'next/image';

function UnderDevelopment() {

    return (
        <div className={styles.underDevelopmentDiv}>
            <Image
                alt="404 error gif"
                src="/gifs/404 Error Page.gif"
                width={500}
                height={500}
                className={styles.underDevelopmentGif}
                priority
            />
        </div>
    );

}

export default UnderDevelopment;