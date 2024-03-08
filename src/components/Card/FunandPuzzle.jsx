import React from "react";
import { CardActionArea, Grid } from '@mui/material';
import styles from "@/styles/card.module.css";
import Image from 'next/image';


function FunandPuzzle() {

    
    return (
        <div className={styles.landingPageGamesDiv}>
            <Grid container>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <CardActionArea className={styles.landingPageGamesCardActionArea}>
                        <Image
                            alt="Category Image"
                            src="/landingPageFunandPuzzleImages/funfacts.jpg"
                            width={300}  
                            height={200}
                            className={styles.landingPageGamesImage}
                        />
                        <p>Fun Facts</p>
                    </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <CardActionArea className={styles.landingPageGamesCardActionArea}>
                        <Image
                            alt="Category Image"
                            src="/landingPageFunandPuzzleImages/arcade.jpg"
                            width={300}
                            height={200}
                            className={styles.landingPageGamesImage}
                        />
                        <p>Games</p>
                    </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <CardActionArea className={styles.landingPageGamesCardActionArea}>
                        <Image
                            alt="Category Image"
                            src="/landingPageFunandPuzzleImages/puzzle.jpg"
                            width={300}
                            height={200}
                            className={styles.landingPageGamesImage}
                        />
                        <p>Puzzles</p>
                    </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <CardActionArea className={styles.landingPageGamesCardActionArea}>
                        <Image
                            alt="Category Image"
                            src="/landingPageFunandPuzzleImages/quiz.jpg"
                            width={300}
                            height={200}
                            className={styles.landingPageGamesImage}
                        />
                        <p>Quiz</p>
                    </CardActionArea>
                </Grid>
            </Grid>
        </div>
    );

}

export default FunandPuzzle;


