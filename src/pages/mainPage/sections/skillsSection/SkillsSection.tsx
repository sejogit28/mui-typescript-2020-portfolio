import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import StyledGrid from "../../components/StyledGrid";
import imageCardData, { ImageCardDataProps } from "./skillsCardData";

interface SkillsSectionProps {}

const SkillsSection = (props: SkillsSectionProps) => {
  return (
    <StyledGrid
      container
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={5}
    >
      <Grid item xs={12}>
        <Typography variant="h3" align="center">
          My Skills
        </Typography>
      </Grid>

      {imageCardData.map((imageCard: ImageCardDataProps) => {
        return (
          <Grid
            item
            xs={4}
            sm={3}
            md={2}
            alignSelf="center"
            key={imageCard.id}
            wrap="nowrap"
          >
            <Card>
              <CardMedia
                component="img"
                src={imageCard.imageSrc}
                height="25%"
                title={imageCard.title}
                sx={{ maxWidth: "30rem" }}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center"
                  component="p"
                >
                  {imageCard.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </StyledGrid>
  );
};

export default SkillsSection;
