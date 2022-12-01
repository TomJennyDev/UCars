import { Box, Link } from "@mui/material";

function Poster({ src, sx }) {
  return (
    <Box
      component={Link}
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        display: "inline-block",
        overFlow: "hidden",
        borderRadius: 2,
        ...sx,
      }}
      href="#"
    ></Box>
  );
}

export default Poster;
