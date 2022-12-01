import { useEffect, useState } from "react";

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePostion = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePostion);
    updatePostion();

    return () => {
      window.removeEventListener("scroll", updatePostion);
    };
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
