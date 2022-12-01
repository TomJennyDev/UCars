import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

function FTextField({ name, label, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { value, ...restfield } = field;
        return (
          <TextField
            variant="standard"
            label={label || ""}
            value={value || ""}
            {...restfield}
            fullWidth
            error={!!error}
            helperText={error?.message}
            {...other}
          />
        );
      }}
    />
  );
}

export default FTextField;
