import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import logo from "../../assets/Asset 10@2x.png";
import logo2 from "../../assets/GHH 9@2x.png";
import { useTheme } from "@mui/material";
import { TalkWithUs } from "../TalkWithUs/TalkWithUs";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.main,
        p: 1,
      }}
    >
      <Grid container justifyContent="space-evenly" gap={2} display={"flex"}>
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
          sm={4}
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1,
            p: 1,
          }}
        >
          <Typography variant="h5" fontWeight={"bold"} gutterBottom>
            Contact Details
          </Typography>
          <Typography variant="body1" gutterBottom>
            <b>Dasetti Hema Latha</b>
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
          <Typography variant="body2" gutterBottom>
            <b>GMail:</b>
            <Link
              href="mailto:gracehelpinghands.hema@gmail.com"
              color="inherit"
            >
              gracehelpinghands.hema@gmail.com
            </Link>
          </Typography>
          <TalkWithUs />
        </Grid>
      </Grid>
    </Box>
  );
};
