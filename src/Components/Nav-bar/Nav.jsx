import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import logo from "../../assets/Asset 10@2x.png";
import logo2 from "../../assets/GHH 9@2x.png";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Nav = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const pages = [
    { name: "ABOUT US", href: "#Aboutus" },
    { name: "OUR WORKS", href: "#Ourwork" },
    { name: "GALLERY", href: "#Gallery" },
  ];

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
        backgroundColor: "lightgrey",
        height: "60px",
        maxWidth: "100% !important",
      }}
    >
      <Container
        sx={{ height: "55px", maxWidth: "100% !important", margin: "0px" }}
      >
        <Toolbar
          disableGutters
          sx={{ height: "50px", maxWidth: "100% !important" }}
        >
          {/* Logo */}
          <Box
            component="div"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="true"
            sx={{ display: "flex", alignItems: "center", mr: 2 }}
          >
            <img
              src={logo}
              alt="GHH"
              onError={(e) => {
                e.target.src = logo2;
              }}
              style={{
                height: "40px",
                width: "60px",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            />
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
              justifyContent: "end",
              height: "40px",
              margin: "0px",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                href={page.href}
                color="inherit"
                sx={{ margin: "0 10px", width: "150px" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Button
              size="small"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <MenuOpenIcon />
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a
                      href={page.href}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {page.name}
                    </a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
