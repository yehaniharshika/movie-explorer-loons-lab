import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    IconButton,
    CardActionArea,
  } from "@mui/material";
  import { Link } from "react-router-dom";
  import YouTubeIcon from "@mui/icons-material/YouTube";
  import { useState, useEffect } from "react";
  import axios from "axios";
  
  interface MovieCardProps {
    movie: {
      id: number;
      title: string;
      poster_path: string;
      vote_average: number;
    };
  }
  
  const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const [trailer, setTrailer] = useState<string | null>(null);
    const [hovered, setHovered] = useState<boolean>(false);
    const API_KEY = "b855d823ec03963ae765a4c4fce6e7d8";
  
    useEffect(() => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`
        )
        .then((res) => {
          const videos = res.data.results;
          const trailerVideo = videos.find((vid: any) => vid.type === "Trailer");
          if (trailerVideo) setTrailer(trailerVideo.key);
        })
        .catch((err) => console.error("Error fetching trailer", err));
    }, [movie.id]);
  
    return (
      <Card
        sx={{
          width: "100%",
          maxWidth: 400,
          margin: "auto",
          height: "100%",
          position: "relative",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <CardActionArea>
          <Box sx={{ position: "relative" }}>
            <Link to={`/movie/${movie.id}`}>
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                sx={{
                  height: 360,
                  objectFit: "cover",
                  display: "block",
                  mx: "auto",
                }}
              />
            </Link>
  
            {hovered && trailer && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                }}
              >
                <IconButton
                  href={`https://www.youtube.com/watch?v=${trailer}`}
                  target="_blank"
                >
                  <YouTubeIcon sx={{ fontSize: 60, color: "#FF0000" }} />
                </IconButton>
              </Box>
            )}
          </Box>
  
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              style={{fontFamily: "Montserrat, sans-serif",fontWeight: "600",fontSize:"14px"}}>
              {movie.title}
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2">{movie.vote_average}</Typography>
              <Box
                sx={{
                  backgroundColor: "gold",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Popular
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };
  
  export default MovieCard;
  