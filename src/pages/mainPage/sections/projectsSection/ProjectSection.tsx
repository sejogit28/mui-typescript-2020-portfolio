import {
  Card,
  Grid,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Tooltip,
  IconButton,
  Zoom,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

import projectCardData, { projCardProps } from "./projectCardData";
import StyledGrid from "../../components/StyledGrid";

interface ProjectSectionProps {}

const ProjectSection = (props: ProjectSectionProps) => {
  return (
    <StyledGrid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={12}>
        <Typography variant="h3" align="center" gutterBottom>
          Deployed Projects
        </Typography>
      </Grid>

      {projectCardData.map((projCard: projCardProps) => {
        return (
          <Grid
            key={projCard.id}
            item
            xs={10}
            md={10}
            alignSelf="center"
            sx={{ marginBottom: "6rem" }}
          >
            <Card key={projCard.id} sx={{ maxWidth: "50rem" }}>
              <CardMedia
                component="img"
                src={projCard.imageSrc}
                height="85%"
                title={projCard.title}
                sx={{ maxWidth: "100%" }}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {projCard.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Tooltip
                  arrow
                  title={
                    projCard.liveLink
                      ? projCard.title
                      : "Website currently under construction"
                  }
                  TransitionComponent={Zoom}
                >
                  <IconButton href={projCard.liveLink ?? ""} aria-label="share">
                    <LinkIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  arrow
                  title="Project GitHub"
                  TransitionComponent={Zoom}
                >
                  <IconButton href={projCard.gitHubLink} aria-label="share">
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </StyledGrid>
  );
};

export default ProjectSection;
