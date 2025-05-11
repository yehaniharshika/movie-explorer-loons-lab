import { Box, Typography, Button } from "@mui/material";
import MovieList from "../MovieList/MovieList";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface TrendingMoviesProps {
  movies: Movie[];
}

const TrendingMovies: React.FC<TrendingMoviesProps> = ({  }) => {
  const [query, setQuery] = useState("");
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(10);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(API_URL);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Failed to fetch movies", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const filteredMovies =
    query.trim() === ""
      ? movies
      : movies.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        );

  const handleLoadMore = () => {
    setVisibleMoviesCount((prevCount) => prevCount + 10); // Increase the number of visible movies by 10
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Optional: trigger more logic here if needed
  };

  // Determine if there are more movies to load
  const hasMoreMovies = filteredMovies.length > visibleMoviesCount;

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        justifyContent: "center",
        overflowX: "hidden",
        marginTop: "10px",
      }}
      id="movies"
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1700px",
          p: 2,
        }}
      >
        {/* SearchBar gets query, setQuery, handleSubmit */}
        <SearchBar
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
        />

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
          Trending Movies
        </Typography>

        <Box mt={3}>
          {/* Pass the filtered and sliced list of movies */}
          <MovieList movies={filteredMovies.slice(0, visibleMoviesCount)} />
        </Box>

        {/* Show "Load More" button if there are more movies to display */}
        {hasMoreMovies && (
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
        )}
      </Box>
    </Box>
  );
};

export default TrendingMovies;
