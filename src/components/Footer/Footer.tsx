import { Box, Typography,Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "#323232",
        color: "#d9d9d9",
        pt: 10,
        pb: 4,
        px: { xs: 4, md: 10 },
        mt: 10,
      }}
    >
      {/* Footer Content */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 30%" },
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            fontFamily="'Lilita One', cursive"
          >
            MovieHunt
          </Typography>
          <Typography mt={2} fontFamily="'Montserrat', sans-serif">
            Dive into a world of cinema—discover, explore, and stream your
            favorite movies and series anytime, anywhere! 🎬🍿
          </Typography>
        </Box>

        {/* Center Section - Quick Links */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 30%" },
          }}
        >
          <Typography
            variant="h6"
            color="white"
            fontFamily="'Montserrat', sans-serif"
            mb={2}
          >
            QUICK LINKS
          </Typography>
          <Box>
            {["Home", "About", "Movies", "Premium", "Privacy policy"].map(
              (item, index) => (
                <Typography
                  key={index}
                  sx={{
                    cursor: "pointer",
                    mb: 1,
                    fontFamily: "Montserrat, sans-serif",
                    "&:hover": {
                      color: "#ffffff",
                      textDecoration: "none",
                    },
                  }}
                >
                  {item}
                </Typography>
              )
            )}
          </Box>
        </Box>

        {/* Right Section - Get in Touch */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 30%" },
          }}
        >
          <Typography
            variant="h6"
            color="white"
            fontFamily="'Montserrat', sans-serif"
            mb={2}
          >
            GET IN TOUCH
          </Typography>
          <Typography
            sx={{ mb: 2 }}
            fontFamily="'Montserrat', sans-serif"
          >
            You must watch
          </Typography>
          <Typography
            sx={{ mb: 2 }}
            fontFamily="'Montserrat', sans-serif"
          >
            Recent Release
          </Typography>
          <Typography
            sx={{ mb: 2 }}
            fontFamily="'Montserrat', sans-serif"
          >
            Best Movie Collection
          </Typography>
        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{ my: 4, backgroundColor: "grey" }} />

      {/* Copyright */}
      <Typography
        textAlign="center"
        variant="body2"
        fontFamily="'Montserrat', sans-serif"
      >
        Copyright 2025 © MovieHunt.com - All Right Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
