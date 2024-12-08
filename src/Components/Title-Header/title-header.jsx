import { Box, Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";

export const TitleHeader = ({ title }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Typography
        sx={{
          background: theme.palette.text.secondary,
          color: theme.palette.common.white,
          textAlign: "center",
          fontSize: "1.5rem",
          padding: "0.5rem 2rem",
          borderRadius: "8px",
          marginBottom: "1.5rem",
          marginTop: "1.5rem",
          width: "max-content",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

// PropTypes
TitleHeader.propTypes = {
  title: PropTypes.string,
};
