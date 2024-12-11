import { useParams } from "react-router-dom";
import { blogs } from "../MockData/BlogMock";
import { Alert, Box, Typography } from "@mui/material";
import TargetButton from "../TargetButton/TargetButton";

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
    <Box
      style={{ padding: "20px" }}
      sx={{ display: "flex" }}
      flexDirection={"column"}
      gap={2}
    >
      <TargetButton to={"/stories"} title={"Stories"} setWidth={true} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <Typography
          variant="h6"
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
