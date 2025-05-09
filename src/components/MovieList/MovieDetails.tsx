import { Container, Typography, Box, Chip, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Ensure useNavigate is imported

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from URL params
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [movie, setMovie] = useState<any>(null);
  const [trailer, setTrailer] = useState<any>(null); // State to store trailer
  const [cast, setCast] = useState<any[]>([]); // State to store cast
  const API_KEY = "b855d823ec03963ae765a4c4fce6e7d8";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(movieResponse.data); // Set the movie data to state

        // Fetch movie credits (cast)
        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
        );
        setCast(creditsResponse.data.cast); // Set the cast data to state

        // Fetch the videos (trailers)
        const videoResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
        );
        // Find the trailer if available
        const trailerData = videoResponse.data.results.find(
          (video: any) => video.type === "Trailer"
        );
        setTrailer(trailerData); // Store trailer data
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    fetchMovieDetails(); // Fetch movie details when component mounts
  }, [id]);

  if (!movie) return <Typography>Loading...</Typography>; // Loading state

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // Construct poster URL

  return (
    <Container sx={{ py: 4 }} style={{ marginTop: "130px", boxShadow: "2" }}>
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
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            style={{ fontFamily: "Montserrat, sans-serif", color: "white" }}
          >
            {movie.title}
          </Typography>

          <Typography
            variant="subtitle1"
            color="textSecondary"
            gutterBottom
            style={{ fontFamily: "Montserrat, sans-serif", color: "white" }}
          >
            ⭐ {movie.vote_average} | 📅 {movie.release_date}
          </Typography>

          <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
            {movie.genres.map((genre: any) => (
              <Chip
                key={genre.id}
                label={genre.name}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "white",
                  backgroundColor: "#c23616",
                }}
              />
            ))}
          </Box>

          <Typography
            variant="body1"
            mb={3}
            style={{ fontFamily: "Montserrat, sans-serif", color: "white" }}
          >
            {movie.overview}
          </Typography>

          {/* Trailer Section */}
          {trailer && (
            <Button
              variant="contained"
              color="error"
              href={`https://www.youtube.com/watch?v=${trailer.key}`}
              target="_blank"
              style={{ color: "white" ,backgroundColor:"#6D214F",fontFamily: "Montserrat, sans-serif"}}
            >
              🎬 Watch Trailer
            </Button>
          )}
        </Box>
      </Box>

      {/* Cast Section */}
      <Box mt={5}>
        <Typography
          variant="h6"
          gutterBottom
          style={{ fontFamily: "Montserrat, sans-serif", color: "white" }}
        >
          Top Cast
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={2}>
          {cast.length === 0 ? (
            <Typography variant="body2" style={{ color: "white" }}>
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
                      : "/default-profile.png" // Fallback image for missing profile picture
                  }
                  alt={actor.name}
                  sx={{ width: "100%", borderRadius: 1 }}
                />
                <Typography
                  variant="body2"
                  mt={1}
                  style={{ fontFamily: "Montserrat, sans-serif", color: "white" }}
                >
                  {actor.name}
                </Typography>
              </Box>
            ))
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default MovieDetails;
