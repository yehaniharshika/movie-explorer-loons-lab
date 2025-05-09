import { useEffect, useState, useRef } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Button,
  MenuItem,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import BedtimeIcon from "@mui/icons-material/Bedtime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import LoginPopup from "../LoginPopup/LoginPopup";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openLoginPopup, setOpenLoginPopup] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isTablet = useMediaQuery("(max-width: 960px)");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#000" : "#fff";
    document.body.style.color = darkMode ? "#fff" : "#000";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "movies", label: "Movies" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsDrawerOpen(false);
    }
  };


  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={isScrolled ? 4 : 0}
        sx={{
          backgroundColor: "#1C1C1E",
          transition: "all 0.3s ease",
          borderBottom: isScrolled ? "1px solid #2C2C2E" : "none",
          width: "100%",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            component="a"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography
              sx={{
                fontFamily: "'Lilita One', sans-serif",
                fontSize: "21px",
                fontWeight: 400,
                color: "white",
                textDecoration: "none",
                "&:hover": { color: "red" },
              }}
            >
              MovieHunt
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Only show nav items if screen is larger than tablet */}
            {!isTablet &&
              navItems.map((item) => (
                <Typography
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: "#E5E5E5",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    cursor: "pointer",
                    "&:hover": { color: "red" },
                  }}
                >
                  {item.label}
                </Typography>
              ))}

            {/* These icons always visible even on tablets */}
            <IconButton onClick={toggleDarkMode}
              sx={{ color: darkMode ? "#000" : "#fff" }}>
              <BedtimeIcon />
            </IconButton>

            <IconButton
              color="inherit"
              component={Link}
              to="/favorite-movies"
              sx={{ color: "#fff" }}
            >
              <FavoriteIcon />
            </IconButton>

            {isLoggedIn ? (
              <>
                <IconButton
                  color="inherit"
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                  sx={{ color: "#fff" }}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={handleLogout} style={{fontFamily: "Montserrat, sans-serif",}}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  fontSize: "12px",
                  fontWeight: 500,
                  fontFamily: "Montserrat, sans-serif",
                  padding: "6px 12px",
                  "&:hover": { borderColor: "red", color: "red" },
                }}
                onClick={() => setOpenLoginPopup(true)}
              >
                Sign In
              </Button>
            )}

            {/* Always show Menu icon on mobile/tablet */}
            {isTablet && (
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                sx={{
                  backgroundColor: isDrawerOpen ? "#10B981" : "transparent",
                }}
              >
                {isDrawerOpen ? (
                  <CloseIcon sx={{ color: "#E5E5E5" }} />
                ) : (
                  <MenuIcon sx={{ color: "#E5E5E5" }} />
                )}
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile/Tablets */}
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        ref={drawerRef}
        PaperProps={{
          sx: {
            backgroundColor: "#1C1C1E",
            paddingTop: 2,
            paddingBottom: 2,
            borderTop: "1px solid #2C2C2E",
            width: "100%",
            fontFamily: "Montserrat, sans-serif",
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItemButton
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              sx={{
                color: "#E5E5E5",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
                "&:hover": {
                  color: "red",
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {openLoginPopup && (
        <LoginPopup
          setShowLogin={setOpenLoginPopup}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
};

export default NavBar;
