import { useEffect, useState } from "react";
import { Typography, Box, Card } from "@mui/material";
import MovieCard from "../../components/MovieCard/MovieCard";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const FavoriteMovies = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  
  useEffect(() => {
    const items: Movie[] = [];
    for (const key in localStorage) {
      if (key.startsWith("fav-")) {
        try {
          const movie = JSON.parse(localStorage.getItem(key) || "{}");
          if (movie?.id) items.push(movie);
        } catch {}
      }
    }
    setFavorites(items);
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Montserrat, sans-serif",
          color: isDarkMode ? "#ffffff" : "#1C1C1E",
          textAlign: "center",
          marginTop: "80px",
          fontWeight:"bold"
        }}
      >
        Your Favorite Movies
      </Typography>

      {favorites.length === 0 ? (
        <Typography sx={{fontFamily: "Montserrat, sans-serif", textAlign: "center", mt: 4 ,color:"gray"}}>
          No favorite movies yet !
        </Typography>
      ) : (
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(280px, 1fr))"
          gap={4}
          mt={4}
        >
          {favorites.map((movie) => (
            <Card key={movie.id}>
              <MovieCard movie={movie} />
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FavoriteMovies;
