import { Box, useTheme } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import alertData from "../../Content/CustomAlert.json";

const BellRingAnimation = {
  animation: "bell-ring 2s ease-in-out infinite",
  transformOrigin: "top center",
  "@keyframes bell-ring": {
    "0%, 100%": {
      transform: "rotate(0deg)",
    },
    "5%": {
      transform: "rotate(-15deg)",
    },
    "10%": {
      transform: "rotate(15deg)",
    },
    "15%": {
      transform: "rotate(-10deg)",
    },
    "20%": {
      transform: "rotate(10deg)",
    },
    "25%": {
      transform: "rotate(-5deg)",
    },
    "30%": {
      transform: "rotate(5deg)",
    },
    "35%, 95%": {
      transform: "rotate(0deg)",
    },
  },
}

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
        <NotificationsActiveIcon sx={{...BellRingAnimation}} />
      </Box>
      <Box>
        <span style={{ fontWeight: "bold" }}>{alertData.message}</span>
        {alertData.showScrollHint && (
          <span style={{ fontWeight: "bold", opacity: 0.5 }}>
            {" "}
            {alertData.scrollHintText}
          </span>
        )}
      </Box>
    </Box>
  );
};

export default CustomAlert;
