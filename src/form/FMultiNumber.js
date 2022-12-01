import { FormHelperText, InputAdornment, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

function FMultiNumber({ name, icon, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { value, onChange, ...restfield } = field;
        console.log(value);
        const handleOnChange = (e) => {
          console.log(e.target.name);
        };
        return (
          <>
            <TextField
              label="min"
              variant="outlined"
              value={value[0] || 0}
              onChange={handleOnChange}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {icon || "$"}
                  </InputAdornment>
                ),
              }}
              error={!!error}
              {...restfield}
              name="min"
            />
            <TextField
              label="max"
              variant="outlined"
              value={value[1] || 0}
              onChange={handleOnChange}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {icon || "$"}
                  </InputAdornment>
                ),
              }}
              error={!!error}
              {...restfield}
              name="max"
            />
            <FormHelperText>{error?.message}</FormHelperText>
          </>
        );
      }}
    />
  );
}

export default FMultiNumber;
