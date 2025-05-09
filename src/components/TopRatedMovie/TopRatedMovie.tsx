import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieListTop from "../MovieList/MovieListTop";


interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_year: string;
}

const API_KEY = "b855d823ec03963ae765a4c4fce6e7d8";

const TopRatedMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

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
            color: "white",
          }}
        >
          Top Rated Movies
        </Typography>

        <Box mt={3}>
          <MovieListTop movies={movies} />
        </Box>
      </Box>
    </Box>
  );
};

export default TopRatedMovies;
