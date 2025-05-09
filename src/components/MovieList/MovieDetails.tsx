import { Container, Typography, Box, Chip, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Ensure useNavigate is imported

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from URL params
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [movie, setMovie] = useState<any>(null);
  const API_KEY = "b855d823ec03963ae765a4c4fce6e7d8";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        setMovie(response.data); // Set the movie data to state
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    fetchMovieDetails(); // Fetch movie details when component mounts
  }, [id]);

  if (!movie) return <Typography>Loading...</Typography>; // Loading state

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // Construct poster URL
  const trailer = movie.videos?.results?.find((vid: any) => vid.type === "Trailer"); // Get trailer if available

  return (
    <Container sx={{ py: 4 }}>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
        {/* Poster Section */}
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

        {/* Info Section */}
        <Box flex={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {movie.title}
          </Typography>

          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            ⭐ {movie.vote_average} | 📅 {movie.release_date}
          </Typography>

          <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
            {movie.genres.map((genre: any) => (
              <Chip key={genre.id} label={genre.name} color="primary" />
            ))}
          </Box>

          <Typography variant="body1" mb={3}>
            {movie.overview}
          </Typography>

          {trailer && (
            <Button
              variant="contained"
              color="error"
              href={`https://www.youtube.com/watch?v=${trailer.key}`}
              target="_blank"
            >
              🎬 Watch Trailer
            </Button>
          )}
        </Box>
      </Box>

      {/* Cast Section */}
      <Box mt={5}>
        <Typography variant="h6" gutterBottom>
          Top Cast
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={2}>
          {movie.credits?.cast?.slice(0, 6).map((actor: any) => (
            <Box key={actor.cast_id} width={100} textAlign="center">
              <Box
                component="img"
                src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                alt={actor.name}
                sx={{ width: "100%", borderRadius: 1 }}
              />
              <Typography variant="body2" mt={1}>
                {actor.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Back Button */}
      <Box mt={4}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate(-1)} // Use navigate for going back
          sx={{
            textTransform: "none",
            fontWeight: 600,
            padding: "8px 16px",
          }}
        >
          ← Back to Movies
        </Button>
      </Box>
    </Container>
  );
};

export default MovieDetails;
