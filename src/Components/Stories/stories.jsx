import { TitleHeader } from "../Title-Header/TitleHeader";
import { Box, Button, Typography } from "@mui/material";
import { Blogs } from "../MockData/Blog-Mock";
import { Link } from "react-router-dom";
import { TruncatedText } from "../TruncatedText/TruncatedText";

export const Stories = () => {
  return (
    <>
      <Box component={"section"}>
        <TitleHeader title={"Untold Stories"} />
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            padding: "20px",
          }}
        >
          {Blogs.map((blog) => (
            <Box
              key={blog.id}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px",
                width: "50%",
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
                  variant="h5"
                  fontWeight={"bold"}
                  sx={{ width: "max-content" }}
                >
                  {blog.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ width: "max-content" }}>
                  {blog.date}
                </Typography>
              </Box>
              <TruncatedText text={blog.description} textAlign="left" />
              <Box>
                <Link to={`/blog/${blog.id}`}>
                  <Button variant="contained" sx={{ width: "max-content" }}>
                    Read Full
                  </Button>
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
