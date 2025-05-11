import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieListTop from "../MovieList/MovieListTop";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_year: string;
}

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const TopRatedMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(4); // Initially show only 2 movies
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then((res) => {
        const mappedMovies = res.data.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average,
          release_year: movie.release_date
            ? movie.release_date.slice(0, 4)
            : "N/A",
        }));
        setMovies(mappedMovies);
      })
      .catch((err) => {
        console.error("Error fetching top rated movies", err);
      });
  }, []);

  // Handle loading more movies
  const handleLoadMore = () => {
    setVisibleMoviesCount((prevCount) => prevCount + 5); // Increase the number of visible movies by 2
  };

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        justifyContent: "center",
        overflowX: "hidden",
        marginTop: "10px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1700px",
          p: 2,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 3,
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "900",
            color: isDarkMode ? "#ffffff" : "#1C1C1E",
          }}
        >
          Top Rated Movies
        </Typography>

        <Box mt={3}>
          {/* Display the movies based on the visibleMoviesCount */}
          <MovieListTop movies={movies.slice(0, visibleMoviesCount)} />
        </Box>

        {/* Load More Button */}
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLoadMore}
            sx={{
              backgroundColor: "red",
              borderRadius: "18px",
              border: "2px solid red",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "700",
              fontSize: "12px",
              boxShadow: "0 4px 6px rgba(86, 21, 21, 0.91)",
              "&:hover": {
                backgroundColor: "darkred", // Dark red on hover
                boxShadow: "0 6px 8px rgba(0, 0, 0, 0.3)", // Slightly darker shadow on hover
              },
            }}
          >
            Load More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TopRatedMovies;
