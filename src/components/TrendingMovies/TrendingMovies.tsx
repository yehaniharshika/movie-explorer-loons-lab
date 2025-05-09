import { Box, Typography } from "@mui/material";
import MovieList from "../MovieList/MovieList";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface TrendingMoviesProps {
  movies: Movie[];
}

const TrendingMovies: React.FC<TrendingMoviesProps> = ({ movies }) => {
  const [query, setQuery] = useState("");

  const filteredMovies =
    query.trim() === ""
      ? movies
      : movies.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload
    // Optional: you could trigger more logic here if needed
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
        <SearchBar query={query} setQuery={setQuery} handleSubmit={handleSubmit} />

        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 3,
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "900",
            color: "white",
          }}
        >
          Trending Movies
        </Typography>

        <Box mt={3}>
          <MovieList movies={filteredMovies} />
        </Box>
      </Box>
    </Box>
  );
};

export default TrendingMovies;
