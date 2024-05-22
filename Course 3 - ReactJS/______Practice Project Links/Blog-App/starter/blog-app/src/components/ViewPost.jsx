import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { fetchPostsReq } from "../store/reducers/postsSlice";
import { Button, Typography, Box, TextField } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import GradientCircularProgress from "./GradientCircularProgress";

export default function ViewPost() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsReq());
  }, [dispatch]);

  if (loading) return <GradientCircularProgress />;
  if (error) return <div>Error: {error}</div>;
  console.log(posts[1]);
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      {currentPosts.map((post, index) => (
        <Box key={index} mb={4} p={2} border={1} borderRadius={4}>
          <Typography variant="h4" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {post.description}
          </Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <Button
              startIcon={<ThumbUpOffAltIcon />}
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
            >
              Like
            </Button>
            <Typography variant="body2">{post.numLikes} Likes</Typography>
          </Box>
          <Typography variant="body2" color="textSecondary">
            Posted on {new Date(post.datePublished).toLocaleDateString()} at{" "}
            {new Date(post.datePublished).toLocaleTimeString()}
          </Typography>
          <Box mt={3}>
            <Typography variant="h6" gutterBottom>
              Comments
            </Typography>
            {post.comments && post.comments.length > 0 ? (
              post.comments.map((comment, commentIndex) => (
                <Box
                  key={commentIndex}
                  mb={2}
                  p={2}
                  border={1}
                  borderRadius={4}
                >
                  <Typography variant="body2">{comment.text}</Typography>
                  <Typography variant="caption" color="textSecondary">
                    - {comment.author},{" "}
                    {new Date(comment.date).toLocaleDateString()}{" "}
                    {new Date(comment.date).toLocaleTimeString()}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography variant="body2">No comments yet</Typography>
            )}
          </Box>
          </div>
          );
}
