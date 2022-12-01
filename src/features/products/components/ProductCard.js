import { Avatar, Box, Link, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import useResponsive from "hooks/useResponsive";
import { fCurrency } from "utils/numberFormat";

export const Title = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  color: theme.palette.grey[800],
  lineHeight: "24px",
  fontWeight: 600,
}));

const ChipCard = styled("span")(({ theme }) => ({
  display: "inline-block",
  width: "64px",
  height: "20px",
  backgroundColor: theme.palette.secondary.light,

  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "20px",
  textAlign: "center",
  color: theme.palette.secondary.main,
}));

const PriceCard = styled("span")(({ theme }) => ({
  display: "inline-block",
  fontWeight: 600,
  lineHeight: "24px",
  color: theme.palette.secondary.main,
  pr: 1,
}));

export const VariantCard = styled("span")(({ theme }) => ({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "22px",
  color: theme.palette.grey[600],
  pr: 1,
}));

export default function ProductCard({ product }) {
  const isLgUp = useResponsive("up", "lg");

  return (
    <Link underline="none" href="#">
      <Card
        sx={{
          minWidth: isLgUp ? "auto" : "281px",
          minHeight: isLgUp ? "auto" : "361px",
        }}
      >
        <CardMedia
          component="img"
          height="187"
          image={product.imgUrl}
          alt={product.name}
          sx={{ width: "100%" }}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Title gutterBottom nowrap="true">
            {product.name}
          </Title>
          <Box>
            <Typography
              color="palette.grey[800]"
              sx={{ display: "inline-block", mr: 1 }}
            >
              From <PriceCard>{fCurrency(product.price.total)}</PriceCard>
            </Typography>
            <ChipCard>
              {fCurrency(product.price.installment.price)}/
              {product.price.installment.tenure.type.slice(0, 2)}
            </ChipCard>
          </Box>
          <VariantCard>
            {`${product.variants} variants ${
              Object.keys(product.licence.coe).length ? "| with COE" : ""
            }  `}
          </VariantCard>
          <Stack direction="row" alignItems="center" sx={{ gap: 1 }}>
            <Avatar alt={product.brand.name} src={product.brand.imgUrl} />
            <Typography color="palette.grey[800]" sx={{ fontSize: "14px" }}>
              {product.type}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
}
