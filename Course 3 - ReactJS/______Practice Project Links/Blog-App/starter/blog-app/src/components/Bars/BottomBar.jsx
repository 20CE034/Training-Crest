import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useLocation } from "react-router-dom";

export default function BottomBar() {
  const location = useLocation();
  const currPath = location.pathname;
  var positionSet = "";
  var marginVar = 0;
  // console.log(currPath);
  if (currPath == "/") {
    marginVar = 0;
    positionSet = "fixed";
  } else if (currPath == "/posts") {
    marginVar = 40;
    positionSet = "static";
  } else {
    marginVar = 30;
    positionSet = "static";
  }

  return (
    <Paper
      className="raleway"
      sx={{
        borderTopRightRadius: "30px",
        borderTopLeftRadius: "30px",
        backgroundColor: "#c4dbff",
        position: positionSet,
        bottom: 0,
        width: "100%",
        marginTop: marginVar,
        fontSize: "30px",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <div>BlogGobble</div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography
            variant="caption"
            color="initial"
            className="raleway"
            sx={{ fontSize: "20px" }}
          >
            Made with &hearts; by Dev Gundalia - 2024
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
