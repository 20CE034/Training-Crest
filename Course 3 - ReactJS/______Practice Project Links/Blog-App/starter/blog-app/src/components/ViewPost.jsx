import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { fetchPostsReq } from "../store/reducers/postsSlice";
import GradientCircularProgress from "./GradientCircularProgress";
import Pagination from "@mui/material/Pagination";

export default function ViewPost() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    dispatch(fetchPostsReq());
  }, [dispatch]);

  if (loading) return <GradientCircularProgress />;
  if (error) return <div>Error: {error}</div>;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Calculate the posts to display based on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate top authors based on the number of likes
  const authorLikes = posts.reduce((acc, post) => {
    acc[post.authorId] = (acc[post.authorId] || 0) + post.likes;
    return acc;
  }, {});

  const topAuthors = Object.keys(authorLikes)
    .map((authorId) => ({
      authorId,
      author: posts.find((post) => post.authorId === authorId).author,
      likes: authorLikes[authorId],
    }))
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 5);
  console.log(authorLikes);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {currentPosts.map((post) => (
            <Card key={post.id} sx={{ minWidth: 275, marginBottom: 2 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Written on {new Date(post.datePublished).toLocaleDateString()}
                </Typography>
                <Typography variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  by {post.author}
                </Typography>
                <Typography variant="body2">{post.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  sx={{
                    backgroundImage: `url("https://i.imgur.com/D61F4wI.jpeg")`,
                  }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
        <Grid item xs={4}>
          <List
            sx={{ width: "100%", maxWidth: 460, bgcolor: "background.paper" }}
          >
            <Typography
              className="raleway"
              variant="h4"
              component="h2"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.default",
                marginBottom: 2,
              }}
            >
              Top Authors
            </Typography>
            {topAuthors.map((author, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Link to={`/profile/${author.authorId}`}>
                      <img
                        src={`https://xsgames.co/randomusers/avatar.php?g=pixel&user=${author.authorId}`}
                        alt="Profile"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 40,
                          height: 40,
                          borderStyle: "solid",
                          borderColor: "#78a8f5",
                          borderRadius: "50%",
                        }}
                        loading="lazy"
                      />
                    </Link>
                  </ListItemAvatar>
                  <ListItemText
                    primary={author.authorId}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {author.authorId}
                        </Typography>
                        {" — "}
                        {`Total likes: ${author.numLikes}`}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                {index < topAuthors.length - 1 && (
                  <Divider variant="inset" component="li" />
                )}
              </React.Fragment>
            ))}
          </List>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        <Pagination
          count={Math.ceil(posts.length / postsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </div>
  );
}
