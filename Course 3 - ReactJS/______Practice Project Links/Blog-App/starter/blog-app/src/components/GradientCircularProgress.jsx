import CircularProgress from "@mui/material/CircularProgress";

export default function GradientCircularProgress() {
  return (
    <>
      <svg>
        <defs>
          <linearGradient id="my_gradient">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>{" "}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress
          sx={{
            "svg circle": { stroke: "url(#my_gradient)" },
          }}
        />
      </div>
    </>
  );
}
