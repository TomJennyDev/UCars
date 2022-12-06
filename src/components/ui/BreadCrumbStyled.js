import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

function BreadCrumbStyled({ title, isBack }) {
  const navigate = useNavigate();
  return (
    <Stack direction="row" alignItems="center">
      {isBack && (
        <IconButton
          onClick={() => navigate(-1)}
          color="inherit"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      )}
      <Typography
        variant="h5"
        color="inherit"
        sx={{
          fontFamily: "Poppins",
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
}

export default BreadCrumbStyled;
