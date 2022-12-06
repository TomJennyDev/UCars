import { Box, Grid } from "@mui/material";

import AlertMsg from "components/AlertMsg";
import Poster from "components/Poster";
import useResponsive from "hooks/useResponsive";
import { randomNumber } from "utils/until";

import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ui/ProductSkeleton";

export default function ProductList({ products, isLoading }) {
  const isLgUp = useResponsive("up", "lg");
  const indexPoster = randomNumber(8);
  products = isLoading ? Array.from(Array(8).keys()) : products;

  if (products?.length === 0) {
    return <AlertMsg />;
  }
  return (
    <Grid
      container
      spacing={3}
      rows={{ sx: 12, md: 12, lg: 6 }}
      wrap={isLgUp ? "wrap" : "nowrap"}
      sx={{ overflowX: isLgUp ? "unset" : "scroll" }}
    >
      {products?.map((product, idx) => (
        <Grid key={product?.id || idx} item xs={12} sm={12} md={3}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              borderRadius: 8,
              overFlow: "hidden",
            }}
          >
            {isLoading ? (
              <ProductCardSkeleton />
            ) : (
              <>
                {indexPoster === idx && (
                  <Poster src="https://res.cloudinary.com/codershool/image/upload/v1669084095/ucars/cars/poster_uthzzo.png" />
                )}
                <ProductCard product={product} isLoading={isLoading} />
              </>
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
