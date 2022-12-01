import { Box } from "@mui/material";
import { Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper } from "swiper/react";
import "./swipper.css";

export const SWIPER_CONFIG_DEFAULT = {
  loop: true,
  autoplay: { delay: 5000 },
  navigation: false,
  breakpoints: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  modules: [Navigation, Autoplay],
};

function SwiperCustom(props) {
  const {
    config = SWIPER_CONFIG_DEFAULT,
    className,
    sxSwiper,
    children,
  } = props;

  return (
    <Box sx={{ width: 1, height: 1, position: "relative", ...sxSwiper }}>
      <Swiper className={className} {...config}>
        {children}
      </Swiper>
    </Box>
  );
}

export default SwiperCustom;
