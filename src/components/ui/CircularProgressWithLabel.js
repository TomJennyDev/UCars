import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export default function CircularProgressWithLabel({ number, sx, ...props }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex", ...sx }}>
      <CircularProgress
        variant="determinate"
        {...props}
        sx={{ color: "white" }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body" component="div" color="white">
          {number}
        </Typography>
      </Box>
    </Box>
  );
}
