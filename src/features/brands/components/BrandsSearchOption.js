import { FormProvider, FSelect } from "@form";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import brandStore from "../store/brandStore";
import { brandActionTypes } from "../store/type";
import BrandsSearch from "./BrandsSearch";

const LIST_SELECT = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "lastUpdated",
    label: "Last Updated",
  },
  {
    value: "name",
    label: "Brand Name",
  },
  {
    value: "numModels",
    label: "Number of Models",
  },
];

const defaultValues = {
  sorts: "all",
  name: "",
};

function BrandsSearchOption() {
  const { dispatch } = brandStore();
  const methods = useForm({
    defaultValues,
    mode: "onChange",
  });

  const { handleSubmit, watch } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const subscription = watch((value) => {
      dispatch({ type: brandActionTypes.SET_FILTERS_BRANDS, payload: value });
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack
        direction="row"
        spacing={20}
        alignItems="center"
        justifyContent="center"
      >
        <FSelect
          name="sorts"
          size="small"
          variant="standard"
          color="secondary"
          sx={{ width: "300px" }}
        >
          {LIST_SELECT.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </FSelect>
        <BrandsSearch />
      </Stack>
    </FormProvider>
  );
}

export default BrandsSearchOption;
