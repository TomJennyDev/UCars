import {
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Rating,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

function FRating({ name, options }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <RadioGroup {...field}>
            {options.map((option, index) => (
              <FormControlLabel
                key={option}
                value={option}
                control={
                  <Radio
                    disableRipple
                    color="default"
                    icon={<Rating readOnly value={4 - index} />}
                    checkedIcon={<Rating readOnly value={4 - index} />}
                  />
                }
                label="& Up"
                sx={{
                  my: 0.5,
                  borderRadius: 1,
                  "& > :first-of-type": { py: 0.5 },
                  "&:hover": {
                    opacity: 0.48,
                    "& > *": { bgcolor: "transparent" },
                  },
                }}
              />
            ))}
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

export default FRating;
