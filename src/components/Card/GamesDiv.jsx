import React from "react";
import { CardActionArea, Grid } from '@mui/material';
import styles from "@/styles/card.module.css";
import Image from 'next/image';


function GamesDivDiv() {

    
    return (
        <div className={styles.landingPageGamesDiv}>
            <Grid container>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <CardActionArea className={styles.landingPageGamesCardActionArea} href="/games/Chess">
                        <Image
                            alt="Category Image"
                            src="/landingPageGames/chess.jpg"
                            width={300}
                            height={200}
                            className={styles.landingPageGamesImage}
                        />
                        <p>Chess</p>
                    </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <CardActionArea className={styles.landingPageGamesCardActionArea} href="">
                        <Image
                            alt="Category Image"
                            src="/landingPageGames/funfact.jpg"
                            width={300}
                            height={200}
                            className={styles.landingPageGamesImage}
                        />
                        <p>Fun Facts</p>
                    </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <CardActionArea className={styles.landingPageGamesCardActionArea} href="/games/Racing">
                        <Image
                            alt="Category Image"
                            src="/landingPageGames/racing.jpg"
                            width={300}
                            height={200}
                            className={styles.landingPageGamesImage}
                        />
                        <p>Classic Racing</p>
                    </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <CardActionArea className={styles.landingPageGamesCardActionArea} href="/games/SimonGame">
                        <Image
                            alt="Category Image"
                            src="/landingPageGames/simonGame.jpg"
                            width={300}
                            height={200}
                            className={styles.landingPageGamesImage}
                        />
                        <p>Simon Game</p>
                    </CardActionArea>
                </Grid>
            </Grid>
        </div>
    );

}

export default GamesDivDiv;


