import 
{ 
    Card, Grid, CardActions, CardMedia, CardActionArea, 
    CardContent, Typography, Tooltip, IconButton, Zoom
} 
from '@mui/material';

import MainPageFab from './components/MainPageFab';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

interface Props {
    
}


const PortfolioPage = (props: Props) => {

    return (
        <Grid>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            /* className={classes.cardMedia} */
                            component="img"
                            image={`/Photos/SeanJosephShorterHeadShot.jpg`}
                            height="370em"
                            title="Sean Joseph Head Shot"
                            
                        />
                        <CardContent>
                            
                            <Typography variant="body1">
                                Hello! My name is Sean Joseph and I'm a fullstack (React | .NET) developer.
                                Welcome to my portfolio, check out more below!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        <CardActions disableSpacing>
                           {/*  <Tooltip 
                                interactive
                                arrow 
                                title='My Resume' 
                                TransitionComponent={Zoom}>
                                <IconButton aria-label="share">
                                    <DescriptionIcon fontSize="large"  />
                                </IconButton>
                            </Tooltip> */}
                            <Tooltip 
                                arrow 
                                title='My LinkedIn Profile, send me a message!' 
                                TransitionComponent={Zoom}>
                                <IconButton 
                                color="primary" 
                                href="https://www.linkedin.com/in/sean-joseph-41ab49114/" 
                                aria-label="share"
                                >
                                    <LinkedInIcon fontSize="large" />
                                </IconButton>
                            </Tooltip>
                            <Tooltip 
                                arrow 
                                title='My Github Profile' 
                                TransitionComponent={Zoom}>
                                <IconButton 
                                aria-label="share"
                                href="https://github.com/sejogit28"
                                >
                                    <GitHubIcon fontSize="large" />
                                </IconButton>

                            </Tooltip>
                            <Tooltip 
                                arrow 
                                title='My updated resume' 
                                TransitionComponent={Zoom}>
                                <IconButton 
                                aria-label="share"
                                href="/Resume/SeanJosephFullStackDeveloper2021Resume.docx"
                                download="SeanJosephResume2021"
                                >
                                    <CloudDownloadIcon fontSize="large" />
                                </IconButton>

                            </Tooltip>
                        </CardActions>              
                    </Card>


            <MainPageFab />
        </Grid>
    )
}

export default PortfolioPage;
