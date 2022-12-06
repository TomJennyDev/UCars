import { Button, Container, Stack } from "@mui/material";
import PaginationBar from "components/PaginationBar";
import { carStore, ProductList, useFilterCar } from "features/products";
import { useFetchCar } from "features/products/services/car.query";

import { useState } from "react";

function Cars() {
  const [isShow, setIsShow] = useState(false);
  const { page, totalPage } = carStore();
  const { isLoading } = useFetchCar();
  const { cars, setPage } = useFilterCar();

  return (
    <Stack
      component={Container}
      maxwidth="xl"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <ProductList products={cars} isLoading={isLoading} />

      {isShow && !isLoading ? (
        <PaginationBar setPage={setPage} page={page} totalPage={totalPage} />
      ) : (
        <Button variant="outlined" onClick={() => setIsShow(true)}>
          View more new cars{" "}
        </Button>
      )}
    </Stack>
  );
}

export default Cars;
