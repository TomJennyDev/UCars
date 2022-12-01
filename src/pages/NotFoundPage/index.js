import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../../components/ui/Logo";
function NotFoundPage() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={3}
      sx={{ width: "120px", m: "auto" }}
    >
      <Logo
        src="https://res.cloudinary.com/codershool/image/upload/v1669084028/ucars/logo/UCARS_Logo_hxhvzo.svg"
        sx={{ width: "320px", height: "auto" }}
      />
      <Typography
        sx={{
          fontSize: "120px",
          letterSpacing: "25px",
          fontWeight: "bold",
          color: "ucars.main",
          textShadow: (theme) => `0 0 2px ${theme.palette.grey[700]}`,
        }}
      >
        404
      </Typography>
      <Button href="/" variant="contained" endIcon={<KeyboardReturnIcon />}>
        Home
      </Button>
    </Stack>
  );
}

export default NotFoundPage;
