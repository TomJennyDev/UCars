import { ContainerSwipper, SwiperCustom } from "components/ui";
import { useState } from "react";
import { Scrollbar } from "swiper";
import { SwiperSlide } from "swiper/react";
import FeaturesSkeleton from "../ui/FeaturesSkeleton";

import { BREAKPOINTS } from "theme";

import { calBreakPointSwiper, randomNumber } from "@utils";
import Poster from "components/Poster";
import FeaturesCard from "../FeaturesCard";
import "./featuresList.css";

const CUTOMS_CONFIG_SWIPERS = {
  loop: false,
  autoplay: false,
  breakpoints: calBreakPointSwiper(BREAKPOINTS, {
    slidesPerView: 3,
    spaceBetween: 20,
  }),
  modules: [Scrollbar],
};

export default function FeaturesList({ features, isLoading }) {
  features = isLoading ? Array.from(Array(6).keys()) : features;
  const indexPoster = randomNumber(3);
  const [status, setIsStatus] = useState("prev");

  const onSlideChange = (swiper) => {
    setIsStatus(swiper.swipeDirection);
  };

  return (
    <SwiperCustom
      config={{ ...CUTOMS_CONFIG_SWIPERS, onSlideChange }}
      className="features"
    >
      {status === "next" && <ContainerSwipper type="container-start" />}

      {features?.map((feature, idx) => (
        <SwiperSlide key={feature.id || idx} sx={{ py: 2, px: "auto" }}>
          {isLoading ? (
            <FeaturesSkeleton />
          ) : indexPoster === idx ? (
            <Poster
              src="https://res.cloudinary.com/codershool/image/upload/v1669084095/ucars/cars/poster_uthzzo.png"
              sx={{
                minHeight: "361px",
              }}
            />
          ) : (
            <FeaturesCard feature={feature} />
          )}
        </SwiperSlide>
      ))}

      {status === "prev" && <ContainerSwipper type="container-end" />}
    </SwiperCustom>
  );
}
