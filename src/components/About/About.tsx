import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

import findIcon from "../../assets/icons/search-movie.png";
import movieIcon from "../../assets/icons/watch.png";
import rateIcon from "../../assets/icons/rate (2).png";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        padding: "20px",
      }}
      id="about"
    >
      <Typography
        variant="h3"
        sx={{ fontFamily: "'Lilita One', sans-serif", color: "#bd5f1b" }}
        align="center"
        gutterBottom
      >
        What We Offer
      </Typography>

      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
      >
        Your Ultimate Movie Exploration Platform 🎬
      </Typography>

      <Typography
        variant="body1"
        paragraph
        align="center"
        sx={{
          maxWidth: "800px",
          textAlign: "center",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "600",
        }}
      >
        Dive into a world of cinema with our feature-rich platform. Whether
        you're a casual viewer or a passionate film buff, discover, rate, and
        enjoy thousands of movies across all genres. Experience seamless movie
        searching, personalized watch lists, and insightful ratings from fellow
        fans — all in one place!
      </Typography>

      {/* Movie Service Cards */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        marginTop="20px"
        alignItems="center"
        sx={{
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {/* Card 1: Watch Movies */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              minWidth: 275,
              maxWidth: "275px",
              borderRadius: 3,
              boxShadow: 3,
              border: 3,
              borderColor: "#bd5f1b",
              backgroundColor: "#f6e1d2",
              cursor: "pointer",
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                <img
                  src={movieIcon}
                  alt="Watch Movie"
                  style={{ width: 60, height: 60 }}
                />
              </Box>
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "700" }}
              >
                Watch Movies
              </Typography>
              <Typography
                variant="body2"
                align="center"
                sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "400" }}
              >
                Stream your favorite movies directly from our platform. Enjoy
                high-quality video, subtitles, and a smooth viewing experience.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2: Rate Movies */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              minWidth: 275,
              maxWidth: "275px",
              borderRadius: 3,
              boxShadow: 3,
              border: 3,
              borderColor: "#bd5f1b",
              backgroundColor: "#f6e1d2",
              cursor: "pointer",
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                <img
                  src={rateIcon}
                  alt="Rate Movie"
                  style={{ width: 60, height: 60 }}
                />
              </Box>
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "700" }}
              >
                Rate Movies
              </Typography>
              <Typography
                variant="body2"
                align="center"
                sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "400" }}
              >
                Share your opinion by rating and reviewing movies. Help others
                decide what to watch next with your insights!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3: Find Movies */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              minWidth: 275,
              maxWidth: "275px",
              borderRadius: 3,
              boxShadow: 3,
              border: 3,
              borderColor: "#bd5f1b",
              backgroundColor: "#f6e1d2",
              cursor: "pointer",
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                <img
                  src={findIcon}
                  alt="Find Movie"
                  style={{ width: 60, height: 60 }}
                />
              </Box>
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "700" }}
              >
                Find Movies
              </Typography>
              <Typography
                variant="body2"
                align="center"
                sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "400" }}
              >
                Discover movies by genre, actors, directors, or year. Use
                advanced search filters to find exactly what you want to watch.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
