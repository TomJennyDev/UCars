import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function ItemHIW({ item }) {
  const { imgUrl, title, content } = item;
  return (
    <Stack
      sx={{
        textAlign: "center",
        "&:hover": { transform: "translateY(-5%)" },
        transition: (theme) =>
          `all 0.25s ${theme.transitions.easing.easeInOut}`,
      }}
      spacing={4}
    >
      <Box>
        <img height="140" src={imgUrl} alt={title} />
      </Box>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        color="primary.contrastText"
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color="primary.contrastText"
        sx={{ lineHeight: "36px" }}
      >
        {content}
      </Typography>
    </Stack>
  );
}

export default ItemHIW;
