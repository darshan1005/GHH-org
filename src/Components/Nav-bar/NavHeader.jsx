import { useEffect, useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import logo from "../../assets/Asset 10@2x.png";
import logo2 from "../../assets/GHH 9@2x.png";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { ThemeContext } from "../../ThemeContext";
import { Link } from "react-router-dom";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

export const Nav = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const theme = useTheme();
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const pages = [{ name: "Home", href: "/" }];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      color="default"
      sx={{
        backgroundColor: theme.palette.background.default,
        maxWidth: "100% !important",
        boxShadow: `0px 2px 6px ${theme.palette.background.paper}`,
      }}
      id="nav-bar"
    >
      <Container
        sx={{
          display: "flex",
          alignContent: "center",
          maxWidth: "100% !important",
          margin: "0px",
        }}
      >
        <Toolbar disableGutters sx={{ maxWidth: "100% !important" }}>
          {/* Logo */}
          <Box
            component="div"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="true"
            sx={{ display: "flex", alignItems: "center", mr: 2 }}
          >
            <Link to="/">
              <Box
                component={"img"}
                src={logo}
                alt="GHH"
                onError={(e) => {
                  e.target.src = logo2;
                }}
                style={{
                  height: "40px",
                  width: "60px",
                }}
              />
            </Link>
          </Box>

          {/* Navigation Links for Larger Screens */}
          <Box
            component="nav"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="true"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "end",
              gap: 2,
              height: "40px",
              margin: "0px",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                href={page.href}
                color="inherit"
                size="small"
                sx={{
                  width: "max-content",
                  color: theme.palette.text.primary,
                }}
              >
                {page.name}
              </Button>
            ))}
            <ToggleTheme onToggleSwitch={toggleTheme} darkMode={darkMode} />
          </Box>

          {/* Mobile Menu */}
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <Button
              size="small"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <MenuOpenIcon
                sx={{ fontSize: "2rem", color: !darkMode ? "black" : "white" }}
              />
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                my: 6,
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      to={page.href}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {page.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            <ToggleTheme onToggleSwitch={toggleTheme} darkMode={darkMode} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};