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
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import StarRateIcon from "@mui/icons-material/StarRate";
  
  interface MovieCardProps {
    movie: {
      id: number;
      title: string;
      poster_path: string;
      vote_average: number;
      release_year: string;
    };
  }
  
  const MovieCardTop: React.FC<MovieCardProps> = ({ movie }) => {
    const [trailer, setTrailer] = useState<string | null>(null);
    const [hovered, setHovered] = useState<boolean>(false);
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
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
  
    useEffect(() => {
      const stored = localStorage.getItem(`fav-${movie.id}`);
      setIsFavorite(!!stored);
    }, [movie.id]);
  
    const handleFavoriteClick = () => {
      if (isFavorite) {
        localStorage.removeItem(`fav-${movie.id}`);
      } else {
        localStorage.setItem(`fav-${movie.id}`, JSON.stringify(movie));
      }
      setIsFavorite(!isFavorite);
    };
  
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
        <Box sx={{ position: "relative" }}>
          {/* Move Favorite IconButton OUTSIDE of CardActionArea to avoid nesting <button> */}
          <IconButton
            onClick={handleFavoriteClick}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "white",
              borderRadius: "50%",
              color: isFavorite ? "red" : "gray",
              zIndex: 3,
            }}
          >
            <FavoriteIcon />
          </IconButton>
  
          <CardActionArea component={Link} to={`/movie/${movie.id}`}>
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
          </CardActionArea>
  
          {/* Trailer overlay */}
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
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {movie.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {movie.release_year}
          </Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box
              display="flex"
              alignItems="center"
              gap={0.5}
              sx={{
                backgroundColor: "gold",
                padding: "2px 8px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "bold",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <StarRateIcon style={{ color: "red", fontSize: "18px" }} />
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                {movie.vote_average}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "gold",
                padding: "6px 8px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "bold",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Top Rated
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  };
  
  export default MovieCardTop;
  