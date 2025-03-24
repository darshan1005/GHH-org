import { Box, Typography, useTheme } from "@mui/material";

export const Instruct = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: theme.palette.background.paper,
      }}
    >
      <Typography variant="h6" sx={{ width: "max-content" }}>
        <mark>Disclaimer!!</mark>
      </Typography>
      <Typography sx={{ textWrap: "wrap" }} fontWeight={"bold"}>
        Our services are always available to you. Please use the contact details
        above solely for the purpose of seeking help. Misuse of this information
        is <mark>prohibited</mark>.
      </Typography>
    </Box>
  );
};
