import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import MovieList from "../MovieList/MovieList";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const TrendingMovies: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        justifyContent: "center",
        overflowX: "hidden", // Hide horizontal overflow
        marginTop:"10px"
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1700px", // Max width for content
          bgcolor: "",
          p: 2,
        }}
      >
        <Typography variant="h4" component="h2" sx={{ mb: 3,fontFamily: "Montserrat, sans-serif",fontWeight: "900" ,color:"white"}}>
          Trending Movies
        </Typography>

        <Box mt={3}>
          <MovieList movies={movies} />
        </Box>
      </Box>
    </Box>
  );
};

export default TrendingMovies;
