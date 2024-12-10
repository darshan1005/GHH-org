import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import logo from "../../assets/Asset 10@2x.png";
import logo2 from "../../assets/GHH 9@2x.png";
import Lead from "../../assets/leads/Lead.jpg";
import Admin from "../../assets/leads/Admin.jpg";
import { useTheme } from "@mui/material";
import { TalkWithUs } from "../TalkWithUs/TalkWithUs";

export const Footer = () => {
  const theme = useTheme();

  const details = [
    { id: 1, name: "Dasetti Hema Latha", type: "Admin", image: Admin },
    { id: 2, name: "Metta Bhanupratap", type: "Lead", image: Lead },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.main,
        p: 1,
      }}
    >
      <Grid container justifyContent="space-around" gap={2} display={"flex"}>
        {details.map((detail) => (
          <>
            <Box
              display="flex"
              justifyContent="center"
              alignItems={"center"}
              flexDirection="column"
              background="black"
              sx={{ width: "max-content" }}
            >
              <Box
                component="img"
                src={detail.image}
                alt={detail.name}
                style={{
                  width: "100%",
                  height: "290px",
                  padding: "8px",
                  borderRadius: "20px",
                  objectFit: "cover",
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
          </>
        ))}

        {/* Logo Box */}
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={logo2}
            alt="GHH Logo"
            onError={(e) => {
              e.target.src = logo;
            }}
            sx={{ width: "90%" }}
          />
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
            gap: 1,
            p: 1,
          }}
        >
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
            <b>Ph:</b>
            <Link href="tel:7382745053" color="inherit">
              7382745053
            </Link>
          </Typography>
          <Box>
            <b>GMail:</b>
            <Link
              href="mailto:gracehelpinghands.hema@gmail.com"
              color="inherit"
            >
              <Typography
                variant="caption"
                gutterBottom
                sx={{ display: "block" }}
              >
                gracehelpinghands.hema@gmail.com
              </Typography>
            </Link>
          </Box>
          <TalkWithUs />
        </Grid>
      </Grid>
    </Box>
  );
};
