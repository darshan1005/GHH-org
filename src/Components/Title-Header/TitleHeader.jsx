import { Box, Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";

export const TitleHeader = ({ title }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Typography
        variant={"h5"}
        sx={{
          background: theme.palette.background.main,
          color: theme.palette.primary.main,
          border: `1px solid ${theme.palette.divider}`,
          fontWeight: "600",
          textAlign: "center",
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
