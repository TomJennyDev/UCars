import { Card, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { fCurrency } from "utils/numberFormat";

export const Title = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  color: theme.palette.grey[800],
  lineHeight: "48px",
  fontSize: "32px",
  fontWeight: 500,
  textTransform: "capitalize",
}));

export default function FeaturesCard({ feature }) {
  return (
    <Card
      sx={{
        minWidth: "415px",
        minHeight: "361px",
        fontFamily: "Poppins",
        borderTopRightRadius: "38px",
        borderBottomLeftRadius: "38px",
        my: 2,
      }}
    >
      <CardMedia
        component="img"
        height="202"
        image={feature.imgUrl}
        alt={feature.name}
        sx={{ width: "100%", mb: 3 }}
      />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: 1, mx: 2 }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
          sx={{ gap: 1 }}
        >
          <Title nowrap="true">the palace</Title>
          <Typography
            color="palette.grey[800]"
            sx={{ fontSize: "19px", lineHeight: "29px" }}
          >
            Duplex
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
          sx={{ gap: 1 }}
        >
          <Typography
            color="palette.grey[800]"
            sx={{ fontSize: "19px", lineHeight: "29px" }}
          >
            Lekki,phase 2
          </Typography>
          <Typography
            color="primary.main"
            sx={{ fontSize: "20px", fontWeight: 700 }}
          >
            {fCurrency(2000)}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
