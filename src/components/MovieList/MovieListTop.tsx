import { Box, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRef } from "react";
import MovieCardTop from "../MovieCard/MovieCardTop";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}
const MovieListTop:  React.FC<{ movies: Movie[] }>  = ({movies}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
      }
    };
  
    const scrollRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
      }
    };
  
    return (
      <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
        {/* Scroll Container */}
        <Box
          ref={scrollContainerRef}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            paddingY: 1,
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {movies.map((movie) => (
            <Box key={movie.id} sx={{ flex: "0 0 auto", width: 220 }}>
              <MovieCardTop movie={movie} />
            </Box>
          ))}
        </Box>
  
        {/* Left Arrow */}
        <IconButton
          onClick={scrollLeft}
          sx={{
            position: "absolute",
            top: "50%",
            left: 5,
            transform: "translateY(-50%)",
            backgroundColor: "white",
            boxShadow: 2,
            zIndex: 10,
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
  
        {/* Right Arrow */}
        <IconButton
          onClick={scrollRight}
          sx={{
            position: "absolute",
            top: "50%",
            right: 5,
            transform: "translateY(-50%)",
            backgroundColor: "white",
            boxShadow: 2,
            zIndex: 10,
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    );
}

export default MovieListTop
