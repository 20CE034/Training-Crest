import { useState } from "react";
import db from "../utils/db.json";
import AspectRatio from "@mui/joy/AspectRatio";
import { Link } from "react-router-dom";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";

import PaginationItem from "@mui/material/PaginationItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const itemsPerPage = 8; // Display fewer items on the first page

export default function Body() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = currentPage === 1 ? 0 : (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = Object.values(db.authors).slice(startIndex, endIndex);

  const totalPages = Math.ceil(Object.values(db.authors).length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {currentData.map((author) => (
          <Card
            key={author.id}
            variant="outlined"
            orientation="horizontal"
            sx={{
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder",
              },
            }}
          >
            <AspectRatio ratio="1" sx={{ width: 90 }}>
              <img
                key={author.id}
                // src={`https://xsgames.co/randomusers/avatar.php?g=pixel/30.jpg`} // Append user id as query parameter to ensure unique image for each user
                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&user=${author.id}`} // Append user id as query parameter to ensure unique image for each user
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <CardContent>
              <Typography
                className="raleway"
                level="title-lg"
                id="card-description"
              >
                <a style={{ fontSize: "40px", margin: "5px" }}>
                  {" "}
                  {author.firstName} {author.lastName}
                </a>
              </Typography>

              <Chip
                variant="outlined"
                color="primary"
                size="l"
                // sx={{ bottom: 0 }}
              >
                <Link
                  to={`/profile/${author.id}`}
                  style={{
                    fontFamily: "Raleway",
                    textDecoration: "none",
                    color: "inherit",
                    margin: "10px",
                  }}
                >
                  View Profile
                </Link>
              </Chip>
            </CardContent>
          </Card>
        ))}
      </div>
      <Stack
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          renderItem={(item) => (
            <PaginationItem {...item} className="raleway-m" />
          )}
        />
      </Stack>
    </>
  );
}

// import db from "../utils/db.json";
// import AspectRatio from "@mui/joy/AspectRatio";
// import Link from "@mui/joy/Link";
// import Card from "@mui/joy/Card";
// import CardContent from "@mui/joy/CardContent";
// import Chip from "@mui/joy/Chip";
// import Typography from "@mui/joy/Typography";

// const initialUsers = {
//   loading: true,
//   users: [],
//   error: "",
//   pageNo: 1,
// };

// export default function Body() {
//   const data = db.authors.slice(1, 1 + 18);
//   console.log(data);
//   return (
//     <>
//       <div>
//         <Card
//           variant="outlined"
//           orientation="horizontal"
//           sx={{
//             margin: "20px",
//             width: 320,
//             "&:hover": {
//               boxShadow: "md",
//               borderColor: "neutral.outlinedHoverBorder",
//             },
//           }}
//         >
//           <AspectRatio ratio="1" sx={{ width: 90 }}>
//             <img
//               src="https://xsgames.co/randomusers/avatar.php?g=pixel "
//               srcSet="https://xsgames.co/randomusers/avatar.php?g=pixel&dpr=2 2x"
//               loading="lazy"
//               alt=""
//             />
//           </AspectRatio>
//           <CardContent>
//             <Typography level="title-lg" id="card-description">
//               Yosemite Park
//             </Typography>
//             <Typography
//               level="body-sm"
//               aria-describedby="card-description"
//               mb={1}
//             ></Typography>
//             <Chip
//               variant="outlined"
//               color="primary"
//               size="sm"
//               sx={{ pointerEvents: "none" }}
//             >
//               <Link overlay underline="none" href="#interactive-card">
//                 View Profile
//               </Link>
//             </Chip>
//           </CardContent>
//         </Card>
//       </div>
//     </>
//   );
// }
