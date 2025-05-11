import { Box, Typography, Button } from "@mui/material";
import MovieList from "../MovieList/MovieList";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import axios from "axios";
import FilterBar from "../FilterBar/FilterBar";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_year: string;
  genre: string;
}

const TrendingMovies: React.FC = () => {
  const [query, setQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(10);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<{ [id: number]: string }>({});

  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

  // Fetch genres separately
  const fetchGenres = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
      );
      const genreMap: { [id: number]: string } = {};
      res.data.genres.forEach((genre: any) => {
        genreMap[genre.id] = genre.name;
      });
      setGenres(genreMap);
    } catch (error) {
      console.error("Failed to fetch genres", error);
    }
  };

  const fetchMovies = async () => {
    try {
      const response = await axios.get(API_URL);
      const rawMovies = response.data.results;

      const mappedMovies: Movie[] = rawMovies.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        release_year: movie.release_date?.split("-")[0] || "",
        genre: genres[movie.genre_ids[0]] || "Unknown", // take first genre ID
      }));

      setMovies(mappedMovies);
    } catch (error) {
      console.error("Failed to fetch movies", error);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    if (Object.keys(genres).length > 0) {
      fetchMovies();
    }
  }, [genres]);

  const filteredMovies = movies.filter((movie) => {
    const matchesQuery =
      query.trim() === "" || movie.title.toLowerCase().includes(query.toLowerCase());
    const matchesGenre =
      selectedGenre === "" || movie.genre.toLowerCase() === selectedGenre.toLowerCase();
    const matchesYear =
      selectedYear === "" || movie.release_year === selectedYear;
    const matchesRating =
      selectedRating === "" || movie.vote_average >= parseFloat(selectedRating);

    return matchesQuery && matchesGenre && matchesYear && matchesRating;
  });

  const handleLoadMore = () => {
    setVisibleMoviesCount((prev) => prev + 10);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const hasMoreMovies = filteredMovies.length > visibleMoviesCount;

  return (
    <Box sx={{ padding: 2, display: "flex", justifyContent: "center", overflowX: "hidden", marginTop: "10px" }} id="movies">
      <Box sx={{ width: "100%", maxWidth: "1700px", p: 2 }}>
        {/* Search Bar */}
        <SearchBar query={query} setQuery={setQuery} handleSubmit={handleSubmit} />

        {/* Filter Bar */}
        <FilterBar
          selectedGenre={selectedGenre}
          selectedYear={selectedYear}
          selectedRating={selectedRating}
          setSelectedGenre={setSelectedGenre}
          setSelectedYear={setSelectedYear}
          setSelectedRating={setSelectedRating}
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
          <MovieList movies={filteredMovies.slice(0, visibleMoviesCount)} />
        </Box>

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
                  backgroundColor: "darkred",
                  boxShadow: "0 6px 8px rgba(0, 0, 0, 0.3)",
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
