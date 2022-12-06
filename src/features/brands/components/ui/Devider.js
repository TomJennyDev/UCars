import { Divider, styled } from "@mui/material";

export const DividerStyled = styled(Divider)(({ theme, iseven }) => ({
  backgroundColor:
    iseven === "true" ? theme.palette.ucars.main : theme.palette.grey[600],
  width: 2,
  height: 64,
}));
