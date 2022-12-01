import { Box, Button, Slide, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SwiperCustom from "components/ui/swipper/SwiperCustom";
import useResponsive from "hooks/useResponsive";
import { useRef } from "react";

import { SwiperSlide } from "swiper/react";

const CAROUSEL_CONTENT = [
  {
    id: 1,
    title: "car marketplace",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    imgUrls:
      "https://res.cloudinary.com/codershool/image/upload/v1669084061/ucars/banner/banner_reythq.png",
  },
  {
    id: 2,
    title: "car marketplace",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    imgUrls:
      "https://res.cloudinary.com/codershool/image/upload/v1669084061/ucars/banner/banner_reythq.png",
  },
];

function Carousel() {
  const containerRef = useRef(null);
  const isLgUp = useResponsive("up", "lg");
  return (
    <SwiperCustom sxSwiper={{ height: { xs: "200px", lg: "auto" } }}>
      {CAROUSEL_CONTENT.map((item, idx) => {
        return (
          <SwiperSlide
            className="carousel"
            sx={{ position: "relative" }}
            key={item.id}
          >
            {({ isActive }) => (
              <>
                <Box sx={{ width: "100%", height: "100%" }}>
                  <img
                    src={item.imgUrls}
                    width="100%"
                    height="100%"
                    alt={item.title}
                  />
                </Box>
                <Container
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%,-50%)",
                    width: "100%",
                  }}
                  ref={containerRef}
                >
                  <Stack
                    spacing={{ xs: 1, lg: 4 }}
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    sx={{ maxWidth: "540px" }}
                  >
                    <Slide
                      direction="down"
                      in={isActive}
                      container={containerRef.current}
                      timeout={1200}
                    >
                      <Typography
                        sx={{
                          fontSize: (theme) =>
                            theme.typography.pxToRem(isLgUp ? 60 : 32),
                          color: (theme) => `${theme.palette.grey[0]}`,
                          fontWeight: "bold",
                          textTransform: "capitalize",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Slide>
                    <Slide
                      direction="down"
                      in={isActive}
                      container={containerRef.current}
                      timeout={1000}
                    >
                      <Typography
                        variant="body"
                        sx={{
                          textAlign: "start",
                          fontSize: (theme) =>
                            theme.typography.pxToRem(isLgUp ? 16 : 12),
                          color: (theme) => `${theme.palette.grey[0]}`,
                          textTransform: "capitalize",
                        }}
                      >
                        {item.content}
                      </Typography>
                    </Slide>
                    <Slide
                      direction="down"
                      in={isActive}
                      container={containerRef.current}
                      timeout={800}
                    >
                      <Button variant="contained" sx={{ px: 4, py: 1.2 }}>
                        Get Started
                      </Button>
                    </Slide>
                  </Stack>
                </Container>
              </>
            )}
          </SwiperSlide>
        );
      })}
    </SwiperCustom>
  );
}

export default Carousel;
