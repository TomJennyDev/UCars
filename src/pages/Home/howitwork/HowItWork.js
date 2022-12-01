import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import ItemHowItWork from "./ItemHIW";

const DATA_HOW_IT_WORK = [
  {
    id: 1,
    imgUrl:
      "https://res.cloudinary.com/codershool/image/upload/v1669084110/ucars/icon/icon3_wqj1kq.png",
    title: "Find Car",
    content:
      "Our cars are located at prime areas where by there won’t be problem with transportation ",
  },
  {
    id: 2,
    imgUrl:
      "https://res.cloudinary.com/codershool/image/upload/v1669084110/ucars/icon/icon2_bwp1ih.png",
    title: "Make payments",
    content:
      "Our estates comes with good network,portable water , 24hrs light and round the clock security.",
  },
  {
    id: 3,
    imgUrl:
      "https://res.cloudinary.com/codershool/image/upload/v1669084110/ucars/icon/icon1_fh7x2r.png",
    title: "Make it Official",
    content:
      "We have been in business for over 32 years,for client outside the country you can trust  us to deliver well. ",
  },
];

function HowItWork() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.grey[800],
        height: { xs: "auto", md: "810px" },
        my: "80px",
      }}
    >
      <Stack
        component={Container}
        maxWidth="xl"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <Box sx={{ py: "22px" }}>
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ fontWeight: "700" }}
            align="center"
            gutterBottom
          >
            How it works.
          </Typography>

          <Typography variant="h4" color="primary.contrastText" align="center">
            This is how our products works
          </Typography>
        </Box>
        <Stack
          direction={{ md: "column", lg: "row" }}
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          {DATA_HOW_IT_WORK.map((item) => (
            <Fragment key={item.id}>
              <ItemHowItWork item={item} />
            </Fragment>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export default HowItWork;
