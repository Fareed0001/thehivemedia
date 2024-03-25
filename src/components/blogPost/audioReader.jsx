import React from 'react';
import styles from "@/styles/blogPost.module.css";
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


function AudioReader() {
    return (
        <div className={styles.audioReaderDiv}>
            <span className={styles.readNewsText}>Read news</span>
            <IconButton aria-label="play/pause">
                <PlayArrowIcon className={styles.playIcon} />
            </IconButton>
        </div>
    )
}

export default AudioReader;

