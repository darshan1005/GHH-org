import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../../assets/Asset 10@2x.png";
import logo2 from "../../assets/GHH 9@2x.png";
import Lead from "../../assets/leads/Lead.jpg";
import Admin from "../../assets/leads/Admin.jpg";


const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#f5f5f5", p: 1, height: "400px" }}
      id="Getinvolved"
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="stretch"
        sx={{ height: "400px" }}
      >
        {/* First Box: Lead */}

        <Grid item xs={12} sm={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%", flexDirection: "column" }}
          >
            <img
              src={Admin}
              alt="Dasetti Hema Latha"
              style={{ width: "290px", height: "290px", padding: "8px" }}
            />
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Roboto, sans-serif", 
                marginTop: "8px", 
                textAlign: "center",
              }}
            >
              Dasetti Hema Latha
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Roboto, sans-serif", 
                marginTop: "4px", 
                textAlign: "center",
              }}
            >
              Grace Helping Hands - Lead
            </Typography>
          </Box>
        </Grid>

        {/* Second Box: Admin */}

        <Grid item xs={12} sm={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            sx={{ flexDirection: "column" }}
          >
            <img
              src={Lead}
              alt="Metta Bhanupratap"
              style={{ width: "290px", height: "290px", padding: "8px" }}
            />
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Roboto, sans-serif", 
                marginTop: "8px", 
                textAlign: "center",
              }}
            >
              Metta Bhanupratap
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Roboto, sans-serif", 
                marginTop: "4px", 
                textAlign: "center",
              }}
            >
              Grace Helping Hands - Admin
            </Typography>
          </Box>
        </Grid>

        {/* Third Box: Logo */}
        <Grid item xs={12} sm={3} sx={{ padding: "20px" }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="80%"
            sx={{ padding: "40px", marginTop: "30px" }}
          >
            <img
              src={logo2}
              alt="GHH Logo"
              onError={(e) => {
                e.target.src = logo;
              }}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
        </Grid>

        {/* Fourth Box: Contact Details */}
        <Grid item xs={12} sm={3} sx={{ padding: "20px" }}>
          <Box sx={{ padding: "40px", marginTop: "30px", marginLeft: "40px" }}>
            <Typography variant="h6" gutterBottom>
              Contact Details
            </Typography>
            <Typography variant="body1" gutterBottom>
              <b>Dasetti Hema Latha, Metta Bhanupratap</b>
            </Typography>
            <Typography variant="body2" gutterBottom>
              <b>Plot No:</b> 2, Srilakshminagar Colony, Arasavilli, Srikakulam
              District - 532001
            </Typography>
            <Typography variant="body2" gutterBottom>
              <b>Ph:</b>{" "}
              <Link href="tel:7382745053" color="inherit">
                7382745053
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link
                href="mailto:gracehelpinghands.hema@gmail.com"
                color="inherit"
              >
                gracehelpinghands.hema@gmail.com
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

