import { FormHelperText } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import { Controller, useFormContext } from "react-hook-form";

function FRadioGroupCustom({ name, children, ...other }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <RadioGroup {...field} row {...other}>
            {children}
          </RadioGroup>

          {!!error && (
            <FormHelperText error sx={{ px: 2 }}>
              {error.message}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
}

export default FRadioGroupCustom;
