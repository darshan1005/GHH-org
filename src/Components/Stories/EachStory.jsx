import { useParams } from "react-router-dom";
import { blogs } from "../MockData/BlogMock";
import { Alert, Box, Typography } from "@mui/material";

export const SingelStory = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <Alert variant="contained" severity="error">
        Blog not found!
      </Alert>
    );
  }

  return (
    <Box style={{ padding: "20px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ width: "max-content" }}
        >
          {blog.title}
        </Typography>
        <Typography variant="subtitle2" sx={{ width: "max-content" }}>
          {blog.date}
        </Typography>
      </Box>
      <Typography variant="bodyL">{blog.description}</Typography>
    </Box>
  );
};
