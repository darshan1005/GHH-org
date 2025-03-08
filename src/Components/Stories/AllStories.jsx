import { Box, Typography, useTheme, Grid } from "@mui/material";
import { TitleHeader } from "../Title-Header/TitleHeader";
import { blogs } from "../MockData/BlogMock";
import { TruncatedText } from "../TruncatedText/TruncatedText";
import TargetButton from "../TargetButton/TargetButton";
import { useEffect } from "react";
import { initializeAOS } from "../Animations/aos";

export const Stories = () => {
  const theme = useTheme();

  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <>
      <Box component="section">
        <TitleHeader title={"Untold Stories"} />
        <Box
          sx={{
            padding: "0 20px",
            width: "100%",
          }}
        >
          <Grid container spacing={2} data-aos="fade-up">
            {blogs.map((blog) => (
              <Grid item xs={12} sm={6} md={4} key={blog.id}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "20px",
                    height: "100%",
                    boxShadow: `0px 2px 6px ${theme.palette.background.paper}`,
                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: `0px 6px 12px ${theme.palette.background.paper}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <Typography
                      fontWeight="bold"
                      sx={{
                        width: "max-content",
                        fontSize: { xs: "20px", md: "24px" },
                        wordWrap: "break-word",
                      }}
                    >
                      {blog.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ width: "max-content", opacity: ".7" }}
                    >
                      {blog.date}
                    </Typography>
                  </Box>
                  <TruncatedText
                    text={blog.shortDiscription}
                    textAlign="left"
                  />
                  <Box sx={{ mt: "auto" }}>
                    <TargetButton
                      title={"Read Full story"}
                      to={`/blog/${blog.id}`}
                      setWidth={true}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
