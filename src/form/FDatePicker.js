import { DatePicker } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import Label from "../Label";

export default function FDatePicker({ name, label, ...other }) {
  const { control } = useFormContext();
  return (
    <Box>
      {label ? <Label>{label}</Label> : ""}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              {...field}
              {...other}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </LocalizationProvider>
        )}
      />
    </Box>
  );
}
