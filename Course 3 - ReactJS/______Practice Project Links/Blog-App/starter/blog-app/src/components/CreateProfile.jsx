import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function CreateProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [numPosts, setNumPosts] = useState(0);
  const [numComments, setNumComments] = useState(0);
  const [numLikes, setNumLikes] = useState(0);
  const [editMode, setEditMode] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    numPosts: false,
    numComments: false,
    numLikes: false,
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAuthor = {
      id: Date.now(), // or use a UUID library
      firstName,
      lastName,
      phone,
      numPosts,
      numComments,
      numLikes,
    };

    // Here you would typically make an API call to save the new author
    // For demonstration, we will just log the new author data
    console.log(newAuthor);

    // Redirect to the authors list page
    navigate("/authors");
  };

  const handleFieldClick = (field) => {
    setEditMode({ ...editMode, [field]: true });
  };

  const handleFieldBlur = (field) => {
    setEditMode({ ...editMode, [field]: false });
  };

  return (
    <Card
      className="raleway"
      variant="outlined"
      orientation="horizontal"
      sx={{
        maxWidth: 600,
        margin: "auto",
        marginTop: 2,
        padding: 2,
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <Link to={-1}>
        <ArrowBackIcon sx={{ fontSize: "20px" }} />
      </Link>
      <CardContent>
        <Typography className="raleway profile" level="h1">
          Create Profile
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} sx={{ marginTop: 2 }}>
            {editMode.firstName ? (
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onBlur={() => handleFieldBlur("firstName")}
                autoFocus
              />
            ) : (
              <Typography
                className="profile-title"
                onClick={() => handleFieldClick("firstName")}
                sx={{ cursor: "pointer" }}
              >
                {firstName || "First Name"}
              </Typography>
            )}
            {editMode.lastName ? (
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onBlur={() => handleFieldBlur("lastName")}
                autoFocus
              />
            ) : (
              <Typography
                onClick={() => handleFieldClick("lastName")}
                sx={{ cursor: "pointer" }}
              >
                {lastName || "Last Name"}
              </Typography>
            )}
            {editMode.phone ? (
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => handleFieldBlur("phone")}
                autoFocus
              />
            ) : (
              <Typography
                level="h3"
                onClick={() => handleFieldClick("phone")}
                sx={{ cursor: "pointer" }}
              >
                {phone || "Phone"}
              </Typography>
            )}
            {editMode.numPosts ? (
              <TextField
                label="Number of Posts"
                variant="outlined"
                fullWidth
                type="number"
                value={numPosts}
                onChange={(e) => setNumPosts(Number(e.target.value))}
                onBlur={() => handleFieldBlur("numPosts")}
                autoFocus
              />
            ) : (
              <Typography
                level="h3"
                onClick={() => handleFieldClick("numPosts")}
                sx={{ cursor: "pointer" }}
              >
                {numPosts || "Number of Posts"}
              </Typography>
            )}
            {editMode.numComments ? (
              <TextField
                label="Number of Comments"
                variant="outlined"
                fullWidth
                type="number"
                value={numComments}
                onChange={(e) => setNumComments(Number(e.target.value))}
                onBlur={() => handleFieldBlur("numComments")}
                autoFocus
              />
            ) : (
              <Typography
                level="h4"
                onClick={() => handleFieldClick("numComments")}
                sx={{ cursor: "pointer" }}
              >
                {numComments || "Number of Comments"}
              </Typography>
            )}
            {editMode.numLikes ? (
              <TextField
                label="Number of Likes"
                variant="outlined"
                fullWidth
                type="number"
                value={numLikes}
                onChange={(e) => setNumLikes(Number(e.target.value))}
                onBlur={() => handleFieldBlur("numLikes")}
                autoFocus
              />
            ) : (
              <Typography
                level="h4"
                onClick={() => handleFieldClick("numLikes")}
                sx={{ cursor: "pointer", borderBottom: "" }}
              >
                {numLikes || "Number of Likes"}
              </Typography>
            )}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                backgroundImage: `url("https://i.imgur.com/D61F4wI.jpeg")`,
                fontFamily: "Raleway",
                fontWeight: "bolder",
              }}
            >
              Create Profile
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
}
