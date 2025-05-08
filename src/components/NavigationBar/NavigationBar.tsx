import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCardIcon from "@mui/icons-material/AddCard";
import LoginPopup from "../LoginPopup/LoginPopup";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import Swal from "sweetalert2";
import "../AlertCard/Alert.css";

const NavigationBar = () => {
  const isMobile = useMediaQuery("(max-width:820px)");
  const [openLoginPopup, setOpenLoginPopup] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#000" : "#fff";
    document.body.style.color = darkMode ? "#fff" : "#000";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "about" },
    { label: "Movies", href: "recipes-display" },
  ];

  const handleNavClick = (href: string) => {
    if (href === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(`/#${href}`);
      }
    }
    setOpenDrawer(false);
  };

  const drawer = (
    <Box
      sx={{
        width: isMobile ? "80vw" : 250,
        backgroundColor: "#d18f5f",
        height: "100%",
        borderColor: "#D2691E",
      }}
      role="presentation"
    >
      <Typography
        sx={{
          textDecoration: "none",
          color: "rgb(248, 244, 244)",
          fontWeight: 600,
          fontFamily: "'Lilita One', sans-serif",
          fontSize: "24px",
          marginLeft: "20px",
          marginTop: "30px",
        }}
      >
        🍝FlavorNest
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem
            component={Link}
            to={item.href}
            key={item.label}
            onClick={() => handleNavClick(item.href)}
            sx={{
              "&:hover .MuiListItemText-primary": {
                color: "#974c16",
                fontWeight: 800,
              },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                sx: {
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 500,
                  color: "white",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAnchorEl(null);
    Swal.fire({
      title: "✅ Logged out!",
      html: '<p class="swal-text">LogOut successfully</p>',
      icon: "success",
      confirmButtonText: "OK",
      background: "white",
      color: "black",
      confirmButtonColor: "#D2691E",
      timer: 3000,
      width: "450px",
      customClass: {
        title: "swal-title",
        popup: "swal-popup",
        confirmButton: "swal-button",
      },
    });
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#D2691E",
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "rgb(248, 244, 244)",
              fontWeight: 600,
              fontFamily: "'Lilita One', sans-serif",
              fontSize: { xs: "18px", sm: "24px" },
            }}
          >
            🍝FlavorNest
          </Typography>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontWeight: 500,
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: { xs: "12px", sm: "14px" },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1,
              marginTop: { xs: "8px", sm: 0 },
            }}
          >
            <IconButton
              onClick={toggleDarkMode}
              sx={{ color: darkMode ? "#000" : "#fff" }}
            >
              <BedtimeIcon />
            </IconButton>

            <IconButton color="inherit" component={Link} to="/favorite-recipes">
              <FavoriteIcon />
            </IconButton>

            {isLoggedIn ? (
              <>
                <IconButton
                  color="inherit"
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem
                    onClick={() => {
                      navigate("/my-recipes");
                      setAnchorEl(null);
                    }}
                    sx={{
                      fontWeight: 500,
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    My Recipes
                  </MenuItem>
                  <MenuItem
                    sx={{
                      fontWeight: 500,
                      fontFamily: "Montserrat, sans-serif",
                    }}
                    onClick={handleLogout}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  fontSize: { xs: "10px", sm: "12px" },
                  fontWeight: 500,
                  fontFamily: "Montserrat, sans-serif",
                  padding: { xs: "4px 8px", sm: "6px 12px" },
                }}
                onClick={() => setOpenLoginPopup(true)}
              >
                Sign In
              </Button>
            )}

            {isMobile && (
              <IconButton
                color="inherit"
                onClick={() => setOpenDrawer(!openDrawer)}
                sx={{
                  fontWeight: 500,
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {drawer}
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

export default NavigationBar;
