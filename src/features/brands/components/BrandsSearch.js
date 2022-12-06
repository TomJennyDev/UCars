import { FTextField } from "@form";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
function BrandsSearch() {
  return (
    <FTextField
      size="small"
      variant="filled"
      name="name"
      placeholder="Search car brand"
      disableAnimation={true}
      sx={{
        ".MuiInputBase-input": { width: "240px", height: "40px", p: 0 },
        "&&& .MuiInputAdornment-root.MuiInputAdornment-positionStart.MuiInputAdornment-filled.MuiInputAdornment-sizeSmall":
          {
            mt: 0,
          },
        ".MuiFilledInput-root": {
          borderRadius: 20,
          width: "240px",
          height: "40px",
        },
        ".MuiInputBase-root::before": {
          border: "none",
        },
        "&&& .MuiInputBase-root:hover::before": {
          border: "none",
        },
        "&&& .MuiInputBase-root::after": {
          border: "none",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default BrandsSearch;
