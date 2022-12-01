import { Alert, Grid } from "@mui/material";
import { randomNumber } from "@utils";
import Poster from "components/Poster";
import useResponsive from "hooks/useResponsive";

import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ui/ProductSkeleton";

export default function ProductList({ products, isLoading }) {
  const isLgUp = useResponsive("up", "lg");
  const indexPoster = randomNumber(8);
  products = isLoading ? Array.from(Array(8).keys()) : products;

  return (
    <Grid
      container
      spacing={3}
      rows={{ sx: 12, md: 12, lg: 6 }}
      wrap={isLgUp ? "wrap" : "nowrap"}
      sx={{ overflowX: isLgUp ? "unset" : "scroll" }}
    >
      {products?.length === 0 && (
        <Alert
          severity="info"
          sx={{
            width: "100%",
            textAlign: "center",
            m: 4,
            mt: 6,
            backgroundColor: "white",
          }}
        >{`No results found`}</Alert>
      )}

      {products?.map((product, idx) => (
        <Grid key={product._id || idx} item xs={12} sm={12} md={3}>
          {isLoading ? (
            <ProductCardSkeleton />
          ) : indexPoster === idx ? (
            <Poster src="https://res.cloudinary.com/codershool/image/upload/v1669084095/ucars/cars/poster_uthzzo.png" />
          ) : (
            <ProductCard product={product} isLoading={isLoading} />
          )}
        </Grid>
      ))}
    </Grid>
  );
}
