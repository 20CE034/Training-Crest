import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function BottomBar() {
  return (
    <Paper
      className="raleway"
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
        position: "static",
        bottom: 0,
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
          <div>Blog - App</div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
            
          }}
        >
          <Typography variant="caption" color="initial" className="raleway" sx={{fontSize: "20px"}}>
            Copyright ©2024 - Dev Gundalia
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
