import { useEffect, useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import movie1 from "../../assets/terrifier 3.jpg";
import movie2 from "../../assets/Havoc.jpg";
import movie3 from "../../assets/The-Life-List.jpg";

const sliderContent = [
  {
    img: movie1,
    text: "Terrifier 3",
    description:
      "A gruesome sequel that continues the terror, as the masked killer wreaks havoc on his unsuspecting victims.",
  },
  {
    img: movie2,
    text: "Havoc",
    description:
      "A special forces operative must fight to survive in a world filled with deadly enemies and unpredictable twists.",
  },
  {
    img: movie3,
    text: "The Life List",
    description:
      "A woman embarks on a journey to fulfill her late friend's life list, discovering new experiences along the way.",
  },
];

const Header = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box width="100%" height="100vh" overflow="hidden">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={sliderContent[current].img}
          src={sliderContent[current].img}
          alt={`Slide ${current + 1}`}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%", // Ensure it spans the full width
            height: "100vh", // Make the height 100% of the viewport height
            objectFit: "cover", // Ensure the image covers the entire container without distortion
            zIndex: 0,
          }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          <Box color="#fff">
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Lilita One', sans-serif",
                textShadow: "2px 2px 3px rgb(185, 16, 16)",
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive font size
                fontWeight: "200",
              }}
            >
              Welcome to Our Movie Showcase
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mt: 2,
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 550,
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Responsive font size
              }}
            >
              A Collection of the Latest Blockbusters.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mt: 4,
               
                fontWeight: 600,
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }, // Responsive font size

                fontFamily: "'Lilita One', sans-serif",
                textShadow: "2px 2px 3px rgb(185, 16, 16)",
                
               
              }}
            >
              {sliderContent[current].text}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 2,
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 500,
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                maxWidth: 700,
                mx: "auto",
              }}
            >
              {sliderContent[current].description}
            </Typography>

            <Box
              mt={4}
              display="flex"
              justifyContent="center"
              gap={2}
              flexWrap="wrap"
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f44336", // Red button color
                  color: "#fff",
                  fontFamily: "Montserrat, sans-serif",
                  "&:hover": { backgroundColor: "#d32f2f" },
                  px: 4, // Adjust padding for buttons
                  py: 2,
                }}
              >
                Watch Trailer
              </Button>

              <Button
                variant="outlined"
                sx={{
                  borderColor: "#f44336", // Red border color
                  color: "#f44336", // Red text color
                  fontFamily: "Montserrat, sans-serif",
                  "&:hover": {
                    backgroundColor: "#f44336",
                    color: "#fff",
                    borderColor: "#f44336",
                  },
                  px: 4, // Adjust padding for buttons
                  py: 2,
                }}
              >
                Explore Movies
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
