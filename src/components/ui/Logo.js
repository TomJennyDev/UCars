import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Logo({ disabledLink = false, src, sx, to }) {
  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <img src={src} alt="logo" width="100%" loading="lazy" />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}

export default Logo;
