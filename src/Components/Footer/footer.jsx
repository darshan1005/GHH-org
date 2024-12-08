import { useEffect } from "react";
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
import { useTheme } from "@mui/material";
import { TalkWithUs } from "../TalkWithUs/TalkWithUs";

const Footer = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const details = [
    { id: 1, name: "Metta Bhanupratap", type: "Admin", image: Admin },
    { id: 2, name: "Dasetti Hema Latha", type: "Lead", image: Lead },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.main,
        p: 1,
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="stretch"
      >
        {details.map((detail) => (
          <Grid key={detail.id} item xs={12} sm={3}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <img
                src={detail.image}
                alt={detail.name}
                style={{
                  width: "290px",
                  height: "290px",
                  padding: "8px",
                  borderRadius: "20px",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  marginTop: "8px",
                  textAlign: "center",
                }}
              >
                {detail.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  marginTop: "4px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Grace Helping Hands - {detail.type}
              </Typography>
            </Box>
          </Grid>
        ))}

        {/* Logo Box */}
        <Grid
          item
          xs={12}
          sm={3}
          sx={{ display: "flex", alignItems: "center", padding: "20px" }}
        >
          <Box>
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

        {/* Contact Details */}
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Box>
            <Typography variant="h5" gutterBottom>
              Contact Details
            </Typography>
            <Typography variant="body1" gutterBottom>
              <b>{details.map((person) => person.name).join(", ")}</b>
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
          <TalkWithUs />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
