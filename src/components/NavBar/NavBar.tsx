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
import CloseIcon from "@mui/icons-material/Close";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import LoginPopup from "../LoginPopup/LoginPopup";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { toggleTheme } from "../../slices/themeSlice";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openLoginPopup, setOpenLoginPopup] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isTablet = useMediaQuery("(max-width: 960px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

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
          backgroundColor: isDarkMode ? "#1C1C1E" : "#ffffff",
          transition: "all 0.3s ease",
          borderBottom: isScrolled
            ? `1px solid ${isDarkMode ? "#2C2C2E" : "#ccc"}`
            : "none",
          width: "100%",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  fontFamily: "'Lilita One', sans-serif",
                  fontSize: "21px",
                  fontWeight: 400,
                  color: isDarkMode ? "white" : "#1C1C1E",
                  "&:hover": { color: "red" },
                }}
              >
                MovieHunt
              </Typography>
            </Link>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {!isTablet &&
              navItems.map((item) => (
                <Typography
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: isDarkMode ? "#E5E5E5" : "#1C1C1E",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    cursor: "pointer",
                    "&:hover": { color: "red" },
                  }}
                >
                  {item.label}
                </Typography>
              ))}

            <IconButton
              onClick={() => dispatch(toggleTheme())}
              sx={{ color: isDarkMode ? "#fff" : "#000" }}
            >
              <BedtimeIcon />
            </IconButton>

            <IconButton
              color="inherit"
              component={Link}
              to="/favorite-movies"
              sx={{ color: isDarkMode ? "#fff" : "#1C1C1E" }}
            >
              <FavoriteIcon />
            </IconButton>

            {isLoggedIn ? (
              <>
                <IconButton
                  color="inherit"
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                  sx={{ color: isDarkMode ? "#fff" : "#1C1C1E" }}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem
                    onClick={handleLogout}
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                variant="outlined"
                sx={{
                  color: isDarkMode ? "white" : "#1C1C1E",
                  borderColor: isDarkMode ? "white" : "#1C1C1E",
                  fontSize: "12px",
                  fontWeight: 500,
                  fontFamily: "Montserrat, sans-serif",
                  padding: "6px 12px",
                  "&:hover": {
                    borderColor: "red",
                    color: "red",
                  },
                }}
                onClick={() => setOpenLoginPopup(true)}
              >
                Sign In
              </Button>
            )}

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
                  <CloseIcon sx={{ color: isDarkMode ? "#E5E5E5" : "#1C1C1E" }} />
                ) : (
                  <MenuIcon sx={{ color: isDarkMode ? "#E5E5E5" : "#1C1C1E" }} />
                )}
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        ref={drawerRef}
        PaperProps={{
          sx: {
            backgroundColor: isDarkMode ? "#1C1C1E" : "#ffffff",
            paddingTop: 2,
            paddingBottom: 2,
            borderTop: `1px solid ${isDarkMode ? "#2C2C2E" : "#ccc"}`,
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
                color: isDarkMode ? "#E5E5E5" : "#1C1C1E",
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
