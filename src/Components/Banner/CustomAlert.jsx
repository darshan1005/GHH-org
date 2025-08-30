import { Box, useTheme } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import alertData from "../../Content/CustomAlert.json";

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
