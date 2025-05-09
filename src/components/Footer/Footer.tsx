import { Box, Typography, Stack, IconButton, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
      <Box
        sx={{
          display: "flex",  // Using flexbox to align sections on the same row
          flexWrap: "wrap",  // Allow sections to wrap when on smaller screens
          justifyContent: "space-between",  // Distribute space evenly between sections
          gap: 8,  // Add space between each section
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 33%" },  // Full width on small screens, 1/3 on larger screens
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            fontFamily="'Lilita One', cursive"
          >
            FlavorNest
          </Typography>
          <Typography mt={2} fontFamily="'Montserrat', sans-serif">
            Discover, share, and savor delightful recipes from around the world,
            making every meal a masterpiece! 🍽️
          </Typography>
          <Stack direction="row" spacing={2} mt={2}>
            <IconButton sx={{ color: "#d9d9d9" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "#d9d9d9" }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: "#d9d9d9" }}>
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>

        {/* Center Section - Quick Links */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 33%" },  // Full width on small screens, 1/3 on larger screens
          }}
        >
          <Typography
            variant="h6"
            color="white"
            fontFamily="'Montserrat', sans-serif"
          >
            QUICK LINKS
          </Typography>
          <Box mt={2}>
            {["Home", "About us", "Recipes", "Profile", "Privacy policy"].map(
              (item, index) => (
                <Typography
                  key={index}
                  sx={{
                    cursor: "pointer",
                    mb: 1,
                    fontFamily: "Montserrat, sans-serif",
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
            flex: { xs: "1 1 100%", sm: "1 1 33%" },  // Full width on small screens, 1/3 on larger screens
          }}
        >
          <Typography
            variant="h6"
            color="white"
            fontFamily="'Montserrat', sans-serif"
          >
            GET IN TOUCH
          </Typography>
          <Box mt={2}>
            <Typography fontFamily="'Montserrat', sans-serif" mb={1}>
              +9438-345-7890
            </Typography>
            <Typography fontFamily="'Montserrat', sans-serif">
              contact@flavorNest.com
            </Typography>
          </Box>
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
        Copyright 2025 © FlavorNest.com - All Right Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
