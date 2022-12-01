import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

function FMultiCheckbox({ name, options, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const onSelected = (option) =>
          field.value.includes(option)
            ? field.value.filter((value) => value !== option)
            : [...field.value, option];

        return (
          <FormGroup>
            <Grid container spacing={1} direction="row-reverse">
              {options.map((option) => (
                <Grid item xs={4} key={option}>
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={field.value.includes(option)}
                        onChange={() => field.onChange(onSelected(option))}
                      />
                    }
                    label={option}
                    {...other}
                  />
                </Grid>
              ))}
            </Grid>
          </FormGroup>
        );
      }}
    />
  );
}

export default FMultiCheckbox;
