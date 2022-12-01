import { Button, Container, Stack } from "@mui/material";
import PaginationBar from "components/ui/PaginationBar";
import { ProductList } from "features/products";
import useStore from "hooks/useStore";
import { useState } from "react";

function Cars() {
  const { cars, isLoading, setPage, page, totalPage } = useStore();
  const [isShow, setIsShow] = useState(false);

  return (
    <Stack
      component={Container}
      maxwidth="xl"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <ProductList products={cars} isLoading={isLoading} />

      {isShow ? (
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
