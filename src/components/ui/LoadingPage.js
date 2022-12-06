import { Box } from "@mui/system";
import { LoadingIcon } from "./LoadingIcon";
import Logo from "./Logo";

function LoadingPage() {
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 2000,
        top: 0,
        left: 0,
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: (theme) => theme.palette.grey[100],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Logo
        sx={{
          width: "200px",
          height: "auto",
        }}
        src="https://res.cloudinary.com/codershool/image/upload/v1669084028/ucars/logo/UCARS_Logo_hxhvzo.svg"
      />
      <LoadingIcon>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </LoadingIcon>
    </Box>
  );
}

export default LoadingPage;
