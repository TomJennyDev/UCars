import { styled, Typography } from "@mui/material";

export const TypographyName = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "20px",
  color: "#2F465F",
  lineHeight: "30px",
  fontWeight: 500,
}));

export const TypographyDesc = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "14px",
  color: theme.palette.grey[500],
  lineHeight: "22px",
  fontWeight: 400,
  width: "125px",
  display: "block",
}));

export const TypographyModels = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "14px",
  color: theme.palette.secondary.main,
  lineHeight: "22px",
  fontWeight: 500,
}));

export const TypographyLastUpdate = styled(TypographyName)(({ theme }) => ({
  fontSize: "14px",
}));

export const TypographyDate = styled(TypographyDesc)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "14px",
  color: theme.palette.grey[500],
  lineHeight: "22px",
  fontWeight: 400,
}));
