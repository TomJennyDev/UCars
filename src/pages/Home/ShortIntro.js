import { Box, Container, Typography } from "@mui/material";
import React, { Fragment } from "react";

const DATA_SHORTINFO = [
  {
    id: 1,
    title: "Buy Used And New Cars Online",
    content:
      "Start your car buying journey with UCARS as we connect you seamlessly to the industry's best CaseTrust-SVTA accredited car dealerships. As a one stop car online portal you can now buy your new ride, be it a pre-owned car or a brand new car from trusted dealers all over Singapore, all in one place. Our ever expanding listing of quality and covet-worthy cars, new and second hand, from both owners and trusted car dealers, will leave you spoilt for choice. Refine your search by vehicle type, registration year, price, mileage, engine type, transmission, annual depreciation value and more to find the car that best suits your needs, taste and lifestyle. You can even search for your car by dealer or directly by owner.",
  },
  {
    id: 2,
    title: "Sell Your Car In An Instant With Confidence",
    content:
      "We all know how selling a car in Singapore can be a daunting task especially for a first time car seller; from trying to get a valuation for your car, finding a trusted dealer, to getting the best quote on your vehicle. UCARS understands the hassle and even the costs involved and have as such partnered with Huawei to develop a FIRST in Southeast Asia AI car valuation tool that is able to provide a car’s resale value at the snap of a finger. Backed with a consortium of trusted CaseTrust-SVTA accredited car dealers you can be assured that you are getting the best price for your vehicle and do not have to worry about any hidden costs.",
  },
  {
    id: 3,
    title: "The Ultimate Car Shopping Experience Online",
    content:
      "UCARS platform is the first of its kind to be backed by Huawei’s Artificial Intelligence and cloud computing, enabling it to be able to offer users transparency and enhanced security, all with the one aim of enhancing customer experience. So come on over to buy and sell used cars online at the best prices at UCARS Singapore. Connect easily with dealers in real-time via our online video call feature, or schedule a test drive when you're ready. Have some questions? Get them answered instantly with our chatbot moderated by our responsive team. Stay in the loop with our car-related tips, reviews and news. Learn the ins-and-outs of your car, as well as global and Singapore’s car updates at your own pace.",
  },
];

function ShortIntro() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => `${theme.palette.grey[200]}`,
        height: "475px",
        mt: "80px",
        py: "40px",
      }}
    >
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Typography
          sx={{
            color: (theme) => `${theme.palette.grey[600]}`,
            fontWeight: 600,
          }}
          gutterBottom
        >
          UCARS - Revolutionizing The Online Car Marketplace In Singapore
        </Typography>
        {DATA_SHORTINFO.map(({ id, title, content }, idx) => (
          <Fragment key={id}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: (theme) => `${theme.palette.grey[600]}`,
                fontWeight: 600,
                fontSize: "12px",
                lineHeight: "20px",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                lineHeight: "20px",
                fontSize: "12px",
                mb: "25px",
              }}
            >
              {content}
            </Typography>
          </Fragment>
        ))}
      </Container>
    </Box>
  );
}

export default ShortIntro;
