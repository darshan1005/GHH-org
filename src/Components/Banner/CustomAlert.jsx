import { Box, useTheme } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export const CustomAlert = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: "12px 16px",
        backgroundColor: theme.palette.background.main,
        display: "flex",
        gap: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
        }}
      >
        <NotificationsActiveIcon />
      </Box>
      <Box>
        Here is a gentle request, we are raising funds to provide food
        support for Cancer Patients.&nbsp;
        <span style={{ fontWeight: "bold", opacity: 0.5 }}>scroll down 👇</span>
      </Box>
    </Box>
  );
};

export default CustomAlert;
