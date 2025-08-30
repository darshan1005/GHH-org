import { Box, Typography, Paper } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TargetButton from "../TargetButton/TargetButton";
import bannerData from "../../Content/Banner.json";

export const Banner = () => {
  const banner = bannerData.banners[0];
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
            {banner.title}
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            {banner.description}
          </Typography>
          <TargetButton title={"To Donate scan"} setWidth={true} />
        </Box>
        <Box
          sx={{
            width: { xs: "200px", md: "350px" },
          }}
        >
          <a href={banner.image} download>
            <img
              src={banner.image}
              alt="Donate"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </a>
        </Box>
      </Box>
    </Paper>
  );
};
