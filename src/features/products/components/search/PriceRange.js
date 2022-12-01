import { InputAdornment, Stack } from "@mui/material";
import FTextField from "form/FTextField";
import { forwardRef } from "react";
import { NumericFormat } from "react-number-format";

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
    />
  );
});

function PriceRange() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <FTextField
        name="minPrice"
        label="min"
        variant="outlined"
        size="small"
        fullWidth={false}
        InputProps={{
          inputComponent: NumberFormatCustom,
          startAdornment: <InputAdornment position="start"> $</InputAdornment>,
        }}
      />
      -
      <FTextField
        name="maxPrice"
        label="max"
        variant="outlined"
        size="small"
        fullWidth={false}
        InputProps={{
          inputComponent: NumberFormatCustom,
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </Stack>
  );
}

export default PriceRange;
