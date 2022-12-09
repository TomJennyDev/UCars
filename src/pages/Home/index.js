import { Stack } from "@mui/material";
import useElementOnScreen from "hooks/useElementOnScreen";
import useResponsive from "hooks/useResponsive";
import { lazy, Suspense } from "react";
import Carousel from "./Carousel";

export const components = [
  {
    id: 2,
    title: "searchOption",
    element: lazy(() =>
      import("features/products/components/search/SearchOption")
    ),
  },
  { id: 3, title: "cars", element: lazy(() => import("./Cars")) },
  {
    id: 4,
    title: "howitwork",
    element: lazy(() => import("./howitwork/HowItWork")),
  },
  {
    id: 5,
    title: "features",
    element: lazy(() => import("features/features/components/Features")),
  },
  {
    id: 6,
    title: "cta",
    element: lazy(() => import("./CTA")),
  },
  {
    id: 7,
    title: "shortIntro",
    element: lazy(() => import("./ShortIntro")),
  },
];
const renderComponent = (components, isLgUp) => {
  return (
    <>
      {components.map((component, idx) => {
        return (
          <Suspense key={component.id} fallback={<></>}>
            {component.title === "shortIntro" ? (
              isLgUp && <component.element />
            ) : (
              <component.element />
            )}
          </Suspense>
        );
      })}
    </>
  );
};

function HomePage() {
  const isLgUp = useResponsive("up", "lg");

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  return (
    <Stack>
      <Carousel />
      {renderComponent(components, isLgUp)}
    </Stack>
  );
}

export default HomePage;
