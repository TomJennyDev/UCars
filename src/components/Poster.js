import useHover from "hooks/useHover";
import { useEffect, useState } from "react";
import { CircularProgressWithLabel, PosterContainer } from "./ui";

function Poster({ src, sx }) {
  const timeLimit = 3;
  const [hoverRef, isHovered] = useHover();
  const [second, setSecond] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer = null;
    if (isHovered && second !== timeLimit) {
      timer = setInterval(() => {
        setSecond((prevSecond) =>
          prevSecond >= timeLimit ? 0 : prevSecond + 1
        );
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + 100 / (timeLimit - 1)
        );
      }, 1000);
    } else if (second === timeLimit || !isHovered) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isHovered, second]);

  return (
    <PosterContainer
      href="#"
      ref={hoverRef}
      src={src}
      second={second}
      sx={sx}
      timeLimit={timeLimit}
    >
      <CircularProgressWithLabel
        sx={{
          position: "absolute",
          top: "5%",
          right: "5%",
          zIndex: 10,
        }}
        number={second}
        variant="determinate"
        value={progress}
      />
    </PosterContainer>
  );
}

export default Poster;
