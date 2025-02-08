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
          background: theme.palette.background.main,
          color: theme.palette.primary.main,
          border: `1px solid ${theme.palette.divider}`,
          fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
          fontWeight: "600",
          textAlign: "center",
          padding: { xs: "0.5rem 1rem", md: "0.5rem 2rem" },
          borderRadius: "8px",
          margin: { xs: "1rem 0", md: "1.5rem 0" },
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
