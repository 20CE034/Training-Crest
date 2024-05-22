import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAuthorsReq } from "../store/reducers/authorsSlice";
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

export default function Profile() {
  const dispatch = useDispatch();
  const { authors, loading, error } = useSelector((state) => state.authors);

  useEffect(() => {
    dispatch(fetchAuthorsReq());
  }, [dispatch]);

  const { authorId } = useParams();
  const author = authors.find((author) => author.id.toString() === authorId);

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
  return (
    <Card
      className="raleway"
      variant="outlined"
      orientation="horizontal"
      sx={{
        maxWidth: 1000,
        margin: "auto",
        marginTop: 2,
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <Link to={-1}>
        <ArrowBackIcon sx={{ fontSize: "60px" }} />
      </Link>
      <AspectRatio ratio="1" sx={{ width: 250 }}>
        <img
          style={{
            borderStyle: "solid",
            borderColor: "#001340",
            borderWidth: "0.1px 0.1px 0.1px 30px",
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
        <Typography className="raleway-m" level="h3">
          Phone: {author.phone}
        </Typography>
        <Typography className="raleway-m" level="h3">
          Posts: {author.numPosts}
        </Typography>
        <Typography className="raleway-m" level="h4">
          Comments: {author.numComments}
        </Typography>
        <Typography className="raleway-m" level="h4">
          Likes: {author.numLikes}
        </Typography>
      </CardContent>
    </Card>
  );
}
