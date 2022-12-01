import { Container, Divider, Paper, Stack } from "@mui/material";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LoadingButton from "@mui/lab/LoadingButton";
import FormProvider from "form/FormProvider";
import useStore from "hooks/useStore";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { fCurrency } from "utils/numberFormat";
import { VariantCard } from "../ProductCard";
import Popup from "./Popup";
import PriceRange from "./PriceRange";
import SearchChild from "./SearchChild";
import Status from "./Status";
import VehicleType from "./VehicleType";

export const defaultValues = {
  status: "",
  minPrice: 0,
  maxPrice: 1000000,
  type: [],
};

export const STATUS = {
  newAD: "New Car ( Authorised Dealer)",
  newPI: "New Car ( Parallel Importer )",
  used: "Used Cars",
};

const arrPopup = [
  {
    id: "status",
    title: "New/Used",
    component: <Status />,
  },
  {
    id: "priceRange",
    title: "Price Range",
    component: <PriceRange />,
  },
  { id: "type", title: "Vehicle Type", component: <VehicleType /> },
];

function SearchOption() {
  const { setFilters } = useStore();
  const [filter, setFilter] = useState(defaultValues);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const isOpen = (id) => {
    return anchorEl?.id === id;
  };
  console.log(isOpen());
  const methods = useForm({
    defaultValues,
  });

  const {
    handleSubmit,
    resetField,
    watch,
    formState: { isSubmitting },
  } = methods;

  const handleResetField = useCallback(
    (nameField) => {
      if (nameField === "priceRange") {
        resetField("minPrice");
        resetField("maxPrice");
      }
      resetField(nameField);
    },
    [resetField]
  );

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSubmit = (data) => {
    setFilters(data);
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      setFilter({ ...filter, ...value })
    );
    return () => subscription.unsubscribe();
  }, [watch, setFilter, filter]);

  return (
    <Container
      maxwidth="lg"
      sx={{
        height: { md: "auto", lg: 160 },
        position: "relative",
        mt: { xs: "24px", lg: 0 },
        mb: { xs: "40px", lg: 0 },
      }}
    >
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack
          component={Paper}
          direction={{ md: "column", lg: "row" }}
          alignItems="center"
          justifyContent="center"
          divider={
            <Divider
              orientation="vertical"
              variant="insert"
              light={true}
              flexItem
            />
          }
          sx={{
            overFlow: "hidden",
            backgroundColor: isOpen()
              ? "white"
              : (theme) => `${theme.palette.grey[100]}`,
            position: { md: "relative", lg: "absolute" },
            zIndex: 8,
            width: "100%",
            top: { md: "auto", lg: "-30%" },
            left: 0,
          }}
          spacing={{ xs: 2 }}
        >
          {arrPopup.map(({ id, component, title }, _) => {
            return (
              <Fragment key={id}>
                <SearchChild
                  id={id}
                  title={title}
                  handleClick={handleClick}
                  isOpen={isOpen}
                >
                  {id === "status" ? (
                    <>
                      <VariantCard nowrap="true">
                        {filter.status
                          ? STATUS[filter.status]
                          : "Choose status"}
                      </VariantCard>
                    </>
                  ) : id === "priceRange" ? (
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                      >
                        <MonetizationOnIcon fontSize="small" />
                        <VariantCard>{fCurrency(filter.minPrice)}</VariantCard>
                      </Stack>
                      <Divider
                        orientation="horizontal"
                        sx={{ width: "10px", mx: 1 }}
                      />

                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                      >
                        <MonetizationOnIcon fontSize="small" />
                        <VariantCard nowrap="true">
                          {fCurrency(Math.floor(filter.maxPrice))}
                        </VariantCard>
                      </Stack>
                    </Stack>
                  ) : (
                    <>
                      <VariantCard nowrap="true">
                        {filter.type.length > 0
                          ? `+${filter.type.length} More `
                          : "Choose type"}
                      </VariantCard>
                    </>
                  )}
                </SearchChild>
                <Popup
                  id={id}
                  title={title}
                  anchorEl={anchorEl}
                  handleClose={handleClose}
                  handleResetField={handleResetField}
                  isOpen={isOpen}
                >
                  {component}
                </Popup>
              </Fragment>
            );
          })}

          <Stack
            sx={{
              width: "100%",
              alignItems: { xs: "stretch", md: "stretch", lg: "center" },
            }}
          >
            <LoadingButton
              loading={isSubmitting}
              variant="contained"
              type="submit"
              sx={{
                px: "44px",
                py: "15px",
              }}
            >
              Search
            </LoadingButton>
          </Stack>
        </Stack>
      </FormProvider>
    </Container>
  );
}

export default SearchOption;
