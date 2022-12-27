import React, { useState, useEffect } from "react";
import {
  Card,
  Grid,
  CardActions,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Tooltip,
  IconButton,
  Zoom,
  Slide,
  Fade,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

import StyledGrid from "../../components/StyledGrid";

interface IntroSectionProps {}

const IntroSection = (props: IntroSectionProps) => {
  const [showCard, setShowCard] = useState(false);
  const [showLinkedinButton, setShowLinkedInButton] = useState(false);
  const [showGitHubButton, setShowGitHubButton] = useState(false);
  const [showResumeButton, setShowResumeButton] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowCard(true);
    }, 2000);
    setTimeout(() => {
      setShowTitle(true);
    }, 2000);

    setTimeout(() => {
      setShowLinkedInButton(true);
    }, 3000);
    setTimeout(() => {
      setShowGitHubButton(true);
    }, 4000);
    setTimeout(() => {
      setShowResumeButton(true);
    }, 5000);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const handleIntroSectionVisibility = (showSection: boolean) => {
    setShowCard(showSection);
    setShowTitle(showSection);
    setShowLinkedInButton(showSection);
    setShowGitHubButton(showSection);
    setShowResumeButton(showSection);
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 350) {
      handleIntroSectionVisibility(false);
    } else if (scrolled <= 350) {
      handleIntroSectionVisibility(true);
    }
  };

  window.addEventListener("scroll", toggleVisible);
  const titleSize = "3rem";

  return (
    <StyledGrid
      container
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={0}
    >
      <Grid item xs={0} md={5} alignSelf="center">
        <Fade in={showTitle} timeout={4000}>
          <Typography sx={{ fontSize: titleSize }} align="center">
            Professional
          </Typography>
        </Fade>
        <Fade in={showTitle} timeout={4000}>
          <Typography sx={{ fontSize: titleSize }} align="center">
            .NET
          </Typography>
        </Fade>
        <Fade in={showTitle} timeout={4000}>
          <Typography sx={{ fontSize: titleSize }} align="center">
            {`&`}
          </Typography>
        </Fade>
        <Fade in={showTitle} timeout={4000}>
          <Typography sx={{ fontSize: titleSize }} align="center">
            React
          </Typography>
        </Fade>
        <Fade in={showTitle} timeout={4000}>
          <Typography sx={{ fontSize: titleSize }} align="center">
            Developer
          </Typography>
        </Fade>
      </Grid>
      <Grid item xs={12} md={4} alignSelf="center">
        <Fade in={showCard} timeout={4000}>
          <Card sx={{ minWidth: "1em" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={`/Photos/SeanJosephShorterHeadShot.jpg`}
                height="75%"
                title="Sean Joseph Head Shot"
              />

              <CardContent>
                <Typography variant="h6" align="center">
                  Sean Joseph
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "center" }}>
              <Slide in={showLinkedinButton} timeout={1000}>
                <Tooltip
                  arrow
                  title="My LinkedIn Profile, send me a message!"
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    href="https://www.linkedin.com/in/sean-joseph-41ab49114/"
                    aria-label="share"
                  >
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Slide>

              <Slide in={showGitHubButton} timeout={1000}>
                <Tooltip
                  arrow
                  title="My Github Profile"
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    aria-label="share"
                    href="https://github.com/sejogit28"
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Slide>

              <Slide in={showResumeButton} timeout={1000}>
                <Tooltip
                  arrow
                  title="My updated resume"
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    aria-label="share"
                    href="/Resume/SeanJosephResume2023Resume.docx"
                    download="SeanJosephResume2023"
                  >
                    <CloudDownloadIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Slide>
            </CardActions>
          </Card>
        </Fade>
      </Grid>
    </StyledGrid>
  );
};

export default IntroSection;
