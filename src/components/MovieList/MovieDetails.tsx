import {
  Container,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { RootState } from "../../store/store";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [trailer, setTrailer] = useState<any>(null);
  const [cast, setCast] = useState<any[]>([]);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(movieResponse.data);

        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
        );
        setCast(creditsResponse.data.cast);

        const videoResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
        );
        const trailerData = videoResponse.data.results.find(
          (video: any) => video.type === "Trailer"
        );
        setTrailer(trailerData);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <Typography>Loading...</Typography>;

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Box
      sx={{
        backgroundColor: isDarkMode ? "#1C1C1E" : "#ffffff",
        minHeight: "100vh",
        pt: { xs: "80px", md: "130px" },
        px: 2,
      }}
    >
      <Container sx={{ pb: 5 }}>
        {/* Image and Info Section */}
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
          {/* Poster */}
          <Box
            component="img"
            src={posterUrl}
            alt={movie.title}
            sx={{
              width: { xs: "100%", md: "300px" },
              borderRadius: 2,
              boxShadow: 3,
            }}
          />

          {/* Info */}
          <Box flex={1}>
            <Typography
              variant="h4"
              fontWeight={700}
              gutterBottom
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: isDarkMode ? "#ffffff" : "#1C1C1E",
              }}
            >
              {movie.title}
            </Typography>

            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: isDarkMode ? "#ffffff" : "#1C1C1E",
              }}
            >
              ⭐ {movie.vote_average} | 📅 {movie.release_date}
            </Typography>

            <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
              {movie.genres.map((genre: any) => (
                <Chip
                  key={genre.id}
                  label={genre.name}
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#fff",
                    backgroundColor: "#c23616",
                  }}
                />
              ))}
            </Box>

            <Typography
              variant="body1"
              mb={3}
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: isDarkMode ? "#ffffff" : "#1C1C1E",
              }}
            >
              {movie.overview}
            </Typography>
          </Box>
        </Box>

        {/* Trailer (placed separately below the image/info section) */}
        {trailer && (
          <Box
            mt={4}
            sx={{
              position: "relative",
              paddingBottom: "56.25%", // 16:9 aspect ratio
              height: 0,
              overflow: "hidden",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <iframe
              title="Movie Trailer"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&rel=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "12px",
              }}
            ></iframe>
          </Box>
        )}

        {/* Cast */}
        <Box mt={5}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: "Montserrat, sans-serif",
              color: isDarkMode ? "#ffffff" : "#1C1C1E",
            }}
          >
            Top Cast
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={2}>
            {cast.length === 0 ? (
              <Typography variant="body2" sx={{ color: "gray" }}>
                No cast information available.
              </Typography>
            ) : (
              cast.slice(0, 6).map((actor: any) => (
                <Box key={actor.cast_id} width={100} textAlign="center">
                  <Box
                    component="img"
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                        : "/default-profile.png"
                    }
                    alt={actor.name}
                    sx={{ width: "100%", borderRadius: 1 }}
                  />
                  <Typography
                    variant="body2"
                    mt={1}
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      color: isDarkMode ? "#ffffff" : "#1C1C1E",
                    }}
                  >
                    {actor.name}
                  </Typography>
                </Box>
              ))
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MovieDetails;
