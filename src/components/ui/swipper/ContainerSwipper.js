import React from "react";
import { useSwiper } from "swiper/react";

function ContainerSwipper({ type }) {
  const swiper = useSwiper();
  console.log(swiper);

  return <span slot={type} className={type}></span>;
}

export default ContainerSwipper;
