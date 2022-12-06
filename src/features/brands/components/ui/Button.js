import { Button, styled } from "@mui/material";

export const ButtonBrandStatus = styled(Button)(({ theme, isactive }) => ({
  px: 20,
  py: 8,
  color:
    isactive === "true" ? theme.palette.ucars.dark : theme.palette.grey[600],
  fontSize: 16,
  background: theme.palette.grey[100],
  border: "none",
  "&:hover": {
    background: theme.palette.grey[100],
  },
}));

export const ButtonBrandDetails = styled(Button)(({ theme }) => ({
  px: 9,
  py: 16,
  color: theme.palette.grey[800],
  fontSize: 16,
  border: `1px solid ${theme.palette.grey[400]}`,
}));
