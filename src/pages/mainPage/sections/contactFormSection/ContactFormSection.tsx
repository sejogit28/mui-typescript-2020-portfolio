import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import StyledGrid from "../../components/StyledGrid";

const ContactFormSection = () => {
  return (
    <StyledGrid
      container
      alignItems="center"
      justifyContent="space-evenly"
      sx={{ minHeight: "35rem" }}
    >
      <Typography align="center" variant="h2" sx={{ marginBottom: "0" }}>
        Contact Me
      </Typography>
      <Grid
        container
        alignItems="center"
        justifyContent="space-evenly"
        item
        xs={12}
      >
        <Paper elevation={3} sx={{ minWidth: "90%", padding: "2rem" }}>
          <form
            action="https://formsubmit.co/6c3b1eb7d56edb5c1551bc6d6e45f59a"
            method="POST"
          >
            <Grid item xs={12}>
              <TextField
                required
                type="text"
                name="name"
                label="Your Name"
                variant="filled"
                margin="normal"
                fullWidth
              />
              <TextField
                required
                type="email"
                name="email"
                label="Your Email"
                variant="filled"
                margin="normal"
                fullWidth
              />

              <input
                required
                type="hidden"
                name="_subject"
                value="Email from Your Portfolio"
              />
              <TextField
                required
                type="text"
                name="message"
                label="Your Message"
                variant="filled"
                margin="normal"
                fullWidth
                multiline
                rows={5}
              />
            </Grid>

            <Grid item xs={12} marginTop="1rem">
              <Button
                variant="contained"
                type="submit"
                color="primary"
                size="large"
                startIcon={<DoneIcon />}
              >
                Send
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </StyledGrid>
  );
};

export default ContactFormSection;
