import React from "react";
import styles from '@/styles/card.module.css';
import Divider from '@mui/material/Divider';

function CardTextDiv({ title, date, category, author, source }) {
    return (
        <div className={styles.cardTextDiv}>
            <p className={styles.cardCategoryText}>{category}</p>
            <p className={styles.cardTitleText}>{title}</p>
            <p className={styles.cardAuthorText}>{author}</p> 
            <Divider className={styles.cardAuthorDateDivider} orientation="vertical" flexItem />
            <p className={styles.cardDateText}>{date}</p>
            {source ? (
                <>
                    <Divider className={styles.cardAuthorDateDivider} orientation="vertical" flexItem />
                    <p className={styles.cardDateText}>{source}</p>
                </>
            ) : null}
        </div>
    );
}

function SmallCardTextDiv({ title, date, category, author, source }) {
    return (
        <div className={styles.smallCardTextDiv}>
            <p className={styles.smallCardCategoryText}>{category}</p>
            <p className={styles.smallCardTitleText}>{title}</p>
            <p className={styles.smallCardAuthorText}>{author}</p> 
            <Divider className={styles.smallCardAuthorDateDivider} orientation="vertical" flexItem />
            <p className={styles.smallCardDateText}>{date}</p>
            {source ? (
                <>
                    <Divider className={styles.smallCardAuthorDateDivider} orientation="vertical" flexItem />
                    <p className={styles.smallCardDateText}>{source}</p>
                </>
            ) : null}
        </div>
    );
}

export { CardTextDiv, SmallCardTextDiv };
