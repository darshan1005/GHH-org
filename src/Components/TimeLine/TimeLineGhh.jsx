import { useEffect, useMemo } from "react";
import { TitleHeader } from "../Title-Header/TitleHeader";
import { Box, useTheme } from "@mui/material";
import { Chrono } from "react-chrono";
import timeLine from "../../Content/Timeline.json";
import { initializeAOS } from "../Animations/aos";

export const TimeLine = () => {
  const theme = useTheme();

  const timelineItems = useMemo(() => {
    return timeLine.events.map((event) => ({
      ...event,
      media: {
        type: "IMAGE",
        source: {
          url: `${event.media.source.url}.jpg`,
        },
        loading: "lazy",
      },
    }));
  }, []);

  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <>
      <Box
        component={"section"}
        sx={{ display: "grid", placeItems: "center" }}
        data-aos="fade-in"
      >
        <TitleHeader title={"Time Line"} />
        <Box sx={{ width: { xs: "100%", md: "70%" } }}>
          <Chrono
            items={timelineItems}
            mode="VERTICAL_ALTERNATING"
            useReadMore
            disableToolbar
            enableBreakPoint
            verticalBreakPoint={400}
            theme={{
              primary: "#7d5a50",
              secondary: "#e5b299",
              titleColor: theme.typography.subtitle1,
              titleColorActive: "white",
            }}
          />
        </Box>
      </Box>
    </>
  );
};
