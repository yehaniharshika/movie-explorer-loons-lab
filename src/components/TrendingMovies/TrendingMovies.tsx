import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { category } from "../../api/tmdbApi";
import Config from "../../constants/config";
import { Link } from "react-router-dom";
import MovieList from "../movie-list/MovieList";

const TrendingMovies: React.FC = () => {
  return (
    <Container>
      <Box mb={3} p={2} boxShadow={3} borderRadius={2} bgcolor="#f5f5f5">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" component="h2">
            Trending Movies
          </Typography>
          <Button
            component={Link}
            to={`/${Config}/movie`}
            variant="outlined"
            size="small"
          >
            View More
          </Button>
        </Box>

        <Box mt={3}>
          <MovieList category={category.movie} />
        </Box>
      </Box>
    </Container>
  );
};

export default TrendingMovies;
