import { Box, Typography, useTheme } from "@mui/material";

export const Instruct = () => {
  const theme = useTheme();
  return (
    <Box sx={{ background: theme.palette.background.paper }}>
      <Box
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          width: "max-content",
        }}
      >
        <Typography variant="h6">
          <mark>Disclaimer!!</mark>
        </Typography>
        <Typography fontWeight={"bold"}>
          Our <b>services</b> are always available to you. Please use the
          contact details above solely for the purpose of seeking help. Misuse
          of this information is <mark>prohibited</mark>.
        </Typography>
      </Box>
    </Box>
  );
};
