import { Box, Typography, Paper } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Donate from "../../assets/Donate/Media.jpg";
import TargetButton from "../TargetButton/TargetButton";

export const Banner = () => {
  return (
    <Paper
      elevation={3}
      sx={{ mt: 3, borderRadius: 2, p: 3, maxWidth: "80%", mx: "auto" }}
      id="banner"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "white",
            borderRadius: "50%",
            p: 2,
            width: 60,
            height: 60,
          }}
        >
          <FavoriteIcon sx={{ fontSize: 30 }} />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            fontWeight="bold"
            gutterBottom
          >
            Help Nourish Hope: Food Support for Cancer Patients
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            Every donation helps provide nutritious meals to cancer patients
            during their treatment journey. Join our mission to ensure no
            patient faces hunger while fighting cancer.
          </Typography>
          <TargetButton title={"To Donate scan"} setWidth={true} />
        </Box>
        <Box
          sx={{
            width: { xs: "200px", md: "350px" },
          }}
        >
          <a href={Donate} download><img src={Donate} /></a>
        </Box>
      </Box>
    </Paper>
  );
};
