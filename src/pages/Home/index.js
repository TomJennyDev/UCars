import { Stack } from "@mui/material";
import Features from "features/features/components/Features";
import SearchOption from "features/products/components/search/SearchOption";
import useResponsive from "hooks/useResponsive";
import Carousel from "./Carousel";
import Cars from "./Cars";
import CTA from "./CTA";
import HowItWork from "./howitwork/HowItWork";
import ShortIntro from "./ShortIntro";

function HomePage() {
  const isLgUp = useResponsive("up", "lg");

  return (
    <Stack>
      <Carousel />
      <SearchOption />
      <Cars />
      <HowItWork />
      <Features />
      <CTA />
      {isLgUp && <ShortIntro />}
    </Stack>
  );
}

export default HomePage;
