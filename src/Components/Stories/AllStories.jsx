import { useState } from "react";
import { TitleHeader } from "../Title-Header/TitleHeader";
import { Box, Typography, useTheme } from "@mui/material";
import Alert from "@mui/material/Alert";
import { blogs } from "../MockData/BlogMock";
import { TruncatedText } from "../TruncatedText/TruncatedText";
import InfiniteScroll from "react-infinite-scroll-component";
import TargetButton from "../TargetButton/TargetButton";

export const Stories = () => {
  const theme = useTheme();
  const [displayedBlogs, setDisplayedBlogs] = useState(blogs.slice(0, 5));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreBlogs = () => {
    const nextBatch = blogs.slice(
      displayedBlogs.length,
      displayedBlogs.length + 5
    );
    setDisplayedBlogs((prevBlogs) => [...prevBlogs, ...nextBatch]);
    if (displayedBlogs.length + nextBatch.length >= blogs.length) {
      setHasMore(false);
    }
  };

  const refreshBlogs = () => {
    setDisplayedBlogs(blogs.slice(0, 5));
    setHasMore(true);
  };

  return (
    <>
      <Box component="section">
        <TitleHeader title={"Untold Stories"} />
        <Box
          sx={{
            padding: "0 20px",
            height: { xs: "600px", md: "500px" },
            overflow: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          id="scrollDiv"
        >
          <InfiniteScroll
            dataLength={displayedBlogs.length}
            next={fetchMoreBlogs}
            hasMore={hasMore}
            loader={<h4>Loading more stories...</h4>}
            endMessage={
              <Box
                display="flex"
                justifyContent={"center"}
                alignItems={"center"}
                margin="10px 0px"
                textAlign={"center"}
              >
                <Alert
                  severity="info"
                  sx={{
                    width: { xs: "100&", md: "max-content" },
                    background: theme.palette.background.main,
                    color: theme.palette.primary.main,
                  }}
                  icon={false}
                >
                  You have seen all stories!
                </Alert>
              </Box>
            }
            pullDownToRefresh={true}
            pullDownToRefreshThreshold={50}
            refreshFunction={refreshBlogs}
            scrollableTarget="scrollDiv"
          >
            {displayedBlogs.map((blog) => (
              <Box
                key={blog.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "20px",
                  marginBottom: "20px",
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
                <TruncatedText text={blog.shortDiscription} textAlign="left" />
                <TargetButton
                  title={"Read Full story"}
                  to={`/blog/${blog.id}`}
                  setWidth={true}
                />
              </Box>
            ))}
          </InfiniteScroll>
        </Box>
      </Box>
    </>
  );
};
