import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Box, Typography, Card, CardContent } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ViewPost() {
  const dispatch = useDispatch();
  const { postId } = useParams();

  const postFromStore = useSelector((state) =>
    state.posts.posts.find((post) => post.id === postId)
  );
  const [post, setPost] = React.useState(
    postFromStore || JSON.parse(localStorage.getItem(`post_${postId}`))
  );

  useEffect(() => {
    if (postFromStore) {
      setPost(postFromStore);
      localStorage.setItem(`post_${postId}`, JSON.stringify(postFromStore));
    } else {
      if (!post) return <div>Post not found</div>;
    }
  }, [postFromStore, postId]);

  const author = post.author || {};
  console.log(postFromStore);
  // Popular Authors
  const mostLikedPosts = useSelector((state) => state.posts);

  let mostLikedAuthors = [];
  if (mostLikedPosts.length > 0) {
    const firstFivePosts = mostLikedPosts.slice(0, 5);
    mostLikedAuthors = firstFivePosts.map((post) => ({
      id: post.author.id,
      firstName: post.author.firstName,
      lastName: post.author.lastName,
    }));
  }

  console.log(mostLikedAuthors, mostLikedPosts);

  return (
    <>
      <Link to={-1}>
          <ArrowBackIcon sx={{ fontSize: "30px" }} />
        </Link>
      <Box sx={{ display: "flex", padding: 2, mt: 2 }}>
        <Card sx={{ maxWidth: 875, mr: 5 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ textTransform: "capitalize", fontWeight: 700 }}
                className="raleway"
              >
                {post.title}
              </Typography>{" "}
            </Box>
            <Typography
              className="raleway"
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "5px",
              }}
            >
              <AccessTimeIcon sx={{ mr: 1, fontWeight: 900 }} />{" "}
              {post.datePublished}
            </Typography>
            <Typography
              className="raleway"
              sx={{ mb: 1.5 }}
              color="text.secondary"
            ></Typography>
            <Typography
              className="raleway"
              variant="body2"
              sx={{ textAlign: "justify" }}
            >
              {post.description}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography
                className="raleway"
                sx={{ display: "flex", alignItems: "center", mr: 2 }}
              >
                <FavoriteIcon sx={{ mr: 1 }} />
                {post.numLikes}
              </Typography>
              <Typography
                className="raleway"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <CommentIcon sx={{ mr: 1, fontWeight: 900 }} />{" "}
                {post.numComments}
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700 }}
              className="raleway"
            >
              Most Liked Authors
            </Typography>
            {mostLikedAuthors.map((author) => (
              <Typography key={author.id} className="raleway">
                {author.firstName} {author.lastName}
              </Typography>
            ))}
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
