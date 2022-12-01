import { Link } from "@mui/material";
import { styled } from "@mui/system";

const PosterContainer = styled(Link)(({ theme, src, second, timeLimit }) => ({
  width: "100%",
  height: "100%",
  zIndex: 8,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  background: `url(${src}) white`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  borderRadius: 8,
  display: second === timeLimit ? "none" : "block",
  transition: "all 0.3s ease-out",
  "&:hover": {
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 2,
      width: "100%",
      height: "100%",
      borderRadius: 8,
      backgroundColor: "rgba(0,0,0,0.1)",
    },
  },
}));

export default PosterContainer;
