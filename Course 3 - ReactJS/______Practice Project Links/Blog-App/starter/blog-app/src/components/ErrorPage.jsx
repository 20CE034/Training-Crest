import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { AspectRatio } from "@mui/joy";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Stack sx={{ width: "100%", justifyContent: "center" }} spacing={2}>
      <AspectRatio ratio="2.2">
        <Alert
          severity="error"
          sx={{ fontFamily: "Raleway", fontSize: 80, fontWeight: 1000 }}
        >
          Something Went Wrong
          <Link to="/">
            <Button
              variant="contained"
              color="success"
              sx={{
                fontFamily: "Raleway",
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
                fontWeight: 1000,
              }}
            >
              Back to Home
            </Button>
          </Link>
        </Alert>
      </AspectRatio>
    </Stack>
  );
}
