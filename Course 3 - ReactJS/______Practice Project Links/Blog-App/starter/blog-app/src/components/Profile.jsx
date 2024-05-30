import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAuthorsReq } from "../store/reducers/authorsSlice";
import { fetchPostsReq } from "../store/reducers/postsSlice";
// import db from "../utils/db2.json";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import AspectRatio from "@mui/joy/AspectRatio";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import GradientCircularProgress from "./GradientCircularProgress";
import CommentIcon from "@mui/icons-material/Comment";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ContactsIcon from "@mui/icons-material/Contacts";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

const POSTS_PER_PAGE = 5;
const DESCRIPTION_WORD_LIMIT = 20; // Set your word limit here

const truncateDescription = (description, wordLimit) => {
  const words = description.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return description;
};

export default function Profile() {
  const dispatch = useDispatch();
  const { authors, loading, error } = useSelector((state) => state.authors);
  const { posts } = useSelector((state) => state.posts);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(posts);
  useEffect(() => {
    dispatch(fetchAuthorsReq());
    dispatch(fetchPostsReq());
  }, [dispatch]);

  const { authorId } = useParams();
  const author = authors.find((author) => author.id.toString() === authorId);
  console.log(posts);

  console.log(authorId);
  if (!author) {
    return (
      <Stack sx={{ width: "100%", justifyContent: "center" }} spacing={2}>
        <AspectRatio ratio="6">
          <Alert
            severity="warning"
            sx={{ fontFamily: "Raleway", fontSize: 40, fontWeight: 1000 }}
          >
            Author Not Found
          </Alert>
        </AspectRatio>
      </Stack>
    );
  }
  if (loading) return <GradientCircularProgress />;
  if (error) return <div>Error: {error}</div>;

  const authorPosts = posts.filter(
    (post) => post.author.id.toString() === authorId
  );
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = authorPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(authorPosts.length / POSTS_PER_PAGE)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  console.log(authorPosts);
  return (
    <>
      <Card
        className="raleway"
        variant="outlined"
        orientation="horizontal"
        sx={{
          borderRadius: 0,
          maxWidth: 2000,
          margin: "auto",
          background: "#dee8fc",
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        {" "}
        <Link to={-1}>
          <ArrowBackIcon sx={{ fontSize: "30px" }} />
        </Link>
        <AspectRatio ratio="1" sx={{ width: 100, borderRadius: "50%" }}>
          <img
            style={{
              borderRadius: "50%",
              borderStyle: "solid",
              borderColor: "#001340",
              borderWidth: "0.1px 0.1px 0.1px 10px",
            }}
            src={`https://xsgames.co/randomusers/avatar.php?g=pixel&user=${author.id}`}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent>
          <Typography className="raleway profile-title">
            {author.firstName} {author.lastName}
          </Typography>

          <Box sx={{ display: " flex " }}>
            <Typography
              className="raleway"
              sx={{ display: "flex", alignItems: "center", mr: 2 }}
            >
              <Tooltip title="ID">
                <IconButton>
                  <PermIdentityIcon />
                </IconButton>
              </Tooltip>
              {author.id}
            </Typography>{" "}
            <Typography
              className="raleway"
              sx={{ display: "flex", alignItems: "center", mr: 2 }}
            >
              <Tooltip title="Phone">
                <IconButton>
                  {" "}
                  <ContactsIcon />
                </IconButton>
              </Tooltip>
              {author.phone}
            </Typography>
          </Box>
          <Box sx={{ display: " flex " }}>
            <Typography
              className="raleway"
              sx={{ display: "flex", alignItems: "center", mr: 2 }}
            >
              <Tooltip title="Posts">
                <IconButton>
                  <DynamicFeedIcon />
                </IconButton>
              </Tooltip>
              {author.numPosts}{" "}
            </Typography>

            <Typography
              className="raleway"
              sx={{ display: "flex", alignItems: "center", mr: 2 }}
            >
              {" "}
              <Tooltip title="Likes">
                <IconButton>
                  <FavoriteIcon />
                </IconButton>
              </Tooltip>
              {author.numLikes}
            </Typography>
            <Typography
              className="raleway"
              sx={{ display: "flex", alignItems: "center", mr: 2 }}
            >
              <Tooltip title="Comments">
                <IconButton>
                  <CommentIcon />
                </IconButton>
              </Tooltip>{" "}
              {author.numComments}{" "}
            </Typography>
          </Box>
        </CardContent>
        <Box sx={{ mt: 2 }}></Box>
      </Card>
      <Card sx={{ background: "#7095E8", borderRadius: 0 }}>
        {" "}
        <Typography className="raleway" sx={{ fontSize: 20 ,color:"white"}}>
          Posts by {author.firstName} {author.lastName}
        </Typography>
      </Card>
      <Box>
        {currentPosts.map((post) => (
          <Card key={post.id} sx={{ mb: 1 }}>
            <CardContent>
              <Typography variant="h6" className="raleway">
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </Typography>
              <Typography
                variant="body2"
                className="raleway"
                sx={{ fontWeight: "normal" }}
              >
                {truncateDescription(post.description, DESCRIPTION_WORD_LIMIT)}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography
                  className="raleway"
                  sx={{ display: "flex", alignItems: "center", mr: 2 }}
                >
                  <FavoriteIcon sx={{ mr: 1 }} /> {post.numLikes}
                </Typography>
                <Typography
                  className="raleway"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <CommentIcon sx={{ mr: 1 }} /> {post.numComments}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button
          variant="contained"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={handleNextPage}
          disabled={
            currentPage >= Math.ceil(authorPosts.length / POSTS_PER_PAGE)
          }
        >
          Next
        </Button>
      </Box>
    </>
  );
}
